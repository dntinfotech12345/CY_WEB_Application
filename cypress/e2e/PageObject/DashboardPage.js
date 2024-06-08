
class DashBoardPage {

    constructor(page,Locators) {
        this.page=page;
        this.locators=locators.DashBoardPage;
        this.cardBody = page.locator(locators.DashBoardPage.cardBody);
        this.zaraCoat = page.getByRole(locators.DashBoardPage.zaraCoat);
        this.addToCard = page.locator(locators.DashBoardPage.addToCard);
    }
   

    async clickOnProduct() {
        await this.page.waitForLoadState('load');
        console.log(await this.cardBody.allTextContents());
        console.log(await this.cardBody.first());
        await this.zaraCoat.first().click();

    }
    async clickOnaddToCard() {

        await this.addToCard.click();
    }
    async validateDashboardPageTitle() {
        await this.page.waitForLoadState('load'); // Wait for the page to be fully loaded
        const pageTitle = await this.page.title();
        return pageTitle;
    }
}
module.exports = {DashBoardPage};