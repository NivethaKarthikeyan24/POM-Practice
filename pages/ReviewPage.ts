import{Page} from '@playwright/test'
export default class ReviewPage{
    constructor(private page:Page){
    }
    
async clickFinish(){
await this.page.locator('[id="finish"]').click()
}
}
