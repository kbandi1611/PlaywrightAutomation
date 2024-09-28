//Reference - https://playwright.dev/docs/input#upload-files
const{test, expect} = require("@playwright/test")

test("Single FIle Upload", async({page})=>{
    await page.goto("https://www.foundit.in/")
    await page.waitForSelector(".mqfihd-upload")
    await page.locator(".mqfihd-upload").click()

    await page.locator('#file-upload').setInputFiles('tests\UploadFiles\Automation Testing FAQs.txt')
    await page.waitForTimeout(5000)
})

test.only("Multiple files Upload", async({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles(['tests/UploadFiles/Automation Testing FAQs.txt', 'tests/UploadFiles/Interview Questions for Deloitte.txt'])
    await page.waitForTimeout(3000)

    await expect(await page.locator("div[class='main'] li:nth-child(1)")).toHaveText("Automation Testing FAQs.txt")
    await expect(await page.locator("div[class='main'] li:nth-child(2)")).toHaveText("Interview Questions for Deloitte.txt")
    await page.waitForTimeout(3000)

    //To remove the uploaded files
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)

    await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected")
    await page.waitForTimeout(3000)

})