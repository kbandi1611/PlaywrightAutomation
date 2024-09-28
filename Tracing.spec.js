//Need to modify the trace feature in playwright.config.js file to view the traces of the test case

const{test, expect} = require("@playwright/test")

test("Record Videos and Take Screenshots only on failure", async({page})=>{
    await page.goto('https://demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).press('Enter');
    await expect(page.locator('#logout2')).toBeVisible()  
})