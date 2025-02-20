import{Page, expect} from '@playwright/test'
export default class CartPage{
    constructor(private page:Page){
    }
    async validateItemInCart(){
await expect(this.page.locator('div[class="cart_item_label"]')).toContainText('Sauce Labs Bolt T-Shirt')
  await expect(this.page.locator('button[id="remove-sauce-labs-bolt-t-shirt"]')).toContainText(/REMOVE/i);
    }
async clickCheckout(){
await this.page.locator('button[id="checkout"]').click()
}
}
