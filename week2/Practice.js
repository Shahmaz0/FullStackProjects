const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());



function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
  
    let prev = 0;
    let curr = 1;
    let next;
  
    for (let i = 2; i <= n; i++) {
      next = prev + curr;
      prev = curr;
      curr = next;
    }
  
    return curr;
  }

  function handleRequest(req, res) {
    var nthNumber = req.query.nthNumber;
    console.log(nthNumber);
    var nthFibonacci = fibonacci(nthNumber);
    var nthFibonacciObject = {
        name : "Shahma",
        age : 20,
        nthNumber : nthFibonacci
    }

    // res.send(counter + "th fibonacci number is = " + nthFibonacci);
    res.status(411).send(nthFibonacciObject);

  }

  app.get('/handleRequest', handleRequest)

  function started(){
    console.log(`Example app listening on port ${port}`);
  }

  app.listen(port, started)