/// <reference types="cypress" />

import configs from "../../support/configs";
import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";

browserify();

describe('Rapsodo Add To Cart Test', { testIsolation: false }, function () {

    let initialPrice, cartPrice;

    testWrapper({ itTitle: "Should select Mobile Launch Monitor (MLM) from Golf button for Mobile.", viewportGroup: "app" }, () => {
        cy.get(configs.mobileMenu.selector).click()
        cy.get(configs.appShop.selector).click()
        cy.get(configs.appGolf.selector).click()
        cy.get('[data-product-handle="mobile-launch-monitor"] > .grid-product__content > .grid-product__link > .grid-product__image-mask > .image-wrap > .grid-product__image').click()
        cy.get('.main-content')
            .parent()
            .within(() => {
                cy.get('.R-MlmProStickyPriceText')
                    .invoke('text')
                    .as('initialPrice')
                    .then((text) => {
                        initialPrice = text.trim();
                    });
            });

        cy.get('.StickyMobileSingle')
            .contains('ADD TO CART')
            .click();

        cy.get('.cart__item')
            .contains('$299.99')
            .invoke('text')
            .as('cartPrice')
            .then((text) => {
                cartPrice = text.trim();

                it('Compare prices', () => {
                    cy.get('@initialPrice').then((initialPrice) => {
                        expect(initialPrice).to.eq(cartPrice);
                    });
                });
            });
    });
});