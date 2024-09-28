const {test, expect} = require("@playwright/test")
const { stat } = require("fs")

test("Handling Dropdowns", async({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Multiple ways to select the option from the dropdown

    //await page.locator("#country").selectOption({label:"India"}) //using lable and visible text
    // await page.locator("#country").selectOption("India") //using visible text
    // await page.locator("#country").selectOption({value:"india"}) //using value attribute
    // await page.locator("#country").selectOption({index: 1}) //using index number
    // await page.selectOption("#country", "India")

    //Assertions
    //1. Check no.of options in the dropdown - Approach 1
    // const options = page.locator("#country option")
    // await expect(options).toHaveCount(10)

    //2. Check no.of options in the dropdown - Approach 2
    // const options = await page.$$("#country option")
    // console.log("Number of options", options.length)
    // expect(options.length).toBe(10)

    //3. Check the presence of value in the dropdown - Approach 1
    // const content = await page.locator("#country").textContent()
    // console.log(content)
    // expect(content.includes("India")).toBeTruthy()
    // expect(content.includes("XYZ")).toBeTruthy()

    //4. Check the presence value in the dropdown - Approach 2 - using looping
    /*const options = await page.$$("#country option")
    let status = false

    for(const option of options){
        // console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes("France")){
            status = true
            break
        }
    }

    expect(status).toBeTruthy()
    */

    //5.Select option from dropdown using loop
    const options = await page.$$("#country option")

    for(const option of options){
        // console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes("France")){
            await page.selectOption("#country", value)
            break
        }
    }
    
    await page.waitForTimeout(5000)


})