const {test, expect} = require("@playwright/test")

test.beforeAll(async()=>{
    console.log("This is beforeAll Hook........")
})

test.afterAll(async()=>{
    console.log("This is afterAll Hook........")
})

test.beforeEach(async()=>{
    console.log("This is beforeEach Hook........")
})

test.afterEach(async()=>{
    console.log("This is afterEach Hook........")
})

test.describe("This is Group 1", ()=>{
    test("Test 1", async({page})=>{
        console.log("This is test1")
    })

    test("Test 2", async({page})=>{
    console.log("This is test2")
    })

})

test.describe("This is Group 2", ()=>{
    test("Test 3", async({page})=>{
        console.log("This is test3")
    })
    
    test("Test 4", async({page})=>{
        console.log("This is test4")
    })

})
