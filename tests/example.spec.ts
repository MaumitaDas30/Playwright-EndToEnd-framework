import {test,expect} from "@playwright/test"

test("locator", async({page})=> {

await page.goto("https://zigzag.lk/collections/all")

//await page.getByText("Style Size").first().click();
//let sizes=await page.locator("//input[@id='Filter-Style Size-2']")
await page.getByLabel('XS', { exact: true }).check()
//await sizes.check()


})