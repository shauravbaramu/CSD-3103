const express = require('express'); // Import the express module
const app = express(); // Create an Express application

const subjects = [ // Define an array of subjects
    {id:1, name:'Subject 1'}, // Each subject is an object with an id and a name
    {id:2, name:'Subject 2'}, 
    {id:3, name:'Subject 3'}
];

app.get('/', (req, res) => { // Define a route handler for the default home page
  res.send('Hello World!'); // Send a response to the client
}); // The route handler is a callback function that takes two arguments, req and res, representing the request and the response objects, respectively.

app.get('/api/subjects', (req, res) => { // Define a route handler for the /api/subjects URL 
    res.send(subjects); // Send a response to the client with the subjects array as the payload 
    });

app.get('/api/subjects/:id', (req, res) => { // Define a route handler for the /api/subjects/:id URL
    //validation
    const subject = subjects.find(c=>c.id === parseInt(req.params.id)); // Look up the subject by id in the subjects array and assign it to the subject variable
    if(!subject) 
        return res.status(404).send('The subject with the given ID was not found.'); // If the subject is not found, return a 404 error to the client with a message 
    res.send(subject); // Send a response to the client with the subject object as the payload 
    });

//create app.post 
app.post('/api/sujects',(req,res)=>{
    //validation 
    if (!req.body.name || req.body.name.length < 3){
        //400 Bad Request
        res.status(400).send('The name is invalid..')
        
    const subject = {
        id: subjects.length + 1,
        name: req.body.name
    }
}
)

const port = 3000;  // Port number for the server to listen on 
app.listen(port, () => { // Make the app listen on port 3000 for incoming requests  
  console.log(`Server is running on http://localhost:${port}`); // Print a message to the console 
});