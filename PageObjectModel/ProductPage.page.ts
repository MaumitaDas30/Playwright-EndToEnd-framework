import {Locator, Page} from '@playwright/test'
import data from "../DDT/userdata.json"

export class Product{

page : Page
productLink : Locator
searchProductTF : Locator
searchBTN : Locator
viewProductLink : Locator
addToCartBTN : Locator
continueShoppingBTN : Locator

constructor(page:Page)
{
  this.page = page
  this.productLink = page.getByRole('link', {name:"Products"})
  this.searchProductTF = page.locator("//input[@id='search_product']")
  this.searchBTN = page.locator("//button[@id='submit_search']")
  this.viewProductLink = page.getByRole("link", {name:"View Product"})
  this.addToCartBTN = page.locator("//button[@class='btn btn-default cart']")
  this.continueShoppingBTN= page.getByRole('button', {name:"Continue Shopping", exact:true}) 

}

async addToCart()
{
    await this.productLink.click()
    await this.searchProductTF.fill(data.productName)
    await this.searchBTN.click()
    await this.viewProductLink.click()
    await this.addToCartBTN.click()
    await this.continueShoppingBTN.click()
}

}