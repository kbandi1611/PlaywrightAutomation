const {test, expect} = require("@playwright/test")

test("Drag and Drop Action", async({page})=>{
    page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    const Oslo = page.locator("#box1")
    const Norway = page.locator("#box101")
    const Stockholm = page.locator("#box2")
    const Washington = page.locator("#box3")
    const Copenhagen = page.locator("#box4")
    const Seoul = page.locator("#box5")
    const Rome = page.locator("#box6")
    const Madrid = page.locator("#box7")
    const Sweden = page.locator("#box102")
    const UnitedStates = page.locator("#box103")
    const Denmark = page.locator("#box104")
    const SouthKorea = page.locator("#box105")
    const Italy = page.locator("#box106")
    const Spain = page.locator("#box107")


    //Approach 1
    // await Oslo.hover()
    // await page.mouse.down()

    // await Norway.hover()
    // await page.mouse.up()
    // await page.waitForTimeout(2000)



    //Approach 2
    await Oslo.dragTo(Norway)
    await page.waitForTimeout(1000)
    await Stockholm.dragTo(Sweden)
    await page.waitForTimeout(1000)
    await Washington.dragTo(UnitedStates)
    await page.waitForTimeout(1000)
    await Copenhagen.dragTo(Denmark)
    await page.waitForTimeout(1000)
    await Seoul.dragTo(SouthKorea)
    await page.waitForTimeout(1000)
    await Rome.dragTo(Italy)
    await page.waitForTimeout(1000)
    await Madrid.dragTo(Spain)
    await page.waitForTimeout(2000)

})