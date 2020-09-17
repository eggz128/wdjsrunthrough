console.log("Hello world");

const { Builder, By, Key, until } = require('selenium-webdriver');
const { elementLocated } = require('selenium-webdriver/lib/until');
const chai = require('chai')
const assert = chai.assert;


require('chromedriver');
//require('iedriver')

//var driver = new Builder().forBrowser('chrome').build();

// driver.get('https://www.edgewordstraining.co.uk/demo-site/');
// driver.findElement(By.id("woocommerce-product-search-field-0")).sendKeys("cap",Key.ENTER);
// driver.findElement(By.name("add-to-cart")).click();
// driver.findElement(By.linkText("cart")).click();

// driver.get('https://www.edgewordstraining.co.uk/demo-site/')
//     .then(_ => driver.findElement(By.id("woocommerce-product-search-field-0")))
//     .then(q => q.sendKeys("cap",Key.ENTER))
//     .then(_ => driver.findElement(By.name("add-to-cart")))
//     .then(cartButton => cartButton.click());

// driver.get('https://www.edgewordstraining.co.uk/demo-site/')
//     .then(function(){return driver.findElement(By.id("woocommerce-product-search-field-0"))})
//     .then(function(q){return q.sendKeys("cap",Key.ENTER)})
//     .then(function(){return driver.findElement(By.name("add-to-cart"))})
//     .then(function(cartButton){cartButton.click()});

// driver.get('https://www.edgewordstraining.co.uk/demo-site/')
//     .then(function getSearchField(){return driver.findElement(By.id("woocommerce-product-search-field-0"))})
//     .then(function typeInSearchField(q){return q.sendKeys("cap",Key.ENTER)})
//     .then(function getCartButton(){return driver.findElement(By.name("add-to-cart2"))}).catch(err => console.log("Oops"))
//     .then(function pressCartButton(cartButton){cartButton.click()}).catch(err => console.log("Other oops"));

//driver.get('https://www.edgewordstraining.co.uk/demo-site/');
//driver.findElement(By.tagName("body")).then(function(bodyTag){bodyTag.getText().then(function(theText){console.log(theText)})});
//driver.findElement(By.tagName("body")).then(function(bodyTag){return bodyTag.getText()}).then(function(theText){console.log(theText)});


async function runwd() {
    let driver = new Builder().forBrowser('internet explorer').build();
    // (await driver).manage().setTimeouts({
    //     implicit: 20000,
    //     pageLoad: 60000,
    //     script: 20000
    // })
    await driver.get('https://www.edgewordstraining.co.uk/demo-site/')

    let pageTitle = await driver.getTitle();
    console.log(pageTitle)
    assert.equal(pageTitle,'Edgewords Shop – e-commerce demo site for Training','Not the page')
    assert.match(pageTitle, /^Edge/, "Didn't match regex")
    
    let search = await driver.wait(until.elementLocated(By.id("woocommerce-product-search-field-0")), 5000, "Is not there");
    assert.isTrue(await search.isDisplayed(), "Not displayed");
    await search.sendKeys("cap", Key.ENTER)
    await driver.sleep(3000);
    await driver.findElement(By.name("add-to-cart")).click();
    
}

runwd();

