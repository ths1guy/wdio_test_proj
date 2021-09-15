"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP = exports.Application = void 0;
const createAccount_page_1 = require("./createAccount.page");
// аггрегатор Application - содержит все page object'ы
class Application {
    constructor() {
        // public Home = Home
        this.CreateAccount = createAccount_page_1.CreateAccount;
    }
}
exports.Application = Application;
exports.APP = new Application();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlL2FwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZEQUFvRDtBQUVwRCxzREFBc0Q7QUFDdEQsTUFBYSxXQUFXO0lBQXhCO1FBQ0kscUJBQXFCO1FBQ2Qsa0JBQWEsR0FBRyxrQ0FBYSxDQUFBO0lBQ3hDLENBQUM7Q0FBQTtBQUhELGtDQUdDO0FBRVksUUFBQSxHQUFHLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9