import {Locator, Page} from "@playwright/test"

export class Cart{

page: Page
cartLink : Locator
proceedToCheckoutBTN : Locator

constructor (Page:Page)
{
this.page=Page
this.cartLink=this.page.locator("(//i[@class='fa fa-shopping-cart'])[1]")
this.proceedToCheckoutBTN=this.page.locator("//a[@class='btn btn-default check_out']").filter({hasText:'Proceed To Checkout'})
}

async proceedToCheckout(){
    await this.cartLink.click()
    await this.proceedToCheckoutBTN.click()
}
}