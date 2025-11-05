// Import the functions necessary to make the API calls
import { fetchData, postData } from './utils';

// Select the necessary DOM elements
const addForm = document.getElementById('addBook');
const loadButton = document.getElementById('loadBooks');
const list = document.getElementById('bookList');

// Define the API endpoint
const endpoint = 'http://localhost:3000/books';

// Define a function to handle loading and displaying the list of books
async function loadHandler() {
    list.innerHTML = '<li> Loading ... </li>';

    //try catch block.
    try {
    const books = await fetchData(endpoint);
    list.innerHTML = "";

    //foreach statement to visit each element of array and then display accordingly.
    books.forEach((book) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        list.appendChild(li);
    });
    } catch (error) {
        list.innerHTML = `<li style="color:red;"> Error is: ${error.message} </li>`;
    }
}

// Define a function to handle form submission for adding a new book
async function submitHandler(e) {
    e.preventDefault(); // never reload the form/page.
    const form = e.target;
    const formdata = new FormData(form);
    // display formdata on console;
    console.log(formdata.entries());
    const data = Object.fromEntries(formdata.entries());
    // data type conversion to display year as a number, not as a string value.
    data['year'] = Number(data.year);

    try {
    await postData(endpoint, data);

    // whenever response is successful, load the loadhandler function to load the data automatically.
    loadHandler();
    } catch (error) {
        console.log(' Error in submitting the form:', error);
    }

}

// Attach event listeners to the button and form


// TODO: Add delete functionality
addForm.addEventListener('submit', submitHandler);
loadButton.addEventListener('click', loadHandler);