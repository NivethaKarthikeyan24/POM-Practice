import{Page, expect} from '@playwright/test'
export default class OrderConfirmationPage{
    constructor(private page:Page){
    }
    async confirmMessage(){
        await expect(this.page.locator('h2')).toContainText(/THANK YOU FOR YOUR ORDER/i)
    }
async clickBackToProducts(){
    await this.page.locator('button[id="back-to-products"]').click()
}
}
