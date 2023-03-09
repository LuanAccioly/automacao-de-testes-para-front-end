export class Home {

    /**
     * Visita página principal.
     */
    visit() {
        // se configurar baseUrl = https://ecommerce-playground.lambdatest.io
        // visit("/")
        cy.visit("https://ecommerce-playground.lambdatest.io")
    }

    /**
     * Retorna o input da busca.
     * @returns DOM do input.
     */
    getSearchInput() {
        return cy.get('input[name="search"]').first()
    }

    /**
     * Digita texto no campo da busca
     * @param {string} text O conteúdo da busca.
     */
    searchInput(text) {
        this.getSearchInput.type(text)
    }

    /**
     * Recupera o botão da busca. 
     * @returns DOM do botão.
     */
    getSearchButton() {
        return cy.get("#search > div.search-button > button").first()
    }

    getHomeButton() {
        return cy.get(
            "#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span"
        )
    }

    getSpecialButton() {
        return cy.get(
            "#widget-navbar-217834 > ul > li:nth-child(2) > a > div > span"
        )
    }

    getBlogButton() {
        return cy.get(
            "#widget-navbar-217834 > ul > li:nth-child(3) > a > div > span"
        )
    }

    getMegaMenuButton() {
        return cy.get(
            "#widget-navbar-217834 > ul > li.nav-item.dropdown.dropdown-hoverable.mega-menu.position-static > a > div > span"
        )
    }

    getAddOnsButton() {
        return cy.get(
            "#widget-navbar-217834 > ul > li:nth-child(5) > a > div > span"
        )
    }

    getMyAccountLink() {
        return cy.get(
            "#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span"
        )
    }
}    