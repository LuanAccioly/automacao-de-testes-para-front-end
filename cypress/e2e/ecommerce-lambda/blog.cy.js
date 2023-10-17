import {Blog} from "./pages/Blog.js"

const blog = new Blog()

describe("testa a página do blog", () => {

    beforeEach(() => {
        blog.visit()
    })

    it("titulo do blog mostrado corretamente", () => {
        cy.title().should("eq", "Blog - Poco theme")
    })

    it("nome das categorias exibido corretamente", () => {
        blog.getFirstCategoryButton().should("contain.text", "Business")
        blog.getSecondCategoryButton().should("contain.text", "Electronics")
        blog.getThirdCategoryButton().should("contain.text", "Technology")
    })
})