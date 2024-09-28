const {test, expect} = require("@playwright/test")

test("Handling Checkboxes", async ({page})=>{
    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html")

    //single check box handling
    await page.locator("//input[@id='tool-0']").check()
    //await page.check("//input[@id='tool-0']")

    expect(await page.locator("//input[@id='tool-0']")).toBeChecked()
    expect(await page.locator("//input[@id='tool-0']").isChecked()).toBeTruthy()
    expect(await page.locator("//input[@id='tool-1']").isChecked()).toBeFalsy()

    //Multiple check boxes handling
    const checkBoxLocators = ["//input[@id='tool-0']", "//input[@id='tool-1']", "//input[@id='tool-2']"]

    for(const locator of checkBoxLocators){
        await page.locator(locator).check() //to check multiple checkboxes
    }

    await page.waitForTimeout(5000)

    for(const locator of checkBoxLocators){
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck() //to un-check multiple checkboxes
        }
    }


    await page.waitForTimeout(5000)
    

})