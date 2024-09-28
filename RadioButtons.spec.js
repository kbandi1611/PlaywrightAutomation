const { test, expect } = require("@playwright/test");

test("Handle RadioButton", async({page})=>{
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html")

    //Radio Button
    await page.locator("//input[@id='sex-1']").check()
    await expect(await page.locator("//input[@id='sex-1']")).toBeChecked() //female
    await expect(await page.locator("//input[@id='sex-1']").isChecked()).toBeTruthy()


    await page.locator("//input[@id='sex-0']") //male
    await expect(await page.locator("//input[@id='sex-0']").isChecked()).toBeFalsy() 




    await page.waitForTimeout(5000)
    
})