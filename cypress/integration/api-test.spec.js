/// <reference types="cypress" />

describe('Automação de testes de API', () => {
    beforeEach('Acesso ao jsonplaceholder', () => {
        cy.request('http://jsonplaceholder.typicode.com/users')
      })

    it('Teste - GET', () => {
      cy.request({
        method: 'GET',
        url: 'http://jsonplaceholder.typicode.com/users',
        body: {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
           "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
      }).then((response)=>{
        expect(response.status).to.equal(200)
      })
    })

    it('Teste - POST', () => {
      cy.request({
        method: 'POST',
        url: 'http://jsonplaceholder.typicode.com/users',
        body: {
          "id": 1,
          "name": "Gustavo Dambroski",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
           "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
      }).then((response)=>{
        expect(response.status).to.equal(201)
      })
    })

    it('Teste - PUT', () => {
      cy.request({
        method: 'PUT',
        url: 'http://jsonplaceholder.typicode.com/users/1',
        body: {
          "id": 1,
          "name": "Gustavo Dambroski",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
           "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
        }).then((response)=>{
        expect(response.status).to.equal(200)
      })
    })

    it('Teste - DELETE', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://jsonplaceholder.typicode.com/users/1',
        body: {
          "id": 1,
          "name": "Gustavo Dambroski",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
           "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
        }).then((response)=>{
        expect(response.status).to.equal(200)
      })
    })

    it('Validação do Schema', () => {
      const Schema = {
        title: 'teste schema',
        type: 'object',
        required: ['id', 'name'],
        properties: {
          id: {
            type: 'number',
            minimum: 1,
          }
        }
      };
      cy.request('GET', 'http://jsonplaceholder.typicode.com/users').then((res) =>{
        expect(res.status).equal(200)
      })
    })
        
})