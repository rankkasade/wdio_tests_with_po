const { InventoryPage } = require('./Inventory.page');
const { LoginPage } = require('./Login.page');
const { ShopingCartPage } = require('./ShopingCart.page');
const { CheckoutStepOnePage } = require('./CheckoutStepOne.page.js')
const { CheckoutStepTwoPage } = require('./CheckoutStepTwo.page.js')

module.exports = {
    pages: {
        loginPage: new LoginPage(),
        inventoryPage: new InventoryPage(),
        shopingCartPage: new ShopingCartPage(),
        checkoutStepOnePage: new CheckoutStepOnePage(),
        checkoutStepTwoPage: new CheckoutStepTwoPage()
    },
};
