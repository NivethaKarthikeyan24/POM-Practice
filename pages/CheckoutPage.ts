import{Page} from '@playwright/test'
export default class CheckoutPage{
    constructor(private page:Page){
    }
    async enterPersonalDetails(){
await this.page.getByPlaceholder('First Name').fill('John')
await this.page.getByPlaceholder('Last Name').fill('Doe')
await this.page.getByPlaceholder('Zip/Postal Code').fill('12345')
    }
async clickContinue(){
await this.page.locator('[id="continue"]').click()
}
}
