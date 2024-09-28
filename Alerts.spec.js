const {test, expect} = require("@playwright/test")

test.skip("Alert with OK option", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Enabling Dialogue window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept()
    })
    await page.click("//button[normalize-space()='Alert']")
    
    await page.waitForTimeout(3000)
})


test.skip('Confirmation Dialogue - Alert with OK and Cancel options', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enabling Dialogue window handler using OK and cancel buttons
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!")
        await dialog.accept() //close by using OK button
        //await dialog.dismiss() //close by using cancel button


    })
    await page.click("//button[normalize-space()='Confirm Box']")

    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!")
    await page.waitForTimeout(3000)
})


test('Prompt Dialogue - Alert with OK and Cancel options', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Enabling Dialogue window handler using OK and cancel buttons
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('Prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        //await dialog.accept("John") //close by using OK button
        await dialog.dismiss() //close by using cancel button


    })
    await page.click("//button[normalize-space()='Prompt']")

    await expect(page.locator("//p[@id='demo']")).toContainText("Hello John! How are you today?")
    await page.waitForTimeout(3000)
})