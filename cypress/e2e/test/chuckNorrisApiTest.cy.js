import ChuckNorrisApiPage from '../page/chuckNorrisApiPage';

describe('Chuck Norris API Tests - POM', () => {
  
  it('should fetch a random Chuck Norris joke', () => {
    ChuckNorrisApiPage.getRandomJoke().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('value');
      expect(response.body.value).to.be.a('string').and.not.be.empty;
      expect(response.body).to.have.property('id').that.is.a('string');
    });
  });

  it('should fetch a list of categories', () => {
    ChuckNorrisApiPage.getCategories().then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
      expect(response.body).to.include('dev');
    });
  });

  it('should fetch a joke from a specific category', () => {
    const category = 'dev';
    ChuckNorrisApiPage.getJokeByCategory(category).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.categories).to.include(category);
      expect(response.body.value).to.be.a('string');
    });
  });

  it('should return 404 for an invalid endpoint', () => {
    ChuckNorrisApiPage.getInvalidEndpoint().then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});


// Acest test verifică dacă API-ul Chuck Norris returnează un status 200 și dacă gluma nu este goală.
//de facut un alt test pe un alt endpoint, url la nivel de describe si apoi folosita la toate testele
//assertion de verificat valoarea si tipul de date returnata
//de facut un test negativ (alt cod de status), endpoint gresit, etc.
//de pus pe un repository de github toate fisierele de test
//de citit despre promisiuni