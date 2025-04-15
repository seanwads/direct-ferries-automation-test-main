const { Given, When, Then } = require("@cucumber/cucumber");
const navigation = require("../methods/navigation-methods.js");

Given('I am on the homepage', async function () {
    await navigation.onHomepage('https://www.directferries.de');
});

Given('I am on the {string} homepage', async function (localisation) {
    let url = '';

    switch(localisation){
        case 'UK':
            url = 'https://www.directferries.co.uk';
            break;
        case 'German':
            url = 'https://www.directferries.de';
            break;
        case 'Italian':
            url = 'https://www.directferries.it';
            break;
        default:
            url = 'https://www.directferries.de';
            break;
    }

    await navigation.onHomepage(url);
});
