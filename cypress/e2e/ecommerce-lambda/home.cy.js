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

  it("Procura por um produto utilizando filtro", () => {
    home.filterButton().click();
    home.selectCategoryFilter("Laptops").click();
    home.searchInput().type("macbook");
    home.searchButton().click();
    home.getFirstPageProducts().should("have.length.greaterThan", 0);
  });
});
