const { BaseSwagLabPage } = require('./BaseSwagLab.page');

class CheckoutStepOnePage extends BaseSwagLabPage {
    url = '/checkout-step-one.html';

    get firstName() { return $('#first-name') };

    get lastName() { return $('#last-name') };

    get postalCode() { return $('#postal-code') };

    get continueBtn() { return $('#continue') };

    async fillInCheckout(firstName, lastName, postalCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
        await this.continueBtn.click();
    }

}

module.exports = { CheckoutStepOnePage };