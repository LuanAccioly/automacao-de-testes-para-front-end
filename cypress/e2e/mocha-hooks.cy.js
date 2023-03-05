
describe("Calculos simples", () => {

    before(() => {
        console.log( "b - Executa antes de todos os testes" );
    });

    after(() => {
        console.log( "a - Executa após todos os testes" );
    });

    beforeEach(() => {
        console.log( "be - Executa antes de cada teste" );
    });

    afterEach(() => {
        console.log( "ae - Executa após cada teste" );
    });
	
    // We can add nested blocks for different tests
    describe( "Bloco 1", () => {
        beforeEach(() => {
            console.log( "be2" );
        });
        
        it("Is returning 5 when adding 2 + 3", () => {
            assert.equal(2 + 3, 5);
        });

        it("Is returning 6 when multiplying 2 * 3", () => {
            assert.equal(2*3, 6);
        });
    });

    describe("Bloco 2", () => {
        beforeEach(() => {
            console.log( "be3" );
        });
        
        it("Is returning 4 when adding 2 + 3", () => {
            assert.equal(2 + 3, 4);
        });

        it("Is returning 8 when multiplying 2 * 4", () => {
            assert.equal(2*4, 8);
        });
    });
});
