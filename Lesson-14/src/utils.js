console.log('Util js loaded');

export function greetUser(name) {
  return `Welcome to the App, ${name}!`;
}

const defaultName = 'User';
export default { defaultName };

// const gretingElement = document.getElementById('greeting');
// gretingElement.textContent = greetUser();

// export in JavaScript is used to export functions, vcariables, classes or objects.
// Benefits of using import/export.
// Modularity, Reusability, maintainability, scalability.
// avoid duplication.
