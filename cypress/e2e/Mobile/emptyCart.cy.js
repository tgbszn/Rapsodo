/// <reference types="cypress" />
import configs from "../../support/configs";
import { testWrapper } from "../../utilities/viewport"


describe('Verify the shopping cart is empty', { testIsolation: false }, function () {
    testWrapper({ itTitle: "Check on mobile that the cart is empty when the page opens.", viewportGroup: "app" }, () => {
        //You can go to the basket by clicking on the basket icon from the homepage. There is the selector of the basket icon in the configs.js
        cy.get(configs.cart.selector).click();
        //If the cart is empty, "Your cart is currently empty." text should be visible.
        cy.contains('Your cart is currently empty.').should('be.visible');
    });
});
