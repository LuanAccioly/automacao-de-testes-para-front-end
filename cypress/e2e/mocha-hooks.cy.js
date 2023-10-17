
describe("Bloco externo", () => {

    before(() => {
        console.log( "Antes de todos" );
    });

    after(() => {
        console.log( "Depois de todos" );
    });

    beforeEach(() => {
        console.log( "Antes de cada" );
    });

    afterEach(() => {
        console.log( "Após cada" );
    });

    it('Teste 1', () => {
        console.log('Teste 1')
    });

    it('Teste 2', () => {
        console.log('Teste 2')
    });

    describe( "Bloco interno", () => {
        beforeEach(() => {
            console.log( "Antes de cada (Bloco interno)" );
        });

        it('Teste 3', () => {
            console.log('Teste Interno 1')
        });
        
        it('Teste 4', () => {
            console.log('Teste Interno 2')
        });
    });

});
