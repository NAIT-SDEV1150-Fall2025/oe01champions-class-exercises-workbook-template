describe('app-button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/test');
    // Add the app-button to the DOM before each test
    cy.document().then((doc) => {
      const button = doc.createElement('app-button');
      doc.body.appendChild(button);
    });
  });

  afterEach(() => {
    // Clean up the DOM after each test
    cy.document().then((doc) => {
      const button = doc.querySelector('app-button');
      if (button) {
        button.remove();
      }
    });
  });

  it('renders with default slot value and attribute', () => {
    cy.task('log', 'Checking default rendering of app-button');
    cy.get('app-button').shadow().find('button').contains('Click Me');
  });

  it('renders with custom label', () => {
    // update the app-button with a custom label
    cy.document().then((doc) => {
      const existingButton = doc.querySelector('app-button');
      existingButton.innerHTML = `<span slot="label">Submit</span>`;
    });

    cy.get('app-button').should((el) => {
      // innerText will only render correctly if the slot has been processed
      expect(el[0].innerText).to.equal('Submit');
    });

    // Shadow DOM will still show default
    cy.get('app-button').shadow().find('button').should('contain.text', 'Click Me');
  });

  it('updates and renders as a link when href attribute is present', () => {
    cy.task('log', 'Starts out as a button');
    cy.get('app-button').shadow().find('a').should('not.exist');

    cy.get('app-button').then((el) => {
      el[0].setAttribute('href', 'https://example.com');
    });

    cy.task('log', 'Rendered as link with href after attribute set');
    cy.get('app-button').shadow().find('a').should('have.attr', 'href', 'https://example.com');
  });

  // Test CSS variable customization
  it('applies custom CSS variables', () => {
    // Set custom CSS variables on the document body
    cy.document().then((doc) => {
      const button = doc.querySelector('app-button');
      button.style.setProperty('--app-button-bg', 'blue');
      button.style.setProperty('--app-button-color', 'white');
      button.style.setProperty('--app-button-bg-hover', 'darkblue');
      button.style.setProperty('--app-button-color-hover', 'lightgray');
    });

    // Verify the styles are applied in the shadow DOM
    cy.get('app-button').shadow().find('button').should('have.css', 'background-color', 'rgb(0, 0, 255)'); // blue
    cy.get('app-button').shadow().find('button').should('have.css', 'color', 'rgb(255, 255, 255)'); // white

    // Simulate hover to check hover styles
    cy.get('app-button').shadow().find('button').realHover();
    cy.get('app-button').shadow().find('button').should('have.css', 'background-color', 'rgb(0, 0, 139)'); // darkblue
    cy.get('app-button').shadow().find('button').should('have.css', 'color', 'rgb(211, 211, 211)'); // lightgray
  });
});
