// import app-header.js file to create the linking.
import './components/app-header.js';
import './components/app-button.js';

// find button location on HTML page
const container = document.getElementById('category-buttons');

const button = document.createElement('app-button');

container.appendChild(button);
