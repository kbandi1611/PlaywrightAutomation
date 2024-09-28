const {test, expect} = require("@playwright/test")

test("LocateMultipleWebElements", async({page}) => {
    await page.goto("https://demoblaze.com/index.html")

    /*const links = await page.$$("a")

    for(const link of links){
        const link_text = await link.textContent()
        console.log(link_text)
    }
    */
    page.waitForSelector("//div[@id='tbodyid']//h4//a")
    const products = await page.$$("//div[@id='tbodyid']//h4//a")

    for(const product of products){
        const productName = await product.textContent()
        console.log(productName)
    }
})
