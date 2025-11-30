/* eslint-disable camelcase */
// Test data
const testData = {
  name: 'Test Entry',
  image: 'https://via.placeholder.com/150',
  category: 'Test Category',
  description: 'Test Description',
  common_locations: ['Location 1', 'Location 2'],
  drops: ['Drop 1', 'Drop 2'],
};

describe('entry-card', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/test');
    // Add the entry-card to the DOM before each test
    cy.document().then((doc) => {
      const card = doc.createElement('entry-card');
      card.data = testData;
      doc.body.appendChild(card);
    });
  });

  afterEach(() => {
    // Clean up the DOM after each test
    cy.document().then((doc) => {
      const card = doc.querySelector('entry-card');
      if (card) {
        card.remove();
      }
    });
  });

  it('throws an error when trying to render without data set', () => {
    cy.get('entry-card').then((el) => {
      expect(() => {
        el[0].data = null;
      }).to.throw('No data has been set');
    });
  });

  it('renders with set user data', () => {
    cy.get('entry-card').should('exist');
    cy.get('entry-card').shadow().find('slot[name="name"]').should('have.text', testData.name);
    cy.get('entry-card').shadow().find('slot[name="category"]').should('have.text', testData.category);
    cy.get('entry-card').shadow().find('img').should('have.attr', 'src', testData.image);
    cy.get('entry-card').shadow().find('slot[name="description"]').should('have.text', testData.description);
    cy.get('entry-card').shadow().find('slot[name="locations"]').should('have.text', testData.common_locations.join(', '));
    cy.get('entry-card').shadow().find('slot[name="drops"]').should('have.text', testData.drops.join(', '));
  });

  it('toggles expanded state on button click', () => {
    cy.get('entry-card').shadow().find('#details').should('have.class', 'extra-hidden');
    cy.get('entry-card').shadow().find('#toggle-btn').click();
    cy.get('entry-card').shadow().find('#details').should('not.have.class', 'extra-hidden');
    cy.get('entry-card').shadow().find('#toggle-btn').click();
    cy.get('entry-card').shadow().find('#details').should('have.class', 'extra-hidden');
  });

  // Test private state management
  it('updates internal expanded state correctly', () => {
    cy.get('entry-card').then((el) => {
      expect(el[0].expanded).to.be.false;
      el[0].expanded = true;
      expect(el[0].expanded).to.be.true;
      el[0].expanded = false;
      expect(el[0].expanded).to.be.false;
    });
  });

  it('updates internal data state correctly', () => {
    const newData = {
      name: 'New Test Entry',
      image: 'https://via.placeholder.com/200',
      category: 'New Test Category',
      description: 'New Test Description',
      common_locations: ['New Location 1'],
      drops: ['New Drop 1'],
    };
    cy.get('entry-card').then((el) => {
      el[0].data = newData;
      expect(el[0].data).to.deep.equal(newData);
    });
  });

  it('renders updated data when data state is changed', () => {
    const updatedData = {
      name: 'Updated Entry',
      image: 'https://via.placeholder.com/250',
      category: 'Updated Category',
      description: 'Updated Description',
      common_locations: ['Updated Location'],
      drops: ['Updated Drop'],
    };
    cy.get('entry-card').then((el) => {
      el[0].data = updatedData;
    });
    cy.get('entry-card').shadow().find('slot[name="name"]').should('have.text', updatedData.name);
    cy.get('entry-card').shadow().find('slot[name="category"]').should('have.text', updatedData.category);
    cy.get('entry-card').shadow().find('img').should('have.attr', 'src', updatedData.image);
    cy.get('entry-card').shadow().find('slot[name="description"]').should('have.text', updatedData.description);
    cy.get('entry-card').shadow().find('slot[name="locations"]').should('have.text', updatedData.common_locations.join(', '));
    cy.get('entry-card').shadow().find('slot[name="drops"]').should('have.text', updatedData.drops.join(', '));
  });
});
