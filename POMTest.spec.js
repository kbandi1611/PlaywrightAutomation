import { test, expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage'
import { CartPage } from '../Pages/CartPage'

test("Test", async({page})=>{

    //Login Page
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login('pavanol', 'test@123')
    await page.waitForTimeout(3000)

    //Home Page
    const home = new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart()


    //Cart Page
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProductInCart("Nexus 6")
    expect(await status).toBe(true)



})

