const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const shoppingRouter = require('./routes/shoppinglist.router.js')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/api/groceries', shoppingRouter);

// /** ---------- START SERVER ---------- **
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
