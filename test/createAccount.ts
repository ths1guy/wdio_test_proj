import { CreateAccount } from "../page/createAccount.page";

describe('User', () => {
    it('can register', () => {
        console.time("Test 'can register' took");

        const createAccount = new CreateAccount();

        browser.url('/parabank/register.htm') // открываем страницу аккаунта
        const registrationForm = $('#customerForm') // поиск элемента по css селектору
        registrationForm.$("[name='customer.firstName']").setValue('Name1') // setValue печатает в элемент
        registrationForm.$("[name='customer.lastName']").setValue('Last name2') // setValue печатает в элемент
        registrationForm.$("[name='customer.address.street']").setValue('Tsentralna') 
        registrationForm.$("[name='customer.address.city']").setValue('Odesa') 
        registrationForm.$("[name='customer.address.state']").setValue('Obl') 
        registrationForm.$("[name='customer.address.zipCode']").setValue('001002') 
        registrationForm.$("[name='customer.ssn']").setValue('1231243ZASDVB1231') 
        registrationForm.$("[name='customer.username']").setValue('qwetdkfmbgklwmhbek') 
        registrationForm.$("[name='customer.password']").setValue('L123!zcvv') 
        registrationForm.$("[name='repeatedPassword']").setValue('L123!zcvv') 

        registrationForm.$('input[type="submit"]').click()

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