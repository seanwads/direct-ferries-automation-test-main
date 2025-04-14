const { Selector, t } = require('testcafe');

async function getRoute(leg) {
    if (leg === "return") {
        return Selector("[data-testid=return-route-container]", { timeout: 20000 })
    }
    return Selector('[data-testid=outbound-route-container]', { timeout: 20000 })
}
module.exports = {

    selectRoute: async function (leg, route) {
        await t
            .typeText(await getRoute(leg), " ") //type a space first as we sometimes have issues where the first type text doesn't register
            .typeText(await getRoute(leg), route)
            .click(await getRoute(leg))
        await t
              .click(Selector('[data-testid=result-section-0] button'))
              .scroll('top')//only needed for tablet sized screens to scroll to top after click.
    },
    clickSearch: async function () {
        await t.click(Selector("[data-testid=button-submit]"));
    },
    clickDifferentDetails: async function () {
        await t.click(Selector('[data-testid=radio-button-different-outbound-return-details]'));
    },
    selectFootPassenger: async function () {
        await t.click(Selector('[data-testid=vehicle-display]'))
        await t.click(Selector('[data-testid=vehicle-list-type--1]'))
    },
}