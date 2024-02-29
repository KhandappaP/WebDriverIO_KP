
describe('the first Demo test', () =>{

    it('Saucedemo test', async() =>{

        browser.url('https://www.saucedemo.com/v1/')
        await $('[id="user-name"]').setValue("standard_user")
        await $('[id="password"]').setValue("secret_sauce")

        await $('[id="login-button"]').click
        await $('[//div[@class="bm-burger-button"]]').click
        await $('[//a[@id="logout_sidebar_link"]]').click
        browser.pause(8000 )
    
    })


})