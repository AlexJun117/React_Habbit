/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

describe("Habit Tracker", ()=>{
    beforeEach(()=>{
        cy.visit("/")
    })

    it("render", ()=>{
        cy.findByText("Habit Tracker").should("exist")
    })

})