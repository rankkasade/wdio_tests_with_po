const { BaseSwagLabPage } = require('./BaseSwagLab.page');

class InventoryPage extends BaseSwagLabPage {
    url = '/inventory.html';

    selectedItemParameters = []; 

    get headerTitle() { return $('.title'); }

    get inventoryItems() { return $$('.inventory_item'); }

    get addItemToCartBtns() { return $$('[id^="add-to-cart"]'); }

    get sortItemsBtn() { return $('.select_container'); }

    get sortingOption() { return $('option[value="hilo"]'); }

    get currentSortingOption() { return $('.active_option'); }

    get itemsPrice() { return $$('.inventory_item_price'); }

    get cartBadge() { return $('.shopping_cart_badge'); }

    async addItemToCartById(id) {
        const selectedItem = this.addItemToCartBtns[id];
        const card = await selectedItem.parentElement().parentElement();
        this.selectedItemParameters.push({
            name: await card.$('.inventory_item_name').getText(),
            desc: await card.$('.inventory_item_desc').getText(),
            price: await card.$('.inventory_item_price').getText(),
        })

        await selectedItem.click();
    }

    async sortItems() {
        await this.sortItemsBtn.click();
        await this.sortingOption.click();
    }

    async getCurrentSortingOption() {
        return this.currentSortingOption.getText();
    }

    async getPrices() {
        const prices = [];
        
        for await (const itemPrice of this.itemsPrice) {
            const text = await itemPrice.getText();
            prices.push(Number(text.replace('$', '')));
        }

        return prices; 
    }

    async getItems() {
        return this.addItemToCartBtns;
    }

    async getNumberOfItemsInCart() {
        return this.cartBadge.getText();
    }

};

module.exports = { InventoryPage };

