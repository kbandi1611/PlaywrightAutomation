const {test, expect} = require("@playwright/test")

test("Test 1@sanity", async({page})=>{
    console.log("This is my first test")
})

test("Test 2@sanity", async({page})=>{
    console.log("This is my second test")
})

test("Test 3@regression", async({page})=>{
    console.log("This is my third test")
})

test("Test 4@regression", async({page})=>{
    console.log("This is my fourth test")
})

test("Test 5@sanity@regression", async({page})=>{
    console.log("This is my fifth test")
})