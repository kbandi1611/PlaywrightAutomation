const {test, expect} = require("@playwright/test")

test("Mouse Double Click Action", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const copyTextButton = await page.locator("//button[normalize-space()='Copy Text']")
    await copyTextButton.dblclick()
    const field2 = await page.locator("//input[@id='field2']")
    await expect(field2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)
})
