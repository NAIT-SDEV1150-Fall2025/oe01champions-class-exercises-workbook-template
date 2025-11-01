//imported the http module from http libraries.
import http from 'http';

//create customer server
http.createServer((req, res) => {
  console.log('Request received');

  setTimeout(() => {
    console.log('Inside setTimeOut block and that should be displayed after 3 seconds.')
  res.end('Hello World');
  }, 3000); 
  console.log('This statement is given after the setTimeOut');
}).listen(3000);
console.log('Server is running on port 3000')