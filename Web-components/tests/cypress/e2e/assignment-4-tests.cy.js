const API_URL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/';
const categories = ['creatures', 'monsters', 'materials', 'equipment', 'treasure'];
import data from '../fixtures/creatures-fixture.json';

beforeEach(() => {
  cy.log('intercepting requests to the API URL.');

  // Creatures endpoint - only one with fixture data
  cy.intercept('GET', `${API_URL}/creatures`, {
    statusCode: 200,
    fixture: 'creatures-fixture.json',
  });

  // Monsters endpoint
  cy.intercept('GET', `${API_URL}/monsters`, {
    statusCode: 200,
  });

  // Materials endpoint
  cy.intercept('GET', `${API_URL}/materials`, {
    statusCode: 200,
  });

  // Equipment endpoint
  cy.intercept('GET', `${API_URL}/equipment`, {
    statusCode: 200,
  });

  // Treasure endpoint
  cy.intercept('GET', `${API_URL}/treasure`, {
    statusCode: 200,
  });
});

describe('Index is loaded correctly (debugging)', () => {
  it('Loads the page', () => {
    cy.visit('http://localhost:8080');
  });
});

describe('Index displays category buttons correctly', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  categories.forEach((category) => {
    it(`Displays the ${category} button correctly`, () => {
      cy.task('log', `Checking for button with label "${category}"`);

      cy.get('app-button').eq(categories.indexOf(category)).should(($el) => {
        expect($el[0].innerText).to.equal(category);
      });

      cy.task('log', `Checking for button with proper href "category.html?category=${category}"`);
      cy.get(`app-button[href="category.html?category=${category}"]`).should('exist');
    });
  });
});

// Clicking creatures button loads correct category page with entries
describe('Clicking category buttons loads correct category pages', () => {
  it('Clicking the creatures button loads the creatures category page', () => {
    cy.visit('http://localhost:8080');

    cy.get('app-button').eq(0).click();

    cy.url().should('include', 'category.html?category=creatures');

    // Check that entries are loaded
    cy.get('entry-card').should('have.length', 2);

    // Check that first entry is correct based on fixture data
    cy.task('log', 'Checking first entry card data');
    cy.task('log', 'Renders correct name');
    cy.get('entry-card').eq(0).shadow().find('slot[name="name"]').should('have.text', data.data[0].name);
    cy.task('log', 'Renders correct category');
    cy.get('entry-card').eq(0).shadow().find('slot[name="category"]').should('have.text', data.data[0].category);
    cy.task('log', 'Renders correct image');
    cy.get('entry-card').eq(0).shadow().find('img').should('have.attr', 'src', data.data[0].image);
    cy.task('log', 'Renders correct description');
    cy.get('entry-card').eq(0).shadow().find('slot[name="description"]').should('have.text', data.data[0].description);
    cy.task('log', 'Renders correct common locations');
    cy.get('entry-card').eq(0).shadow().find('slot[name="locations"]').should('have.text', data.data[0].common_locations.join(', '));
    cy.task('log', 'Renders correct drops');
    cy.get('entry-card').eq(0).shadow().find('slot[name="drops"]').should('have.text', 'None');

    // Check that second entry is correct based on fixture data
    cy.task('log', 'Checking second entry card data');
    cy.task('log', 'Renders correct name');
    cy.get('entry-card').eq(1).shadow().find('slot[name="name"]').should('have.text', data.data[1].name);
    cy.task('log', 'Renders correct category');
    cy.get('entry-card').eq(1).shadow().find('slot[name="category"]').should('have.text', data.data[1].category);
    cy.task('log', 'Renders correct image');
    cy.get('entry-card').eq(1).shadow().find('img').should('have.attr', 'src', data.data[1].image);
    cy.task('log', 'Renders correct description');
    cy.get('entry-card').eq(1).shadow().find('slot[name="description"]').should('have.text', data.data[1].description);
    cy.task('log', 'Renders correct common locations');
    cy.get('entry-card').eq(1).shadow().find('slot[name="locations"]').should('have.text', data.data[1].common_locations.join(', '));
    cy.task('log', 'Renders correct drops');
    cy.get('entry-card').eq(1).shadow().find('slot[name="drops"]').should('have.text', data.data[1].drops.join(', '));
  });
});

// Text Toggle details button on entry-card works correctly
describe('Entry card toggle details button works correctly', () => {
  it('Toggles details visibility on button click', () => {
    cy.visit('http://localhost:8080/category.html?category=creatures');

    cy.get('entry-card').eq(0).shadow().find('#details').should('have.class', 'extra-hidden');
    cy.get('entry-card').eq(0).shadow().find('#toggle-btn').click();
    cy.get('entry-card').eq(0).shadow().find('#details').should('not.have.class', 'extra-hidden');
    cy.get('entry-card').eq(0).shadow().find('#toggle-btn').click();
    cy.get('entry-card').eq(0).shadow().find('#details').should('have.class', 'extra-hidden');
  });
});

// Entry-card internal state management works correctly
describe('Entry card internal state management works correctly', () => {
  // Test private state management
  it('updates internal expanded state correctly', () => {
    cy.visit('http://localhost:8080/category.html?category=creatures');

    cy.get('entry-card').then((el) => {
      expect(el[0].expanded).to.be.false;
      el[0].expanded = true;
      expect(el[0].expanded).to.be.true;
      el[0].expanded = false;
      expect(el[0].expanded).to.be.false;
    });
  });
});
