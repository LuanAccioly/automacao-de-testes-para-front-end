export class Home {
  /**
   * Visita página principal.
   */
  visit() {
    cy.visit("/");
  }

  /**
   * Retorna o input da busca.
   * @returns Subject do input.
   */
  searchInput() {
    return cy.get('input[name="search"]').first();
  }

  /**
   * Recupera o botão da busca.
   * @returns Subject do botão.
   */
  searchButton() {
    return cy.get("#search > div.search-button > button").first();
  }

  homeButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(1) > a > div > span"
    );
  }

  specialButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(2) > a > div > span"
    );
  }

  blogButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(3) > a > div > span"
    );
  }

  megaMenuButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li.nav-item.dropdown.dropdown-hoverable.mega-menu.position-static > a > div > span"
    );
  }

  addOnsButton() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(5) > a > div > span"
    );
  }

  myAccountLink() {
    return cy.get(
      "#widget-navbar-217834 > ul > li:nth-child(6) > a > div > span"
    );
  }

  filterButton() {
    return cy.get("[data-toggle='dropdown']").contains("All Categories");
  }

  /**
   * Seleciona o nome da categoria no menu dropdown ao lado do campo de busca.
   * @param {*} categorie String da categoria a ser selecionada.
   * @returns Subject do item selecionado.
   */
  selectCategoryFilter(categorie) {
    return cy.get(".dropdown-item").contains(categorie);
  }

  /**
   * Retorna os títulos dos produtos resultados como resultado
   * na primeira página.
   * @returns Subject com os títulos que são resultado da busca.
   */
  getFirstPageProducts() {
    return cy.get(".caption > .title");
  }
}
