
/// <reference types="cypress" />

describe('testes muito simples', () => {
  it('asserção que passa', () => {
    expect(true).to.be.equal(true)
  })
  it('asserção que falha', () => {
    expect(true).to.be.equal(false)
  })
})
