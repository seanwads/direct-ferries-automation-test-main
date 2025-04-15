const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (url) {
        await t
        .navigateTo(url)
        .click(Selector('[data-cky-tag="accept-button"]'));
    }
}
