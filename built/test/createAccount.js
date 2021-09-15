"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CreateAccount } from "../page/createAccount.page"; // не нужен после создания аггрегатора
const application_1 = require("../page/application");
const createUser_1 = require("../utils/createUser");
describe('User', () => {
    it('can register', () => {
        console.time("Test 'can register' took");
        // const createAccount = new CreateAccount(); // убираем после того, как экспортировали не класс, а его instance
        application_1.APP.CreateAccount.open(); // скажет открыть страницу
        const email = `Test${new Date().getTime() / 1000}@test.com`; // лучше разнести логику и сделать генерацию здесь
        application_1.APP.CreateAccount.fillWith({
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
        application_1.APP.CreateAccount.confirmRegistration();
        const expectedText = 'This username already exists.';
        // возвращаем true если элемент видимый и содержит ожидаемый текст 
        // callback функция будет вызывать столько раз, пока не случится timeout,
        // или пока не вернется true
        // timeout можно увидеть в wdio.conf.ts - waitForTimeout
        browser.waitUntil(() => {
            return $('.error').isDisplayed() && $('.error').getText().includes(expectedText);
        }, { timeoutMsg: 'Expected alert to be visible and have correct text' });
        // browser.pause(5000)
        // const congratsUser = $('.title')
        // expect(congratsUser).toHaveTextContaining(expectedText)
        // создаем тест для регистрации пользователя
        it.only("register user through http", () => {
            const user = (0, createUser_1.createNewUserAndLogin)();
        });
        console.timeEnd("Test 'can register' took");
    });
    // fill registration form using js
    it("fill registration form", () => {
        browser.url("/create_account");
        console.time("JS registration");
        browser.execute(function () {
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
            });
        });
        console.timeEnd("JS registration");
        // custom commands
        it.only("custom commands", function () {
            browser.addCommand("wait and click", function () {
                // 'this' is return value of $(selector)
                this.waitForDisplayed();
                this.click();
            }, true);
            $("div").waitAndClick();
            // browser.overwriteCommand('click', async (clickOrigFunction, ms) => {
            //     console.log(`### doing click`)
            //     clickOrigFunction()
            // }, true)
            application_1.APP.CreateAccount.open(); // скажет открыть страницу
            const email = `Test${new Date().getTime() / 1000}@test.com`; // лучше разнести логику и сделать генерацию здесь
            application_1.APP.CreateAccount.fillWith({
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
            application_1.APP.CreateAccount.confirmRegistration();
        });
        // browser.pause(15000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3Rlc3QvY3JlYXRlQWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFHQUFxRztBQUNyRyxxREFBMEM7QUFDMUMsb0RBQTREO0FBRTVELFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUV6QyxnSEFBZ0g7UUFDaEgsaUJBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQywwQkFBMEI7UUFDcEQsTUFBTSxLQUFLLEdBQUcsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksV0FBVyxDQUFDLENBQUMsa0RBQWtEO1FBRS9HLGlCQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUN2QixTQUFTLEVBQUUsT0FBTztZQUNsQixRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxRQUFRO1lBQ2YsR0FBRyxFQUFFLFFBQVE7WUFDYixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLFFBQVEsRUFBRSxTQUFTO1lBQ25CLGdCQUFnQjtZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLGVBQWUsRUFBRSxLQUFLO1NBQ3pCLENBQUMsQ0FBQztRQUVILGlCQUFHLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUE7UUFFdkMsTUFBTSxZQUFZLEdBQUcsK0JBQStCLENBQUE7UUFFcEQsbUVBQW1FO1FBQ25FLHlFQUF5RTtRQUN6RSw0QkFBNEI7UUFDNUIsd0RBQXdEO1FBQ3hELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxD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