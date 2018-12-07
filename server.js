require('dotenv').config();
const Book = require('./models/book')

const
    express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    PORT = process.env.PORT || 3000;

// Database
require('./db');

// Configurations

// Middlware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'views')));
app.use(logger('dev'));
app.use(express.json());

// Routes
        // app.get('/', (req, res) => {
        //     res.sendFile('index.html')
        // }); TOLD BY INSTRUCTIONS TO REPLACE WITH THE FOLLOWING CODE:
app.get('/api/books', (req,res) => {
    // send all books as JSON response
    Book.find({}, (err, books) => {
        if (err) res.json({success: false, err});
        res.json({success: true, books});
    });
});
// SHOW ALL BOOKS:

// CREATE A BOOK:
app.post('/api/books', (req, res) => {
    Book.create(req.body, (err, newBook) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, newBook});
    });
});

// INDEX: FIND 1 book using it's ID
app.get('/api/books/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, book});
    });
});

// UPDATE A BOOK:
app.patch('/api/books/:id', (req, res) => {
    let {body, params} = req;
    Book.findByIdAndUpdate(params.id, body, {new: true}, (err, updatedUser) => {
        if (err) res.json({ succes: false, err});
        res.json({ success: true, updatedUser});
    });
});

// DESTROY / DELETE A BOOK:
/**
|--------------------------------------------------
| Required Routes
|
| 1. Index - show all books
| 2. Create - create a book
| 3. Show - show a book by ID.
| 4. Update - update a book by ID
| 5. Destroy - delete a book by ID.
|--------------------------------------------------
*/

app.listen(PORT, err => {
    console.log(err || `Listening on port ${PORT}`);
});