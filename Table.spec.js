const {test, expect} = require("@playwright/test")

test("Handling Table", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = await page.locator("//table[@id='productTable']")

    //Total no.of rows and columns
    const columns = await table.locator("thead tr th")
    console.log("No.of columns:", await columns.count())
    const rows = await table.locator("tbody tr")
    console.log("No.of rows:", await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //Select checkbox for product 4
    // const matchedRow = rows.filter({
    //     has : page.locator("td"),
    //     hasText : "Product 4"
    // })
    // await matchedRow.locator('input').check()

    // await page.waitForTimeout(3000)

    //Select multiple products by using re-usable function
    // await selectProduct(rows, page, 'Product 1')
    // await selectProduct(rows, page, 'Product 3')
    // await selectProduct(rows, page, 'Product 5')

    //Print all the product details using loop
    // for (let i=0; i < await rows.count(); i ++){
    //     const row = rows.nth(i)
    //     const tds = row.locator('td')

    //     for (let j=0; j < await tds.count()-1; j ++){
    //         console.log(await tds.nth(j).textContent())
    //     }
    // }

    //Read data from all the pages in the table
    const pages = await page.locator(".pagination li a")
    console.log("No.of pages:", await pages.count())

    for(let p = 0; p < await pages.count(); p ++){
        if(p > 0){
            await pages.nth(p).click()
        }
        for (let i=0; i < await rows.count(); i ++){
                const row = rows.nth(i)
                const tds = row.locator('td')
        
                for (let j=0; j < await tds.count()-1; j ++){
                    console.log(await tds.nth(j).textContent())
                }
            }
            await page.waitForTimeout(3000)

    }


})

async function selectProduct(rows, page, name){
    const matchedRow = rows.filter({
        has : page.locator("td"),
        hasText : name
    })
    await matchedRow.locator('input').check()
    await page.waitForTimeout(3000)


}