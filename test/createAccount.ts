// import { CreateAccount } from "../page/createAccount.page"; // не нужен после создания аггрегатора
import { APP } from "../page/application";

describe('User', () => {
    it('can register', () => {
        console.time("Test 'can register' took");

        // const createAccount = new CreateAccount(); // убираем после того, как экспортировали не класс, а его instance
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

        console.timeEnd("Test 'can register' took");
    })
})