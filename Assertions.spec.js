const { test, expect } = require("@playwright/test")
const exp = require("constants")
test("Assertions test", async({page})=>{
    //open app URL
    await page.goto("https://demo.nopcommerce.com/register")

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    const logo_element = await page.locator(".header-logo")
    await expect(logo_element).toBeVisible()

    const searchStorBox = await page.locator("#small-searchterms")
    await expect(searchStorBox).toBeEnabled()

    //radio-button
    const male_radio_button = await page.locator("#gender-male")
    await male_radio_button.click() //select the radio button
    await expect(male_radio_button).toBeChecked()
    
    //check box
    const newsLetterCheckBox = await page.locator("#Newsletter")
    await expect(newsLetterCheckBox).toBeChecked()

    const registerbutton = await page.locator("#register-button")
    await expect(registerbutton).toHaveAttribute("type", "submit")

    
    await expect(await page.locator(".page-title h1")).toHaveText("Register") //full text
    await expect(await page.locator(".page-title h1")).toContainText("Reg") //partial text

    const emailInput = await page.locator("#Email")
    await emailInput.fill("test@demo.com")
    await expect(emailInput).toHaveValue("test@demo.com")

    const allMonthsOptions = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(allMonthsOptions).toHaveCount(13)
    

})  