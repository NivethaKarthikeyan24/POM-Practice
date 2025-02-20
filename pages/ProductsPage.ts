import{Page, expect} from '@playwright/test'
export default class ProductsPage{
    constructor(private page:Page){
    }
    async addToCart(){
        await this.page.locator('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    }
    async verifyProductAdded(){
        await expect (this.page.locator('button[id="remove-sauce-labs-bolt-t-shirt"]')).toContainText(/REMOVE/i)
    }
    async clickCart(){
        await this.page.locator('.shopping_cart_badge').click();
    }
}

