const { By, Key, until } = require('selenium-webdriver')

async function waitForVisible(driver, loactor, timeout) {
    try {
        await driver.sleep(500);
        let element = await driver.findElement(locator);
        await driver.wait(until.elementIsVisible(element), timeout)
    } catch (err) {
        throw new Error(`Element ${(locator.tostring())} not visible after ${timeout}`)
    }

}

async function betterWaitForVisible(driver, locator, timeout) {
    try {
        //Start timer
        let startTime, endTime, timeDiff;

        async function start() {
            startTime = new Date();
        };

        async function end() {
            endTime = new Date();
            timeDiff = endTime - startTime; //in ms
            // strip the ms
            timeDiff /= 1000;

            // get seconds 
            var seconds = Math.round(timeDiff);
            console.log(seconds + " seconds");
        }

        await start();
        //Element must be in DOM for it to be visible, so first find it with max timeout
        let element = await driver.wait(until.elementLocated(locator), timeout, `Couldnt locate element in ${timeout}`)
        
        await end()

        console.log('Found element in ' + timeDiff + ' now checking if vis')

        let visTime = timeout-timeDiff;
        console.log(`remaining Vistime is ${visTime} `)
        await driver.wait(until.elementIsVisible(element), vistime)

    } catch (error) {
        throw new Error(`Element ${(locator.tostring())} not visible after ${timeout}`)
    }
}

module.exports.waitForVisible = waitForVisible;
module.exports.betterWaitForVisible = betterWaitForVisible;