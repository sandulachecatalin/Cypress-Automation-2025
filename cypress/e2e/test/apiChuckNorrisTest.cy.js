describe('Chuck Norris API Test', () => { 
    it('should fetch a random Chuck Norris joke', () => {
        cy.request('GET', 'https://api.chucknorris.io/jokes/random')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.value).to.not.be.empty;
            });
    });
});

// Acest test verifică dacă API-ul Chuck Norris returnează un status 200 și dacă gluma nu este goală.
//de facut un alt test pe un alt endpoint, url la nivel de describe si apoi folosita la toate testele
//assertion de verificat valoarea si tipul de date returnata
//de facut un test negativ (alt cod de status), endpoint gresit, etc.
//de pus pe un repository de github toate fisierele de test
//de citit despre promisiuni