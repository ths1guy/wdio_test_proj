"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickLogin = exports.createNewUser = exports.createNewUserAndLogin = void 0;
const request = require("request-promise-native");
const faker = require("faker");
const cheerio = request("cheerio");
function createNewUserAndLogin() {
    console.time("Create and login user took: ");
    const credentials = createNewUser(); // создаем нового юзера
    const result = quickLogin(credentials); // логиним этого юзера в браузере
    console.timeEnd("Create and login user took: ");
    return result;
}
exports.createNewUserAndLogin = createNewUserAndLogin;
function createNewUser() {
    // чтобы webdriver io смог асинхронную функцию засинхронизировать, т.е. сделать ее синхронной
    // дождаться ее исполнения без промисов, коллбеков и т.д, нужно эту функцию завернуть
    // в метод browser.call();
    return browser.call(createNewUserAsync);
}
exports.createNewUser = createNewUser;
async function createNewUserAsync() {
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
    const tokenResponse = await req.get("http://urlurl/create_account");
    const $ = cheerio.load(tokenResponse.body);
    const token = $("form[name='customer_form'] input[name='token']").attr("value");
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
    }).catch(err => { });
    return { email: email, password: password };
}
function quickLogin(credentials) {
    console.log("Doing login for user: ", credentials);
    const cookieWithSessionID = browser.call(function () {
        return quickLoginAsync(credentials);
    });
    browser.url("/");
    browser.setCookies({
        name: cookieWithSessionID.key,
        value: cookieWithSessionID.value
    });
    browser.refresh;
    return {
        credentials: credentials,
        cookieWithSessionID: cookieWithSessionID
    };
}
exports.quickLogin = quickLogin;
async function quickLoginAsync(credentials) {
    const j = request.jar;
    const tokenResponse = await request.get("http://urlurl/login", {
        jar: j,
        resolveWithFullResponse: true,
        headers: {
            Accept: "text/html,application/xhtml+xml,application/xml",
            "Content-type": "text/html; charset=UTF-8"
        }
    });
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
    }).then(null, (err) => { });
    const cookies = j.getCookies("http://urlurl");
    return cookies.find((cookie) => cookie['key'] == "LCSESSID");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3V0aWxzL2NyZWF0ZVVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDbEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuQyxTQUFnQixxQkFBcUI7SUFDakMsT0FBTyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sV0FBVyxHQUFHLGFBQWEsRUFBRSxDQUFBLENBQUMsdUJBQXVCO0lBQzNELE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDLGlDQUFpQztJQUN4RSxPQUFPLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDaEQsT0FBTyxNQUFNLENBQUE7QUFDakIsQ0FBQztBQU5ELHNEQU1DO0FBRUQsU0FBZ0IsYUFBYTtJQUN6Qiw2RkFBNkY7SUFDN0YscUZBQXFGO0lBQ3JGLDBCQUEwQjtJQUMxQixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBTEQsc0NBS0M7QUFFRCxLQUFLLFVBQVUsa0JBQWtCO0lBQzdCLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3pCLEdBQUcsRUFBRSxDQUFDO1FBQ04sdUJBQXVCLEVBQUUsSUFBSTtRQUM3QixPQUFPLEVBQUU7WUFDTCxNQUFNLEVBQUUseUlBQXlJO1lBQ2pKLGlCQUFpQixFQUFFLHVEQUF1RDtZQUMxRSxjQUFjLEVBQUUsbUNBQW1DO1NBQ3REO0tBQ0osQ0FBQyxDQUFDO0lBRUgs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