/// <reference types="cypress" />

import { testWrapper } from "../../utilities/viewport"
import configs from "../../support/configs";
import { browserify } from "../../plugins";

browserify();

describe('Verify the shopping cart is empty', { testIsolation: false }, function () {
  testWrapper({ itTitle: "Check on web that the cart is empty when the page opens.", viewportGroup: "web" }, () => {
    //You can go to the basket by clicking on the basket icon from the homepage. There is the selector of the basket icon in the configs.js
    cy.get(configs.cart.selector).click();
    //If the cart is empty, "Your cart is currently empty." text should be visible.
    cy.contains('Your cart is currently empty.').should('be.visible');
  });
})