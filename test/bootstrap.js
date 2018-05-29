const puppeteer = require('puppeteer');
const {expect} = require('chai');

const browserOptions = {
    headless: true
};

before(async function() {
    global.expect = expect;
    global.browser = await puppeteer.launch(browserOptions);
});

after(function () {
    browser.close();
});