export class Blog {
    
    constructor() {
        this.url = "/index.php?route=extension/maza/blog/home"
        this.title = "Blog"
    }

    /**
     * Visita página do blog.
     */
    visit() {
        cy.visit(this.url)
    }

    /**
     * Retorna botão da primeira categoria.
     * @returns DOM do botão.
     */
    firstCategoryButton() {
        return cy.get("#entry_210963 > div > a:nth-child(1)")
    }

    /**
     * Retorna botão da segunda categoria.
     * @returns DOM do botão.
     */
    secondCategoryButton() {
        return cy.get("#entry_210963 > div > a:nth-child(2)")
    }

    /**
     * Retorna botão da terceira categoria.
     * @returns DOM do botão.
     */
    thirdCategoryButton() {
        return cy.get("#entry_210963 > div > a:nth-child(3)")
    }

    previousBlogsButton() {
        return cy.get(
            "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-prev.swiper-button-disabled"
        )
    }

    nextBlogsButton() {
        return cy.get(
            "#mz-article-listing-76210960 > div.mz-tab-listing-header.d-flex > div > div > a.mz-swiper-nav-next"
        )
    }
}