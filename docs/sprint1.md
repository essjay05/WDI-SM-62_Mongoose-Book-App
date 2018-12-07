# Sprint 1 - mongoDB & mongoose

## 1. You awake inside a new app and look around.

Take a few minutes to familiarize yourself with your surroundings and navigate the file structure of this app.  You should see a few routes listed in `server.js`; a basic front-end using them, a few files in public including your front-end JavaScript.  

"Hmm", you think to yourself, "this app seems to be a books app."

**You didn't forget to `npm install` did you?**

## 2. Outgrowing Arrays as a datastore.

Arrays are no longer adequate as a data-store.  They lose their data whenever the server is shut down, they don't support backups unless you copy the file, and new elements never get saved in the file.  Plus, all the cool kids are using databases.

Let's replace that array with a database.  We'll create a booksSchema and Books model.  

First off let's setup mongo and mongoose.  

1. Install mongoose into this repo's package.json: `npm install --save mongoose`
2. Create a new file `models/book.js`. We'll create a schema and model for books in this file!

3. Our books will have the following attributes:
  * title
  * author
  * image (use a string for this)
  * releaseDate

  Let's create a schema using these properties.  I'll get you started:

  ```js
  // book.js
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var BookSchema = new Schema({
       title: String,
      // you should fill the rest of this in
   });
  ```

4. Next let's create the `Book` model from the schema.  

  ```js
  // book.js
  var Book = mongoose.model('Book', BookSchema);
  ```

5. Finally we'll need to export Book from this **module** (that's this file).  You can export it at the very end of the file by doing:

  ```js
  // book.js
  var Book = mongoose.model('Book', BookSchema);

  module.exports = Book;
  ```

## 3. Connecting the model to the Server

Next we'll start to use our new model in server.js.

1. Open `server.js`.  

2. Add the correct `require` statement to `server.js` to import your models module:  `const Book = require('./models/book')`.

3. Find the books index route and replace it with the following code:

  ```js
  // server.js
  app.get('/api/books', function (req, res) {
    // send all books as JSON response
    Book.find(function(err, books){
      if (err) res.json({ success: false, err });
      res.json({ success: true, books });
    });
  });
  ```

5. Restart your server. Debug any error messages you see.

6. Open Post and query the `/api/books` endpoint. If successfullly implemented, json should be returned that looks something like this:

	```js
		{
			success: true,
			books: {}
		}
	```
	
## 4. Add Remaining CRUD Methods

On your own, use mongoose methods to implement the other four RESTful routes to get perform CRUD functionality on your database.

Make sure you look back to the notes or the Mongoose documentation for info on important methods like:

* `findById`
* `deleteOne`
* `findOneAndUpdate`

## 5. Bonus - RESTful Refactor

**Add a Book Controller.**

For each of your RESTful endpoints, refactor your server by extracting the logic from the callback into the `controllers/book.js` file. 

Once complete, remember to require in the controller instead of the model in your `sever.js`, and add each method as the callback for the respective endpoint.

If you get stuck, refer to the example from class.

**Add a Book Router**

Refactor your server again by extracting each API endpoint from `server.js` and into the `routers/bookRouter.js` file.

Once complete, remember to require in the router instead of the controller in your `server.js`, and hook up the router by using the following piece of code:

```js
const bookRouter = require('./routers/bookRouter');
app.use('/api/books', bookRouter');
```

If you get stuck, refer to the example from class.