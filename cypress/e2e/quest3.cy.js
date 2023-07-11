describe('API Note register', () => {
    it('register', () => {
        cy.fixture('userNote').then(user => {
            cy.request({
                url: 'https://practice.expandtesting.com/notes/api/users/register',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: user
            }).its('status').should('eq', 201);
        })
    })
})

describe('API Note', () =>{
    beforeEach(() =>{
        cy.fixture('userNote').then(user => {
            cy.login(user.email, user.password);
        })
    })

    it('create note', () => {
        cy.fixture('note').then(note => {
            const token = Cypress.env('token');
            cy.request({
                url: 'https://practice.expandtesting.com/notes/api/notes',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'X-Auth-Token': token,
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                body: note
            }).its('status').should('eq', 200);
        })
    })

    it('get all notes', () => {
        const token = Cypress.env('token');
        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/notes',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-Auth-Token': token,
            }
        }).then(res => {
            console.log(res.body.data[0])
            expect(res.body.data[0].title).contains('test')
        }).its('status').should('eq', 200);
    })

    it('test logOut', () => {
        const token = Cypress.env('token');
        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/users/logout',
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'X-Auth-Token': token
            }
        }).its('status').should('eq', 200);
    })

    it('delete account', () => {
        const token = Cypress.env('token');
        cy.request({
            url: 'https://practice.expandtesting.com/notes/api/users/delete-account',
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'X-Auth-Token': token
            }
        }).its('status').should('eq', 200);
    })
})