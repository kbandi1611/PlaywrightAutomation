const { test, expect } = require("@playwright/test");

test("Handle InputBox", async({page})=>{
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html")

    await expect(await page.locator("//input[@name='firstname']")).toBeVisible()
    await expect(await page.locator("//input[@name='firstname']")).toBeEmpty()
    await expect(await page.locator("//input[@name='firstname']")).toBeEditable()
    await expect(await page.locator("//input[@name='firstname']")).toBeEnabled()


    await page.locator("//input[@name='firstname']").fill("John")
    //page.fill("//input[@name='firstname']", "John")
    await page.waitForTimeout(5000)
    
})