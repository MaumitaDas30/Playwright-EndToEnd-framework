import {test, expect} from "@playwright/test";

import {Cart} from "../PageObjectModel/CartPage.page";
import {Checkout} from "../PageObjectModel/CheckoutPage.page";
import {Product} from "../PageObjectModel/ProductPage.page";
import {Registerpage} from "../PageObjectModel/RegistePage.page"

test("purchase product", async ({page})=> {

//creating object for pom class
    let register = new Registerpage(page);
    let ProductPage = new Product(page);
    let cartPage = new Cart(page); 
    let CheckoutPage = new Checkout(page);

    await register.navigateToRegister();
    await register.enterSignupdetails();

    //await expect(await page).toHaveURL('');
    await register.fillAccountDetails();
   
    await ProductPage.addToCart();
    
    await cartPage.proceedToCheckout();

    await CheckoutPage.checkout();
    await CheckoutPage.verifyOrderMessage();
    await CheckoutPage.InvoiceDownload();

    
})