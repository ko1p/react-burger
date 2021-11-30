describe('Tests for burger-maker pages:', function () {
    it('Page should be available on localhost:3000', function () {
        cy.visit('http://localhost:3000')
    })
    it('Should be Drag & Drop Bun and Ingredient', function () {
        cy.wait(5000);
        cy.get('[data-id="60d3b41abdacab0026a733c7"]').trigger('dragstart')
        cy.get('[data-ref="dnd-container"]').trigger('drop')
        cy.get('[data-id="60d3b41abdacab0026a733cf"]').trigger('dragstart')
        cy.get('[data-ref="dnd-container"]').trigger('drop')
    })
    it('should be one bun and one ingredient in their containers', function () {
        cy.get('[data-ref="bun-container-1"')
            .children()
            .should($children => {
                expect($children).to.have.length(1)
            })
        cy.get('[data-ref="ing-container"')
            .children()
            .should($children => {
                expect($children).to.have.length(1)
            })
        cy.get('[data-ref="bun-container-2"')
            .children()
            .should($children => {
                expect($children).to.have.length(1)
            })
    })
})