const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
let NumberOfRequest = 0;

// function middleWare1(req, res, next) {
//     NumberOfRequest = NumberOfRequest + 1
//     console.log(NumberOfRequest);
//     next();
// }



// app.use(middleWare1);
app.use(bodyParser.json());

function calculateSum(counter) {
    var sum = 0;
    for (var i=1; i<=counter; i++) {
        sum = sum + i;
    }
    return sum;
}

//4 => 1 * 2 * 3 * 4 = 24
function calculateMul(counter) {
    var answer = 1;
    for (var i=1; i<=counter; i++) {
        answer = answer * i;
    }
    return answer;
}


function handleFirstRequest(req, res) {
    var counter = req.body.counter;
    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);
    
    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul
    }

    res.status(200).send(answerObject);
    
}

function getPage(req, res){

    let obj = {
        "ivd" : "ssdcmsd"
    };

    res.send(obj)
//     res.send(
//     `<head>
//         <title>
//             Welcome to Shahma's web
//         </title>
//     </head>
//     <body>
//         <i>hi there</i>
//     </body>`
// )
}

// app.get('/handleSum', handleFirstRequest)
app.get('/', getPage)
app.post('/handleSum', handleFirstRequest)

function started() {
    console.log(`Example app listening on port ${port}`)                        
}

app.listen(port, started)