import {Page, Locator} from "@playwright/test"
import data from "../DDT/userdata.json"
import { getRandomEmail } from "../Utility/randomEmail"
export class Registerpage{
   
    page:Page
    signupName: Locator
    signupEmail: Locator
    signupButton: Locator

    gender: Locator
    password: Locator
    days: Locator
    month: Locator
    year: Locator

    firstName: Locator 
    LastName: Locator
    company: Locator
    Address: Locator
    
    country: Locator
    state: Locator
    city: Locator
    zipcode: Locator
    mobileNumber: Locator

    createAccountButton: Locator
    continueButton: Locator
    
    constructor(page:Page){
       this.page=page
       this.signupName = page.locator("//input[@data-qa='signup-name']")
       this.signupEmail= page.locator("//input[@data-qa='signup-email']")
       this.signupButton = page.locator("//button[@data-qa='signup-button']")

       this.gender= page.locator("#id_gender1")
       this.password= page.locator("#password")
       this.days= page.locator("#days")
       this.month= page.locator("#months")
       this.year= page.locator("#years")

       this.firstName= page.locator("#first_name")
       this.LastName= page.locator("#last_name")
       this.company= page.locator("#company")
       this.Address= page.locator("#address1")
       //this.Address2= page.locator("#address2")
       this.country= page.locator("#country")
       this.state= page.locator("#state")
       this.city= page.locator("#city")
       this.zipcode= page.locator("#zipcode")
       this.mobileNumber= page.locator("#mobile_number")

       this.createAccountButton= page.locator('//button[@data-qa="create-account"]')
       this.continueButton= page.locator('//a[@data-qa="continue-button"]')
    }

    async navigateToRegister(){
        await this.page.goto("https://automationexercise.com/signup")
    }

    async enterSignupdetails(){
        await this.signupName.fill(data.name)
        
        let email=await getRandomEmail(10) //calling utility method
        await this.signupEmail.fill(email)
        await this.signupButton.click()
    }
    async fillAccountDetails(){
        await this.gender.check()
        await this.password.fill(data.password)
        await this.days.selectOption({label:data.day})
        await this.month.selectOption({label:data.month})
        await this.year.selectOption({label:data.year})
        await this.firstName.fill(data.firstName) 
        await this.LastName.fill(data.lastName) 
        await this.company.fill(data.company) 
        await this.Address.fill(data.address) 
        //await this.Address2.fill(data.address2) 
        await this.country.selectOption({label:data.country}) 
        await this.state.fill(data.state) 
        await this.city.fill(data.city) 
        await this.zipcode.fill(data.zipcode)
        await this.mobileNumber.fill(data.mobileNumber)  
        await this.createAccountButton.click() 
        await this.continueButton.click() 
    }

}