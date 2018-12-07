/**
|--------------------------------------------------
| BONUS: Add a bookRouter
|--------------------------------------------------
*/
//CONSTANTS:
const
    Book = require('../controllers/book');
    express = require('express');
    router = express.Router();

//ROUTES:


//SHOW ALL
router.get('/', Book.index);

//FIND ONE
router.get('/:id', Book.show);

//CREATE
router.post('/', Book.create);

//UPDATE
router.patch('/:id', Book.update);

//DESTROY
router.delete('/:id', Book.destroy);

module.exports = router;