/// <reference types="cypress" />

import configs from "../../support/configs";
import { testWrapper } from "../../utilities/viewport"

describe('Rapsodo Add To Cart Test', { testIsolation: false }, function () {
    testWrapper({ itTitle: "Should select Mobile Launch Monitor (MLM) from Golf button for Mobile.", viewportGroup: "app" }, () => {
        cy.get(configs.mobileMenu.selector).click()
        cy.get(configs.appShop.selector).click()
        cy.get(configs.appGolf.selector).click()
        cy.get('[data-product-handle="mobile-launch-monitor"] > .grid-product__content > .grid-product__link > .grid-product__image-mask > .image-wrap > .grid-product__image').click()
        cy.get(configs.appAddToCart.selector).click()
        cy.contains(configs.webCartItem.selector, 'Mobile Launch Monitor (MLM)')
    });
});