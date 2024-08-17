const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')

describe('My application Cart Test', () => {
    it('should search add and remove from cart', async () => {
        await driver.pause(15000);
       await LoginPage.clickSearchBtn();
        await LoginPage.searchProduct("toothbrush");
        await LoginPage.addtoCart();
        await driver.pause(1000);
        await LoginPage.addtoCart();
        await driver.pause(1000);
        await LoginPage.addtoCart();
        await driver.pause(1000);
        await LoginPage.clickCartBtn();
        await LoginPage.removeCart();
        await LoginPage.removeCart();
        await LoginPage.removeCart();
        expect("Nothing to see here").toBeDisplayed();
    })
})

