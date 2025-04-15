const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (url) {
        await t
        .navigateTo(url)
        .click(Selector('[data-cky-tag="accept-button"]'))
    },
    //additional navigation function to avoid issues with inconsistent accept button
    onLocalisedHomepage: async function (url) {
        await t
            .navigateTo(url)
    },
    onLoginPage: async function() {
        await t
        .navigateTo('https://account.directferries.com/?culture=en-GB');
    }
}
