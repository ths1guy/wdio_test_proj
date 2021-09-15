// import { CreateAccount } from "../page/createAccount.page"; // не нужен после создания аггрегатора
import { APP } from "../page/application";
import { createNewUserAndLogin } from "../utils/createUser";

describe('User', () => {
    it.only('can register', () => {
        console.time("Test 'can register' took");

        // const createAccount = new CreateAccount(); // убираем после того, как экспортировали не класс, а его instance
        APP.CreateAccount.open(); // скажет открыть страницу
        // const email = `Test${new Date().getTime() / 1000}@test.com`; // лучше разнести логику и сделать генерацию здесь

        APP.CreateAccount.fillWith({ // передаем наши тестовые данные
            firstName: "Name1",
            lastName: "LastName1",
            street: "Tsentralna",
            city: "Odesa",
            state: "Odeska",
            zip: "001002",
            ssn: "1231243ZASDVB1231",
            username: "Amanbek",
            // email: email,
            password: "12345",
            confirmPassword: "12345"
        });

        APP.CreateAccount.confirmRegistration()

        const expectedText = 'This username already exists.'

        // возвращаем true если элемент видимый и содержит ожидаемый текст 
        // callback функция будет вызывать столько раз, пока не случится timeout,
        // или пока не вернется true
        // timeout можно увидеть в wdio.conf.ts - waitForTimeout
        browser.waitUntil(() => {
            return $('.error').isDisplayed() && $('.error').getText().includes(expectedText)
        }, {timeoutMsg: 'Expected alert to be visible and have correct text'})
        // browser.pause(5000)
        // const congratsUser = $('.title')
        // expect(congratsUser).toHaveTextContaining(expectedText)

        // создаем тест для регистрации пользователя
        
        it("register user through http", () => { // only запустит только этот тест
            const user = createNewUserAndLogin();
        });
        console.timeEnd("Test 'can register' took");
    })

    // fill registration form using js
    it("fill registration form", () => {
        browser.url("/create_account")
        console.time("JS registration")
        browser.execute(function() { // исполняем js код в контексте страницы
            document.querySelector("[name='customer.firstName']")["value"] = "testfirstname";
            document.querySelector("[name='customer.lastName']")["value"] = "LastName1";
            document.querySelector("[name='customer.address.street']")["value"] = "Tsentralna";
            document.querySelector("[name='customer.address.city']")["value"] = "Odesa";
            document.querySelector("[name='customer.address.state']")["value"] = "Odeska";
            document.querySelector("[name='customer.address.zipCode']")["value"] = "00100";
            document.querySelector("[name='customer.ssn']")["value"] = "1231243ZASDVB1231";
            document.querySelector("[name='customer.username']")["value"] = "Amanbek";
            document.querySelector("[name='customer.password']")["value"] = "123456";
            document.querySelector("[name='customer.repeatedPassword']")["value"] = "123456";
            const registerBtns = document.querySelectorAll("[type='submit'].button"); // у нас две кнопки с одинаковым селектором
            registerBtns.forEach(btn => {
                if (btn.getAttribute("value") == "Register") {
                    btn["click"]();
                }
            })
        })
        console.timeEnd("JS registration");

        // custom commands
        it("custom commands", function() {
            browser.addCommand("wait and click", function() {
                // 'this' is return value of $(selector)
                this.waitForDisplayed();
                this.click();
            }, true)

            $("div").waitAndClick();

            // browser.overwriteCommand('click', async (clickOrigFunction, ms) => {
            //     console.log(`### doing click`)
            //     clickOrigFunction()
            // }, true)
            

            APP.CreateAccount.open(); // скажет открыть страницу
            const email = `Test${new Date().getTime() / 1000}@test.com`; // лучше разнести логику и сделать генерацию здесь

            APP.CreateAccount.fillWith({ // передаем наши тестовые данные
                firstName: "Name1",
                lastName: "LastName1",
                street: "Tsentralna",
                city: "Odesa",
                state: "Odeska",
                zip: "001002",
                ssn: "1231243ZASDVB1231",
                username: "Amanbek",
                // email: email,
                password: email,
                confirmPassword: email
            });

            APP.CreateAccount.confirmRegistration()
        })
        // browser.pause(15000);

        
    });
})