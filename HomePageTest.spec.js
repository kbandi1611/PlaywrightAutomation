const { test, expect } = require("@playwright/test");
const exp = require("constants");
test("Home Page", async({page}) => {
    await page.goto('https://demoblaze.com/index.html');
    const pageTitle = await page.title();
    console.log("Page Title is: ", pageTitle);
    await expect(page).toHaveTitle("STORE");
    const pageURL = await page.url();
    console.log("Page URL is: ", pageURL)
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await page.close();

})



