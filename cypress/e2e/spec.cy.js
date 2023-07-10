describe('Sign up', () => {

  // Création d'un nouveau compte sur back market
  // j'ai déjà créé un compte avec ces identifiants 
  // pour faire un nouvel essai, changer le mail d'inscription 
  it('success', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains('Refuser les cookies').click()
    cy.get('#firstName').type('Hari')
    cy.get('#lastName').type('Seldon')
    cy.get('#signup-email').type('hari.seldon@gmail.com')
    cy.get('#signup-password').type('Psychohistoire11')
    cy.contains('Enchantés').click()
  })

  it('unsuccess', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains('Refuser les cookies').click()
    cy.get('#firstName').type('Hari')
    cy.get('#lastName').type('Seldon')
    cy.get('#signup-email').type('hari.seldon@example.com')
    cy.get('#signup-password').type('psychohistoire')
    cy.contains('Enchantés').click()
  })
})

describe('Log In', () => {
  it('success', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains('Refuser les cookies').click()
    cy.get('#signin-email').type('hari.seldon@gmail.com')
    cy.get('#signin-password').type('Psychohistoire23')
    cy.contains('Welcome Back').click()
  })

  it('unsuccess', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.contains('Refuser les cookies').click()
    cy.get('#signin-email').type('hari.seldon@gmail.com')
    cy.get('#signin-password').type('psychohistoire')
    cy.contains('Welcome Back').click()
  })
})