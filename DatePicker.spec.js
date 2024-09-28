const {test, expect} = require("@playwright/test")

test("Date Picker", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.fill("#datepicker", "09/23/2024")

    const year = '2024'
    const month = "April"
    const date = '15'

    await page.click("#datepicker") //opens calender

    while(true){
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

        if(currentYear == year && currentMonth == month){
            break
        }
        //await page.locator('[title="Prev"]').click() //Prev
        await page.locator('[title="Next"]').click() //Next
    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    //date selection
    // for(const dt of dates){
    //     if(await dt.textContent() == date){
    //         await dt.click()
    //         break
    //     }
    // }
    //await page.waitForTimeout(2000)

    //date selection without the loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(2000)
})