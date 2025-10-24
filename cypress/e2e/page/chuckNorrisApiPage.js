class ChuckNorrisApiPage {
  baseUrl = 'https://api.chucknorris.io/jokes';

  getRandomJoke() {
    return cy.request('GET', `${this.baseUrl}/random`);
  }

  getCategories() {
    return cy.request('GET', `${this.baseUrl}/categories`);
  }

  getJokeByCategory(category) {
    return cy.request('GET', `${this.baseUrl}/random?category=${category}`);
  }

  getInvalidEndpoint() {
    return cy.request({
      method: 'GET',
      url: `${this.baseUrl}/invalid-endpoint`,
      failOnStatusCode: false
    });
  }
}

export default new ChuckNorrisApiPage();