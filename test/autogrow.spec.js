const {expect} = require('chai');

describe('autogrow', function () {
    let page;

    async function checkAutogrow(selector, len = 150) {
        let rowsBefore = await page.evaluate((selector) => document.querySelector(selector).rows, selector);
    
        await page.focus(selector);
        await page.type(selector, [...Array(len).keys()].join());
    
        let rowsAfter = await page.evaluate((selector) => document.querySelector(selector).rows, selector);
    
        expect(rowsAfter).to.be.above(rowsBefore);
    }

    before(async function () {
        page = await browser.newPage();

        await page.goto('http://localhost:9000');
    });

    after(async function () {
        await page.close();
    });

    it('should happen on textarea-1', async function () {
        await checkAutogrow('.textarea-1');
    });

    it('should happen on textarea-2', async function () {
        await checkAutogrow('.textarea-2', 200);
    });

    it('should happen on textarea-3', async function () {
        await checkAutogrow('.textarea-3');
    });
});