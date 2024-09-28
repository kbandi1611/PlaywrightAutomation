const{test, expect} = require("@playwright/test")

test("Mouse Hover Actions", async({page})=>{
    await page.goto("https://demo.opencart.com/")

    const desktop = await page.locator("//a[normalize-space()='Desktops']")
    const macbook = await page.locator("//a[normalize-space()='Mac (1)']")

    //Mouse Hover
    await desktop.hover()
    await page.waitForTimeout(2000)
    await macbook.hover()

    await page.waitForTimeout(5000)
})