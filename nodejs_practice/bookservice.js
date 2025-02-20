const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const books = [
    {id:1, AuthorName:'Author 1', Title:'Title 1', Publisher:'Publisher 1', Subject: 'Subject 1', DatePublished: '2-12-2025', Rating: 5 },
    {id:2, AuthorName:'Author 2', Title:'Title 2', Publisher:'Publisher 2', Subject: 'Subject 2', DatePublished: '2-12-2025', Rating: 4 },
    {id:3, AuthorName:'Author 3', Title:'Title 3', Publisher:'Publisher 3', Subject: 'Subject 3', DatePublished: '2-12-2025', Rating: 3 },

];

app.get('/', function(req,res){
    res.send('Hello World');
});
//get all
app.get('/api/books', function(req,res){
    res.status(200).send(books);
})

//get by id
app.get('/api/books/:id', function(req,res){
    const book = books.find(c=>c.id === parseInt(req.params.id));
    if(!book){
        return res.status(400).send('Book Id nnot found...');
    }

    res.send(book);
})

// Add a new book
app.post('/api/books', function(req,res){
    if (!req.body.Subject || req.body.Subject.length<3)
        return res.status(400).send('The book subject is not valid');
    const book = {
        id: books.length + 1,
        AuthorName: req.body.AuthorName,
        Title: req.body.Title,
        Publisher: req.body.Publisher,
        Subject: req.body.Subject,
        DatePublished: req.body.DatePublished,
        Rating: req.body.Rating
    };
    books.push(book);
    res.send(book);
})

// Update a book by id
app.put('/api/books/:id', function(req,res){
    const book = books.find(c=>c.id === parseInt(req.params.id));
    if(!book){
        return res.status(400).send('Book Id not found...');
    } else if(!req.body.Subject || req.body.Subject.length < 3){
        return res.status(400).send('The book subject is not valid');

    }
    book.Subject = req.body.Subject;
    res.send(book);

})

//Delete a book by id
app.delete('/api/books/:id', function(req,res){
    const book = books.find(c=>c.id === parseInt(req.params.id));
    if(!book){
        return res.status(400).send('Book Id not found...');
    }
    const bookIndex = books.indexOf(book);
    books.splice(bookIndex, 1);
    res.send(books);

})
const port = 8008;
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
