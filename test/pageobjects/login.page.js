const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get clickSearch () {
        return $('//android.widget.TextView[@text="Search"]');
    }

    get inputSearchProduct () {
        return $('//android.widget.EditText[@text="Search Products"]');
    }
    get toothbrush(){
        return $('//android.widget.TextView[@text="Colgate Charcoal Gold 360 Toothbrush"]');
    }
    get addBtn(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');
    }
    get cartBtn(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup');
    }
    get cartRemoveBtn(){
        return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup');
    }

    async searchProduct (productName) {
        (await this.clickSearch).click();
        await this.inputSearchProduct.setValue(productName);
    }
    async clickSearchBtn(){
        (await this.clickSearch).click();
    }
    async toothbrushPage(){
        (await this.toothbrush).click();
    }
    async addtoCart(){
        (await this.addBtn).click();
    }
    async clickCartBtn(){
        (await this.cartBtn).click();
    }
    async removeCart(){
        (await this.cartRemoveBtn).click();
    }

 
}

module.exports = new LoginPage();
