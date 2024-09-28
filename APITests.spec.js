const {test, expect} = require("@playwright/test")
const { request } = require("http")
const { use } = require("../playwright.config")

var userID

test("GET Users", async({request})=>{
    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(await response.json())
    await expect(response.status()).toBe(200)
})

test("Create Users", async({request})=>{
    const response = await request.post("https://reqres.in/api/users", 
    {
        data:{
            "name": "morpheus",
            "job": "leader"
        },
        headers:{
            "Accept":"application/json"
        }
    })
    console.log(await response.json())
    expect(response.status()).toBe(201)
    var res = await response.json()
    userID = res.id
})

test("Update Users", async({request})=>{
    const response = await request.put("https://reqres.in/api/users/"+userID, 
    {
        data:{
            "name": "morpheus",
            "job": "engineer"
        },
        headers:{
            "Accept":"application/json"
        }
    })
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Delete User", async ({request})=>{
    const response = await request.delete("https://reqres.in/api/users/"+userID)
    expect(response.status()).toBe(204)
})