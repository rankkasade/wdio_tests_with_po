// const { pages } = require('../pages/Pages');

// describe('My First Test', () => {
//     it('Perform login', async () => {
//         await pages.loginPage.navigate();
//         await pages.loginPage.performLogin('standard_user', 'secret_sauce');

//         await expect(pages.inventoryPage.headerTitle).toBeExisting();

//         await expect(pages.inventoryPage.headerTitle).toBeExisting();

//         await expect(pages.inventoryPage.inventoryItems).toBeElementsArrayOfSize({ gte: 1 });
//     });

//     it('Add and remove product from the cart', async () => {
//         await pages.loginPage.navigate();
//         await pages.loginPage.performLogin('standard_user', 'secret_sauce');
//         await pages.inventoryPage.addItemToCartById(0);
//         expect(await pages.inventoryPage.getNumberOfItemsInCart()).toBe('1');

//         await pages.inventoryPage.shopingCart.click();
//         await expect(pages.shopingCartPage.cartItems).toBeElementsArrayOfSize(1);

//         await pages.shopingCartPage.removeCartItemById(0);
//         await expect(pages.shopingCartPage.cartItems).not.toBeExisting();
//     });
// });
