import { CreateAccount } from "./createAccount.page"

// аггрегатор Application - содержит все page object'ы
export class Application {
    // public Home = Home
    public CreateAccount = CreateAccount
}

export const APP = new Application();