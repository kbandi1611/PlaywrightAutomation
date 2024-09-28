const {test, expect} = require("@playwright/test")

//only
/*test.only("Test 1", async({page})=>{
    console.log("This is my first test")
})

test("Test 2", async({page})=>{
    console.log("This is my second test")
})
*/

//skip
/*test.skip("Test 3", async({page})=>{
    console.log("This is my third test")
})

test("Test 4", async({page})=>{
    console.log("This is my fourth test")
})
*/

//skip based on condition
/*test("Test 5", async({page, browserName})=>{
    console.log("This is fifth test")
    if(browserName==="firefox"){
        test.skip()
    }
})
*/

//Fixme
/*test("Test 6", async({page})=>{
    test.fixme()
    console.log("This is sixth test")
})
*/

//Fail
/*test("Test 7", async({page})=>{
    test.fail() //expected
    console.log("This is seventh test")
    expect(1).toBe(1) //actual
    //If both expected and actual is failed then only the test case is going to pass
})
*/

//Fail - based on the condition
/*test("Test 8", async({page, browserName})=>{
    console.log("This is eighth test")
    if(browserName === 'chromium'){
        test.fail()
    } 
})
*/

//slow
test("Test 9", async({page})=>{
    //test.slow() //By default the timeout is 30 seconds but this slow method makes it 3 times slow i.e., 90 seconds
    test.setTimeout(1000)
    console.log("This is ninth test")
    await page.goto("https://demoblaze.com/index.html")
})

