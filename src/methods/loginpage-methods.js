const { Selector, t } = require('testcafe');

module.exports = {
    enterLoginDetails: async function (username, password) {
        await t.click(Selector('#header-sign-in'))
        await t
            .typeText(Selector('input').withAttribute("name", "username"), username)
            .typeText(Selector('input').withAttribute("name", "password"), password)
    },
    clickSignIn: async function () {
        await t.click(Selector('button').withText('Sign in'))
    },
    incorrectLoginPresent: async function () {
        await t
            .expect(Selector('div').withText('Incorrect username or password.').exists).ok()
    }
}