const { Given, When, Then } = require("@cucumber/cucumber");
const login = require("../methods/loginpage-methods.js");

When('I enter incorrect login details', async function () {
    await login.enterLoginDetails('user@email.com', 'password');
    await login.clickSignIn();
});

Then('I see incorrect email or password message', async function () {
    await login.incorrectLoginPresent();
});