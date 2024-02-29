describe("MyFirstRecord_wdio", () => {
  it("tests MyFirstRecord_wdio", async () => {
    await browser.setWindowSize(804, 834)
    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await browser.$("aria/Username").click()
    await browser.$("aria/Username").setValue("A")
    await browser.$("aria/Username").setValue("Admin")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("aria/Password").setValue("admin123")
    await browser.$("aria/Login[role=\"button\"]").click()
    await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await browser.$("aria/Admin").click()
    await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
    await browser.$("aria/ Add").click()
    await expect(browser).toHaveUrl("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser")
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[2]/i").click()
    await browser.$("aria/Type for hints...").click()
    await browser.$("aria/Type for hints...").setValue("abc")
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[2]/i").click()
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input").click()
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input").setValue("abc")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input").setValue("abc123")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input").setValue("abc123")
    await browser.$("aria/Save").click()
    await browser.$("aria/Type for hints...").doubleClick()
    await browser.$("aria/Type for hints...").click()
    await browser.$("aria/Type for hints...").setValue("abcder")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input").click()
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input").setValue("")
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input").setValue("abcder")
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input").doubleClick()
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input").click()
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input").setValue("abcd123")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("//*[@id=\"app\"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input").setValue("abcd123")
    await browser.$("aria/Save").click()
    await browser.$("aria/Type for hints...").doubleClick()
    await browser.$("aria/Type for hints...").click()
    await browser.$("aria/Type for hints...").setValue("T")
    await browser.$("aria/Type for hints...").setValue("TonyO")
    await browser.$("aria/Type for hints...").setValue("TonyOne")
    await browser.$("aria/Save").click()
  });
});
