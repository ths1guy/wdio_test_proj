const request = require("request-promise-native");
const faker = require("faker");
const cheerio = require("cheerio");

export function createNewUserAndLogin() {
    console.time("Create and login user took: ");
    const credentials = createNewUser() // создаем нового юзера
    const result = quickLogin(credentials) // логиним этого юзера в браузере
    console.timeEnd("Create and login user took: ");
    return result
}

export function createNewUser():any {
    // чтобы webdriver io смог асинхронную функцию засинхронизировать, т.е. сделать ее синхронной
    // дождаться ее исполнения без промисов, коллбеков и т.д, нужно эту функцию завернуть
    // в метод browser.call();
    return browser.call(createNewUserAsync);
}

async function createNewUserAsync() { // функция возвращает какой то промис
    const j = request.jar();
    const req = request.defaults({
        jar: j,
        resolveWithFullResponse: true,
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,ar;q=0.7,ru;q=0.6,uk;q=0.5",
            "Content-type": "application/x-www-form-urlencoded"
        }
    });

    const tokenResponse = await req.get(
        "http://urlurl/create_account"
    );

    const $ = cheerio.load(tokenResponse.body);
    const token = $("form[name='customer_form'] input[name='token']").attr("value")
    const uuid = faker.random.uuid().replace(/-/gm, "");
    const email = `${uuid}@test.com`;
    const password = '123456';

    const formData = {
        token: token,
        company: null,
        tax_id: null,
        firstname: "test",
        lastname: "lasttest",
        address1: null,
        address2: null,
        postcode: null,
        city: null,
        country_code: "RU",
        email: email,
        phone: "123412341234",
        password: password,
        confirmed_password: password,
        create_account: "Create Account"
    };
    await req.post("http://urlurl/create_account", {
        form: formData
    }).catch(err => {});

    return {email: email, password: password}
}

export function quickLogin(credentials) {
    console.log("Doing login for user: ", credentials);
    const cookieWithSessionID = browser.call(function() {
        return quickLoginAsync(credentials)
    });
    browser.url("/")
    browser.setCookies({
        name: cookieWithSessionID.key,
        value: cookieWithSessionID.value
    })
    browser.refresh
    return {
        credentials: credentials,
        cookieWithSessionID: cookieWithSessionID
    }
}

async function quickLoginAsync(credentials: any) {
    const j = request.jar;
    const tokenResponse = await request.get(
        "http://urlurl/login",
            {
                jar: j,
                resolveWithFullResponse: true,
                headers: {
                    Accept: "text/html,application/xhtml+xml,application/xml",
                    "Content-type": "text/html; charset=UTF-8"
                }
            }
    );
    const $ = cheerio.load(tokenResponse.body); // получаем защитный csrf токен (?)
    const token = $("form[name='customer_form'] input[name='token']").attr("value");

    const formData = {
        token: token,
        redirect_url: null,
        email: credentials.email,
        password: credentials.password,
        login: "Sign in"
    };

    await request.post("http://urlurl/login", {
        form: formData,
        jar: j,
        resolveWithFullResponse: true,
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8,ar;q=0.7,ru;q=0.6,uk;q=0.5",
            "Content-type": "application/x-www-form-urlencoded"
        }
    }).then(null, (err: any) => {});
    const cookies = j.getCookies("http://urlurl")
    return cookies.find((cookie: { [x: string]: string; }) => cookie['key'] == "LCSESSID");
}