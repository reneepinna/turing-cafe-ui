describe('reservations', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      fixture: 'resData.json',
    });
  });

  it('should  be able to add a reservation', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.formNotice').should('contain', 'Make a reservation!')


    cy.get('.reservationCard').first().should('contain', 'Christie');
    cy.get('.reservationCard').last().should('contain', 'Pam');

    cy.get('#name').type('Renee')
    cy.get('#date').type('03/08')
    cy.get('#time').type('12:30')
    cy.get('#number').type('2')
    cy.get('input[type=submit]').click()

    cy.get('.reservationCard').last().should('contain', 'Renee');
    cy.get('.reservationCard').last().should('contain', '03/08');
    cy.get('.reservationCard').last().should('contain', '12:30 pm');
    cy.get('.reservationCard').last().should('contain', 'Number of guests: 2');

  });
  it('should require all inputs', () => {
    cy.visit('http://localhost:3000/');

    cy.get('#name').type('Renee')
    cy.get('#date').type('03/08')
    cy.get('#time').type('12:30')
    cy.get('input[type=submit]').click()

    cy.get('.formNotice').should('contain', 'All inputs are required.')
  })
});
