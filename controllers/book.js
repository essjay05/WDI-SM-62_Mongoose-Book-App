/**
|--------------------------------------------------
| BONUS: Add a Book controller
|--------------------------------------------------
*/
// Constants
const Book = require('../models/book');

module.export = {
    index: (req,res) => {
        // send all books as JSON response
        Book.find({}, (err, books) => {
            if (err) res.json({success: false, err});
            res.json({success: true, books});
        });
    },

    show: (req, res) => {
        Book.findById(req.params.id, (err, book) => {
            if (err) res.json({ success: false, err});
            res.json({ success: true, book});
        });
    },

    create: (req, res) => {
        Book.create(req.body, (err, newBook) => {
            if (err) res.json({success: false, err});
            res.json({ success: true, newBook});
        });
    },

    update: (req, res) => {
        let {body, params} = req;
        Book.findByIdAndUpdate(params.id, body, {new: true}, (err, updatedUser) => {
            if (err) res.json({ succes: false, err});
            res.json({ success: true, updatedUser});
        });
    }, 

    destroy: (req, res) => {
        Book.findByIdAndDelete(req.params.id, (err, deletedBook) => {
            if (err) res.json({ success: false, err});
            res.json({success: true, deletedBook});
        });
    }
}