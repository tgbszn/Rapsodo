/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";

browserify();

describe('Rapsodo Add To Cart Test', { testIsolation: false }, function () {

    let initialPrice, cartPrice;

    testWrapper({ itTitle: "Should select Mobile Launch Monitor (MLM) from Golf button for Mobile.", viewportGroup: "web" }, () => {

        cy.get('span.site-nav__link--has-dropdown')
            .contains('Shop')
            .trigger('mouseover');

        cy.get('.is-focused > .site-nav__dropdown > :nth-child(1) > a')
            .contains('Golf')
            .click();

        cy.get('.grid-product__meta')
            .contains('Mobile Launch Monitor (MLM)')
            .parent()
            .within(() => {
                cy.get('.grid-product__price')
                    .invoke('text')
                    .as('initialPrice')
                    .then((text) => {
                        initialPrice = text.trim();
                    });
            });

        cy.get('.grid-product__meta')
            .contains('Mobile Launch Monitor (MLM)')
            .click();

        cy.get('#AddToCartNormal')
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

            })

    })
