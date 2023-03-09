export class Blog {
    constructor() {
        //se configurar baseUrl = https://ecommerce-playground.lambdatest.io
        //this.url = "/index.php?route=extension/maza/blog/home"
        this.url = "https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home"
        this.title = "Blog"
    }

    visit() {
        cy.visit(this.url)
    }

    /**
     * Retorna botão da primeira categoria.
     * @returns DOM do botão.
     */
    getFirstCategoryButton() {
        return cy.get("#entry_210963 > div > a:nth-child(1)")
    }

    /**
     * Retorna botão da segunda categoria.
     * @returns DOM do botão.
     */
    getSecondCategoryButton() {
        return cy.get("#entry_210963 > div > a:nth-child(2)")
    }

    /**
     * Retorna botão da terceira categoria.
     * @returns DOM do botão.
     */
    getThirdCategoryButton() {
        return cy.get("#entry_210963 > div > a:nth-child(3)")
    }

    getPreviousBlogsButton() {
        return cy.get(
            "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-prev.swiper-button-disabled"
        )
    }

    getNextBlogsButton() {
        return cy.get(
            "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-next"
        )
    }
}