import {Locator, Page, expect} from "@playwright/test"
import data from "../DDT/userpayment.json"
import path from "path"
import fs from "fs"

export class Checkout{

   page:Page
   placeOrderBTN : Locator
   CardName : Locator
   CardNumber : Locator
   CVC : Locator
   month : Locator
   year : Locator
   confirmOrderBTN : Locator
   orderMessage : Locator
   downloadInvoice : Locator
   continueBTN : Locator 


   constructor(page:Page)
   {

    this.page=page
    this.placeOrderBTN=page.getByRole('link', {name:"Place Order", exact:true} )
    this.CardName = page.locator('//input[@data-qa="name-on-card"]')
    this.CardNumber=page.locator('//input[@data-qa="card-number"]')
    this.CVC = page.locator('//input[@data-qa="cvc"]')
    this.month= page.getByPlaceholder("MM", {exact:true})
    this.year = page.getByPlaceholder("YYYY", {exact:true})
    this.confirmOrderBTN = page.locator('//button[@id="submit"]')
    this.orderMessage = page.locator('//p[contains(text(),"Congratulations!")]')
    this.downloadInvoice = page.getByRole('link', {name:"Download Invoice", exact:true})
    this.continueBTN = page.getByRole('link', {name:"Continue", exact:true})
   }
  
   async checkout(){
     await this.placeOrderBTN.click()
     await this.CardName.fill(data.name)
     await this.CardNumber.fill(data.cardnumber)
     await this.CVC.fill(data.cvc)
     await this.month.fill(data.expirymonth)
     await this.year.fill(data.expiryyear)
     await this.confirmOrderBTN.click()

   }
    async verifyOrderMessage(){
        await expect(this.orderMessage).toContainText(data.orderMessage)
    }
    async InvoiceDownload(){
        let [downloadfile] = await Promise.all([
          this.page.waitForEvent('download'),
          this.downloadInvoice.click()
        ])
        let downloadfolder="C:/Users/maumi/OneDrive/Desktop/PWEndToEnd framework/downladfile"
        let filename = await downloadfile.suggestedFilename()
        await downloadfile.saveAs(path.join(downloadfolder, filename))
        let filepath=path.join(downloadfolder, filename)

        let data = fs.readFileSync(filepath, "utf-8")

        await expect(data).toContain("Thank you")
        await this.continueBTN.click()

    }
}