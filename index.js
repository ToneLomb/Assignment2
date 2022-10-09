const express = require('express');
const alert = require('alert');
const app = express();
const port = 1010;

app.use(express.static('public'));

const food = [{"name": "brownie", "kcal": "500"},
              {"name": "sushi", "kcal": "100"},
              {"name": "fried rice", "kcal": "350"}, 
              {"name": "pizza", "kcal": "600"}];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/food/:id', (req,res) => {
  alert("You chosed food " + req.params.id)
  res.json(food[parseInt(req.params.id) - 1])
  
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})