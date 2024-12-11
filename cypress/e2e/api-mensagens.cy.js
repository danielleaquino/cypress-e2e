describe ('Api adopet', ()=>{

    it('Mensagens da API', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/8c37a54f-c280-48fe-8dfa-22a91ef8888a',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})