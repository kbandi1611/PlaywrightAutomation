const {test, expect} = require("@playwright/test")

test("Handling Frames", async({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
    const all_frames = page.frames()
    console.log("No.of frames in a webpage", all_frames.length)

    //Approach 1 - using name or URL of the page
    //const var = await page.frame("name") //if the name of the frame is available
    // const frame1 = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" })
    // await frame1.fill('[name="mytext1"]',"Hello")
    // await page.waitForTimeout(2000)


    //Approach 2 - using frame locator
    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator('[name="mytext1"]')
    inputBox.fill("Hello John")
    await page.waitForTimeout(2000)


})