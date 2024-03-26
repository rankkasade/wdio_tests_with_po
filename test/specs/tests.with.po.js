const { expect } = require('chai');
const { pages } = require('../pages/Pages');

describe('Hometask test suite with PO', () => {
    it('Perform sorting on the Inventory page', async () => {
        await pages.loginPage.navigate();
        await pages.loginPage.performLogin('standard_user', 'secret_sauce');
        await pages.inventoryPage.sortItems();

        expect(await pages.inventoryPage.getCurrentSortingOption()).to.be.equal('Price (high to low)');
        
        let sortedPrices = await pages.inventoryPage.getPrices()
        let sortedPricesCheck = [...sortedPrices].sort((a, b) => b - a);
        
        expect(sortedPrices).to.deep.equal(sortedPricesCheck);
    });

    it('Add random products to the cart', async () => {
        await pages.loginPage.navigate();
        await pages.loginPage.performLogin('standard_user', 'secret_sauce');
        let itemsId = await pages.inventoryPage.getItems();
        let randomItemId0 = Math.floor(Math.random() * itemsId.length);
        let randomItemId1 = Math.floor(Math.random() * itemsId.length);
        await pages.inventoryPage.addItemToCartById(randomItemId0);
        await pages.inventoryPage.addItemToCartById(randomItemId1);
        
        expect(await pages.inventoryPage.getNumberOfItemsInCart()).to.be.equal('2');
        
        await pages.inventoryPage.shopingCart.click();
        
        expect(JSON.stringify(pages.inventoryPage.selectedItemParameters)).to.be.equal(JSON.stringify(await pages.shopingCartPage.cartItemParameters()));
});

    it('Checkout random products added to the cart', async () => {
        await pages.loginPage.navigate();
        await pages.loginPage.performLogin('standard_user', 'secret_sauce');
        let itemsId = await pages.inventoryPage.getItems();
        let randomItemId2 = Math.floor(Math.random() * itemsId.length);
        let randomItemId3 = Math.floor(Math.random() * itemsId.length);
        await pages.inventoryPage.addItemToCartById(randomItemId2);
        await pages.inventoryPage.addItemToCartById(randomItemId3);
        await pages.inventoryPage.shopingCart.click();
        await pages.shopingCartPage.checkoutBtn.click();
        await pages.checkoutStepOnePage.fillInCheckout('William', 'Shakespeare', 'SE19DT');
        
        expect(JSON.stringify(await pages.shopingCartPage.cartItemParameters())).to.be.equal(JSON.stringify(await pages.checkoutStepTwoPage.checkoutItemParameters()));
        expect(await pages.checkoutStepTwoPage.getItemPricesSum()).to.be.equal(await pages.checkoutStepTwoPage.getTotalItemsPrice());
        let totalItemsPrice = await pages.checkoutStepTwoPage.getTotalItemsPrice();
        let taxValue = await pages.checkoutStepTwoPage.getTax();
        let totalPrice = totalItemsPrice + taxValue;
        expect(await pages.checkoutStepTwoPage.getTotalPrice()).to.be.equal(totalPrice)
})

})