import {Blog} from "./pages/Blog.js"

const blog = new Blog()

describe("Testa a página do blog", () => {

    beforeEach(() => {
        blog.visit()
    })

    it("Titulo do blog mostrado corretamente", () => {
        cy.title().should("eq", "Blog - Poco theme")
    })

    it("Nome das categorias exibido corretamente", () => {
        blog.firstCategoryButton().should("contain.text", "Business")
        blog.secondCategoryButton().should("contain.text", "Electronics")
        blog.thirdCategoryButton().should("contain.text", "Technology")
    })
})