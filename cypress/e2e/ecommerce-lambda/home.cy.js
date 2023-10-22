import {Home} from "./pages/Home"

const home = new Home()

describe("Testa a home page", () => {

    beforeEach(() => {
        home.visit()        
    });

    it("Procura por um produto", () => {
        home.searchInput().type("iphone")
        home.searchButton().click()
    })
})
