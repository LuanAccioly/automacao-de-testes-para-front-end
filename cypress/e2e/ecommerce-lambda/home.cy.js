import { Home } from "./pages/Home";

const home = new Home();

describe("Testa a home page", () => {
  beforeEach(() => {
    home.visit();
  });

  it("Procura por um produto", () => {
    home.searchInput().type("iphone");
    home.searchButton().click();
  });

  it.only("Procura por um produto utilizando filtro", () => {
    home.filterButton().click();//Clique em “All Categories”
    home.selectCategoryFilter("Laptops").click();//Selecione o item “Laptops”
    home.searchInput().type("macbook");//Selecione o campo de busca e digita “macbook”
    home.searchButton().click();//Clique no botão SEARCH
    //Verifique quantidade de produtos retornados é maior do que 0
    // na primeira página
    home.getFirstPageProducts().should("have.length.greaterThan", 0);
  });
});
