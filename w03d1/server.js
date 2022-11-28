const express = require('express');
const PORT = 8989;

const app = express();
app.set('view engine','ejs');

const db = {
  42: {name: 'bananas'},
  13: {name: 'insects'}
};

//
// Middleware
//
app.use((req, res, next) => {
  console.log(`${req.method} Request Made to Path ${req.url}`);
  next();
});

//
// Routes
//
app.get('/', (req, res) => {
  console.log('user has requested the homepage');
  res.render('home');
});

app.get('/monkeyfuzz/:id', (req, res) => {
  console.log('user has requested the monkeyfuzz');
  console.log('req.params', req.params);
  
  const ffid = req.params.id; // get the parameter value from the URL
   
  let favFoodName = '';
  if (db[ffid]){
    favFoodName = db[ffid].name; // gets the f.f. name from the DB
  } else {
    favFoodName = 'unknown!';
  }
  
  const templateVars = {
    foodName: favFoodName
  };

  res.render('monkeyfuzz', templateVars);
});

app.post('/', (req, res) => {
  // custom
});

app.get('*', (req, res) => {
  res.render('404');
});

//
// Listening to the PORT
//
app.listen(PORT, () => {
  console.log(`Server is listening to PORT=${PORT}`);
});