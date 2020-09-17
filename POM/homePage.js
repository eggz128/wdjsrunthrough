//ts-check:off
const { By, Key, until } = require('selenium-webdriver')

module.exports = {
    searchField: By.id('woocommerce-product-search-field-0'),
    homeLink: By.linkText('Home'),

    searchForProduct: async function (driver, strText) {
        await driver.findElement(this.searchField).click();
        await driver.findElement(this.searchField).sendKeys(strText, Key.ENTER);
    },

    goHome: async function (driver) {
        await driver.findElement(this.homeLink).click();
    }
}