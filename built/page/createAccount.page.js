"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = exports.CreateAccountPO = void 0;
class CreateAccountPO {
    // public registrationForm = $('#customerForm') // будет ошибка и
    // нужен геттер, т.к. при обращении через доллар он вызовется еще до того, как появится browser
    // при каждом обращении this.registrationForm будет отрабатывать тело функции
    // Если я объявляю какие то элементы  и хочу их использовать между методами
    // я должен их завернуть в геттер
    get registrationForm() {
        return $('#customerForm');
    }
    confirmRegistration() {
        throw new Error("Method not implemented.");
        this.registrationForm.$('input[type="submit"]').click();
    }
    // options - параметр, далее через двоеточие - его тип, т.е. что должно в нем содержаться
    // в данном случае должен содержаться объект
    fillWith(options) {
        throw new Error("Method not implemented.");
        this.registrationForm.$("[name='customer.firstName']").setValue(options.firstName); // setValue печатает в элемент
        this.registrationForm.$("[name='customer.lastName']").setValue(options.lastName); // setValue печатает в элемент
        this.registrationForm.$("[name='customer.address.street']").setValue(options.street);
        this.registrationForm.$("[name='customer.address.city']").setValue(options.city);
        this.registrationForm.$("[name='customer.address.state']").setValue(options.state);
        this.registrationForm.$("[name='customer.address.zipCode']").setValue(options.zip);
        this.registrationForm.$("[name='customer.ssn']").setValue(options.ssn);
        this.registrationForm.$("[name='customer.username']").setValue(options.username);
        this.registrationForm.$("[name='customer.password']").setValue(options.password);
        this.registrationForm.$("[name='repeatedPassword']").setValue(options.confirmPassword);
    }
    open() {
        browser.url('/parabank/register.htm'); // открываем страницу аккаунта
    }
}
exports.CreateAccountPO = CreateAccountPO;
exports.CreateAccount = new CreateAccountPO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWNjb3VudC5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS9jcmVhdGVBY2NvdW50LnBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsTUFBYSxlQUFlO0lBRXhCLGlFQUFpRTtJQUNqRSwrRkFBK0Y7SUFDL0YsNkVBQTZFO0lBRTdFLDJFQUEyRTtJQUMzRSxpQ0FBaUM7SUFDakMsSUFBVyxnQkFBZ0I7UUFDdkIsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFFM0QsQ0FBQztJQUNELHlGQUF5RjtJQUN6Riw0Q0FBNEM7SUFDNUMsUUFBUSxDQUFDLE9BQXFMO1FBQzFMLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDLDhCQUE4QjtRQUNqSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDLDhCQUE4QjtRQUMvRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUN0RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUMxRixDQUFDO0lBQ0QsSUFBSTtRQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQSxDQUFDLDhCQUE4QjtJQUN4RSxDQUFDO0NBQ0o7QUFwQ0QsMENBb0NDO0FBRVksUUFBQSxhQUFhLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9