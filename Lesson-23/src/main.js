// Import the user-card component to register the custom element
import './user-card.js';

// create an array of user objects.
const users = [
  { id: 'u1', name: 'SDEV1150', avatar:'assets/zelda-avatar.png', description: 'This is course about JavaScript'},
  { id: 'u2', name: 'DATA2210', avatar:'assets/link-avatar.png', description: 'This is course about Tableau and Data analytics'},
  { id: 'u3', name: 'CMIS1101', description: 'This is course about Excel, Database, and Word.' },
];

// Lets use the custom web component to render this information available above and place them into your custom web component.
const main = document.querySelector('main');
users.forEach((user) => {
  const card = document.createElement('user-card');

  // link the data by calling user property here.
  card.user = user;
  console.log(card.user);

  // Add the card to the page.
  main.appendChild(card);
});

// declare a variable with initial value as 0 and then we will increment by listening to the custom event.
let followedCount = 0;

// listen on the container 'main'
main.addEventListener('follow-change', (e) => {
  followedCount += e.detail.followed ? 1 : -1;

  // display the result.
  const counterE1 = document.querySelector('#follow-counter');
  counterE1.textContent = `Followed: ${followedCount}`;
  console.log('Information about followed concept: ', e.detail);
});

// auto login mock up
document.querySelector('user-card').follow();

// Theme toggle button logic
let dark = false;
const toggleBtn = document.querySelector('#btn-theme');
toggleBtn.addEventListener('click', () => {
  dark = !dark;
  document.documentElement.style.setProperty('--global-card-bg', dark ? '#1f2937' : '#ffffff');
  document.documentElement.style.setProperty('--global-card-color', dark ? '#e5e7eb' : '#222222');
  document.documentElement.style.setProperty('--global-card-accent', dark ? 'gold' : '#0077ff');
  toggleBtn.textContent = dark ? '☀️' : '🌙';
});
