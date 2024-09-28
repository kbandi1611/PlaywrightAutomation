const {test, expect} = require("@playwright/test")

test("Page Screenshot", async({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path: "tests/Screenshots/"+"HomePage"+Date.now()+".png"})
})

test("Full Page Screenshot", async({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path: "tests/Screenshots/"+"FullPage"+Date.now()+".png", fullPage:true})
})

test.only("Element Screenshot", async({page})=>{
    await page.goto("https://demo.opencart.com/")
    await page.locator('//*[@id="content"]/div[2]/div[3]/div').screenshot({path: "tests/Screenshots/"+'Apple Cinema'+Date.now()+".png"})
})