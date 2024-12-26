const{Builder, by, Until, By} = require('selenium-webdriver');
const assert = require('assert');

async function saucedemoLoginTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.saucedemo.com/');
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');

        await driver.findElement(By.xpath("//input[@id='login-button']")).click();

        let titleText = await driver.findElement(By.xpath("//div[@class='app_logo']")).getText();
        assert.strictEqual(titleText.includes('Swag Labs'), true,'Tidak ada "Swag Labs"');
        
        let menuButton = await driver.findElement(By.id('react-burger-menu-btn'));
        assert.strictEqual(await menuButton.isDisplayed(), true, 'Menu button not displayed');
         
        await driver.findElement(By.xpath("//button[@id='add-to-cart-sauce-labs-backpack']")).click();
        await driver.findElement(By.xpath("//a[.='1']")).click();
        await driver.findElement(By.xpath("//button[@id='checkout']")).click();

        let firstName = await driver.findElement(By.id('first-name'));
        await firstName.sendKeys('Tia');
        let lastName = await driver.findElement(By.id('last-name'));
        await lastName.sendKeys('Annisa');
        let postalCode = await driver.findElement(By.id('postal-code'));    
        await postalCode.sendKeys('10650');

        await driver.findElement(By.xpath("//input[@id='continue']")).click();
        await driver.findElement(By.xpath("//button[@id='finish']")).click();
        await driver.findElement(By.xpath("//button[@id='back-to-products']")).click();
        
             
    } finally {
        await driver.quit();
        //sebentar aku liat yutub  dulu lupa upload github wkwkwk yaudh aku tidur dulu wkwwkwwkk sebentar,, iya tugas 8 juga aku belum submit
    }
}

saucedemoLoginTest();