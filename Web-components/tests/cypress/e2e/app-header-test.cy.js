describe('app-header', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/test');
    // Add the app-header to the DOM before each test
    cy.document().then((doc) => {
      const header = doc.createElement('app-header');
      doc.body.appendChild(header);
    });
  });

  afterEach(() => {
    // Clean up the DOM after each test
    cy.document().then((doc) => {
      const header = doc.querySelector('app-header');
      if (header) {
        header.remove();
      }
    });
  });

  it('renders with default slot value', () => {
    cy.task('log', 'Checking default rendering of app-header');
    cy.get('app-header').shadow().find('a').contains('Home Link Text');
  });

  it('renders with custom home link text', () => {
    // update the app-header with a custom home link text
    cy.document().then((doc) => {
      const existingHeader = doc.querySelector('app-header');
      existingHeader.innerHTML = `<span slot="home-text">Dashboard</span>`;
    });

    cy.get('app-header').should((el) => {
      // innerText will only render correctly if the slot has been processed
      expect(el[0].innerText).to.equal('Dashboard');
    });

    // Shadow DOM will still show default
    cy.get('app-header').shadow().find('a').should('contain.text', 'Home Link Text');
  });
});
