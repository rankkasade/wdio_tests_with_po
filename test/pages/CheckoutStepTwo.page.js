const { BaseSwagLabPage } = require('./BaseSwagLab.page');

class CheckoutStepTwoPage extends BaseSwagLabPage {
    url = '/checkout-step-two.html';

    checkoutItemSelector = '.cart_item';

    get checkoutItems() { return $$(this.checkoutItemSelector) };

    get itemsPrice() { return $$('.inventory_item_price') };

    get totalItemsPrice() { return $('.summary_subtotal_label') };

    get taxValue() { return $('.summary_tax_label') };

    get totalPrice() { return $('.summary_info_label:nth-child(8)') };

    async checkoutItemParameters() {
        const checkoutItemParameters = [];
        for await (const checkoutItem of this.checkoutItems) {
            checkoutItemParameters.push({
                name: await checkoutItem.$('.inventory_item_name').getText(),
                desc: await checkoutItem.$('.inventory_item_desc').getText(),
                price: await checkoutItem.$('.inventory_item_price').getText(),
            });
        }
        return checkoutItemParameters;
    };

    async getItemPricesSum() {
        let result = 0;
        
        for await (const itemPrice of this.itemsPrice) {
            const prices = await itemPrice.getText();
            result += Number(prices.replace('$', ''));
        }

        return result; 
    }

    async getTotalItemsPrice() {        
        let totalItemsPriceText = await this.totalItemsPrice.getText();
        let totalItemsPrice = Number(totalItemsPriceText.replace('Item total: $', ''));
        console.log(totalItemsPrice)
        return totalItemsPrice
    }

    async getTax() {        
        let taxText = await this.taxValue.getText();
        let taxValue = Number(taxText.replace('Tax: $', ''));
        return taxValue
    }
    
    async getTotalPrice() {        
        let totalPriceText = await this.totalPrice.getText();
        let totalPrice = Number(totalPriceText.replace('Total: $', ''));
        return totalPrice
    }



}

module.exports = { CheckoutStepTwoPage };