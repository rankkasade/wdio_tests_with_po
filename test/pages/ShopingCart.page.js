const { BaseSwagLabPage } = require('./BaseSwagLab.page');

class ShopingCartPage extends BaseSwagLabPage {
    url = '/cart.html';

    cartItemSelector = '.cart_item';

    removeItemSelector = '[id^="remove"]';

    get headerTitle() { return $('.title'); }

    get cartItems() { return $$(this.cartItemSelector); }

    get checkoutBtn() { return $('#checkout'); }

    async cartItemParameters() {
        const cartItemParameters = [];
        for await (const cartItem of this.cartItems) {
            cartItemParameters.push({
                name: await cartItem.$('.inventory_item_name').getText(),
                desc: await cartItem.$('.inventory_item_desc').getText(),
                price: await cartItem.$('.inventory_item_price').getText(),
            });
        }
        return cartItemParameters;
    }

    // async below added to show the function returns a promise
    async getCartItemByName(name) { return $(`${this.cartItemSelector}=${name}`); }

    async removeCartItemByName(name) {
        const item = await this.getCartItemByName(name);
        return item.$(this.removeItemSelector);
    }

    async removeCartItemById(id) {
        await this.cartItems[id].$(this.removeItemSelector).click();
    }
}

module.exports = { ShopingCartPage };
