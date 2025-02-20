import{Page} from '@playwright/test'
export default class HomePage{
    constructor(private page:Page){
    }
    async open(){
        await this.page.goto('https://www.saucedemo.com/')
    }
    async fillValidCredentials(){
        await this.page.getByPlaceholder('Username').fill('standard_user')
        await this.page.getByPlaceholder('Password').fill('secret_sauce')
    }

    async clickLogin(){
        await this.page.getByText('Login').click()
    }

}