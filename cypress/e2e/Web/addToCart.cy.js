/// <reference types="cypress" />

import configs from "../../support/configs";
import { testWrapper } from "../../utilities/viewport"

describe('Rapsodo Add To Cart Test', { testIsolation: false }, function () {
    testWrapper({ itTitle: "Should select Mobile Launch Monitor (MLM) from Golf button for Mobile.", viewportGroup: "web" }, () => {
        cy.get('span.site-nav__link--has-dropdown').eq(1).trigger('mouseover', { multiple: true });
        cy.wait(1000);
        cy.get(configs.golf.selector).click({ force: true })
        cy.get(configs.MLM.selector).eq(1).click({ force: true })
        cy.get(configs.webAddToCart.selector).click()
        cy.contains(configs.webCartItem.selector, 'Mobile Launch Monitor (MLM)')
    });
});