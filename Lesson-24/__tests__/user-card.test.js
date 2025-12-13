import '../src/user-card.js';
import { describe, test, expect, beforeEach, afterEach } from 'vitest';

// declare a variable that you can use through out.
let element;
// increase the efficiency by removing the redundancy of code. For that, we have beforeEach() and afterEach().
beforeEach(() => {
  // set up a new instance of creating a HTML element because that is repetetive task.
  element = document.createElement('user-card');
});

afterEach(() => {
  // clean up the stuff.
  element.remove();
  element = null;
});
// you enhance the code with usage of before and after each.

// lets use describe helper method to group all user-card related test cases that we need to execute.
describe('UserCard', () => {
  test('Test-1 Render the card with default properties', () => {
    // create the instance of user card component.
    // const element = document.createElement('user-card');
    document.body.appendChild(element);

    // Make assertions using standard DOM APIS
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
    expect(element.followed).toBe(false);

    // please clean up whatever we created and release the memory.
    document.body.removeChild(element);
  });

  // I will define my next test here that will be grouped under describe
  test('Test-2 Render the card with custom properties', () => {
    // create the instance of user card component.
    // const element = document.createElement('user-card');
    document.body.appendChild(element);

    // Make assertions using standard DOM APIS
    expect(element.shadowRoot.querySelector('img').getAttribute('src')).toBe('https://placehold.co/80x80/0077ff/ffffff');
  });

  // write the testcase to render the name and description on the card.
  test('Test 3: Validate the rendering of name and description of the card', async () => {
    // const element = document.createElement('user-card');

    // creating SPAN element for name.
    const nameSpan = document.createElement('span');
    nameSpan.setAttribute('slot', 'name');
    nameSpan.textContent = 'Vitest User';

    // creating SPAN element for description.
    const descSpan = document.createElement('span');
    descSpan.setAttribute('slot', 'description');
    descSpan.textContent = 'A user for testing with Vitest';

    // Append these two newly created child nodes to the parent called 'user-card'.
    element.appendChild(nameSpan);
    element.appendChild(descSpan);

    // parent element needs to be appended to the body of the page.
    document.body.appendChild(element);

    // Assert the test.
    // Before you assert, fetch the location of shadow root where information got stored.
    const nameSlot = element.shadowRoot.querySelector('slot[name="name"]');
    const descSlot = element.shadowRoot.querySelector('slot[name="description"]');

    // Assert
    expect(nameSlot.assignedNodes()[0].textContent).toBe('Vitest User');
    expect(descSlot.assignedNodes()[0].textContent).toBe('A user for testing with Vitest');

    document.body.removeChild(element);
  });

  // test to valdiate the attribute
  test('Validating image attribute', () => {
    // append directly because it is already created in beforeEach.
    document.body.appendChild(element);

    // Save the image url to variable.
    const testAvatarURL = 'https://example.com/updated.png';

    // set the attribute
    element.setAttribute('avatar', testAvatarURL);

    // assert but before you assert, fetch the location.
    const img = element.shadowRoot.querySelector('img');
    expect(img.getAttribute('src')).toBe(testAvatarURL);
  });
});
