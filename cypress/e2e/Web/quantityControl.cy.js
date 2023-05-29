/// <reference types="cypress" />

import configs from "../../support/configs";
import { testWrapper } from "../../utilities/viewport"
import { browserify } from "../../plugins";

browserify();

describe('Rapsodo Add To Cart Test', { testIsolation: false }, function () {
    testWrapper({ itTitle: "Should Add to Cart Mobile Launch Monitor (MLM) from Golf button for Mobile.", viewportGroup: "web" }, () => {
        cy.get('span.site-nav__link--has-dropdown').eq(1).trigger('mouseover', { multiple: true });
        cy.wait(1000);
        cy.get(configs.golf.selector).click({ force: true })
        cy.get(configs.MLM.selector).eq(1).click({ force: true })
        cy.get(configs.webAddToCart.selector).click()
        cy.contains(configs.webCartItem.selector, 'Mobile Launch Monitor (MLM)')
        cy.get('.js-qty__num')
            .invoke("val")
            .then((initialQuantity) => {
                // Click on the '+' button to increase the quantity
                cy.log('value', initialQuantity);
                cy.get('.js-qty__adjust--plus').click();


                cy.get('.js-qty__num')
                    .invoke("val")
                    .then((updatedQuantity) => {

                        cy.log('value', updatedQuantity);
                        const initialQuantityNumber = parseInt(initialQuantity, 10);
                        const updatedQuantityNumber = parseInt(updatedQuantity, 10);

                        expect(updatedQuantityNumber).to.eq(initialQuantityNumber + 1);

                        cy.reload() // quantity değişince sayfayı yenilemeden subtotal güncellenmiyor.


                        cy.get('.cart__price')
                            .invoke('text')
                            .then((unitPriceText) => {
                                cy.log('unit price text', unitPriceText)
                                const unitPrice = parseFloat(unitPriceText.trim().replace('$', ''));
                                cy.log('unit price', unitPrice)


                                cy.get('.cart__item-row')
                                    .contains('$')
                                    .invoke('text')
                                    .then((totalPriceText) => {
                                        cy.log('total price text', totalPriceText)
                                        const totalPrice = parseFloat(totalPriceText.replace(/[^0-9.]/g, ''));
                                        cy.log('total price', totalPrice)

                                        

                                        const calculatedTotalPrice = unitPrice * updatedQuantity;
                                        
                                        cy.log('calculated total price', calculatedTotalPrice)

                                        

                                        expect(calculatedTotalPrice).to.equal(totalPrice);


                                    })
                            });
                    });
            })
    })
})