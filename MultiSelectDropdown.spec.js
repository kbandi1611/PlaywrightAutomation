const {test, expect} = require("@playwright/test")
const exp = require("constants")

test("MultiSelectDropDown", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.selectOption("#colors", ["Red", "Blue", "Green", "White"])

    //Assertions
    //1. Check no.of options in the dropdown
    // const options = await page.locator("#colors option")
    // await expect(options).toHaveCount(5)

    //2. Check no.of options in the dropdown usin JS array concept
    // const options = await page.$$("#colors option")
    // console.log("No.of options", options.length)
    // expect(options.length).toBe(5)

    // 3. Check the presence of the value in the dropdown
    const content = await page.locator("#colors").textContent()
    await expect(content.includes("Blue")).toBeTruthy()
    await expect(content.includes("Black")).toBeFalsy()



    await page.waitForTimeout(5000)

})