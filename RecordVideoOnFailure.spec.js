const{test, expect} = require("@playwright/test")

test("Record Videos and Take Screenshots only on failure", async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).press('Enter');
    await expect(page.locator('#logout')).toBeVisible() //intentionally made ID of the logout link as invalid to capture screenshot and video on failure of the test case from playwright.config.js file  
})