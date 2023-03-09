import {Home} from "./pages/Home"

const home = new Home()

describe("testa a home page", () => {

    beforeEach(() => {
        home.visit()        
    });

    it("procura por um produto", () => {
        home.getSearchInput().type("iphone")
        home.getSearchButton().click()
    })
})
