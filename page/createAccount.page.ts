export class CreateAccountPO {

    // public registrationForm = $('#customerForm') // будет ошибка и
    // нужен геттер, т.к. при обращении через доллар он вызовется еще до того, как появится browser
    // при каждом обращении this.registrationForm будет отрабатывать тело функции

    // Если я объявляю какие то элементы  и хочу их использовать между методами
    // я должен их завернуть в геттер
    public get registrationForm() {
        return $('#customerForm')
    }

    confirmRegistration() {
        // throw new Error("Method not implemented.");
        this.registrationForm.$('input[type="submit"]').click()

    }
    // options - параметр, далее через двоеточие - его тип, т.е. что должно в нем содержаться
    // в данном случае должен содержаться объект
    fillWith(options: { firstName: string; lastName: string; street: string; city: string; state: string; zip: string; ssn: string; username: string; password: string; confirmPassword: string; }) {
        // throw new Error("Method not implemented.");

        this.registrationForm.$("[name='customer.firstName']").setValue(options.firstName) // setValue печатает в элемент
        this.registrationForm.$("[name='customer.lastName']").setValue(options.lastName) // setValue печатает в элемент
        this.registrationForm.$("[name='customer.address.street']").setValue(options.street) 
        this.registrationForm.$("[name='customer.address.city']").setValue(options.city) 
        this.registrationForm.$("[name='customer.address.state']").setValue(options.state) 
        this.registrationForm.$("[name='customer.address.zipCode']").setValue(options.zip) 
        this.registrationForm.$("[name='customer.ssn']").setValue(options.ssn) 
        this.registrationForm.$("[name='customer.username']").setValue(options.username) 
        this.registrationForm.$("[name='customer.password']").setValue(options.password) 
        this.registrationForm.$("[name='repeatedPassword']").setValue(options.confirmPassword)
    }
    open() {
        browser.url('/parabank/register.htm') // открываем страницу аккаунта
    }
}

export const CreateAccount = new CreateAccountPO();