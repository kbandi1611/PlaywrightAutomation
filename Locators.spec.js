const { test, expect } = require("@playwright/test");

test('Locators', async({page}) =>{
    await page.goto("https://demoblaze.com/index.html")

    //click on login button and then property
    await page.click('id=login2')

    //provide username using css selector
    await page.fill("#loginusername", "pavanol")

    //provide password using css selector
    await page.fill("#loginpassword", "test@123")

    //click on login button using xpath
    await page.click("//button[normalize-space()='Log in']")

    //verify the logout link presence
    const logout_link = await page.locator("(//a[normalize-space()='Log out'])[1]")

    await expect(logout_link).toBeVisible()

    await page.close()

})