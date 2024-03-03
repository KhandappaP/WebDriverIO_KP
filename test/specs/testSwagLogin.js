const { click } = require("webdriverio/build/commands/element")

describe('The Swag demo login test' , ()=> {
    it('The login test' , ()=>{
        browser.url('https://www.saucedemo.com/v1/')
        $('[//input[@id="user-name"]]').setValue("standard_userstan")
        $('[//input[@id="password"]]').setValue("secret_user")
        $('[//input[@class="btn_action"]]').click    

    })
})