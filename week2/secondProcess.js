
function logRespondBody(jsonBody) {
    console.log(jsonBody);
}

function callBackFn(result) {
    result.json().then(logRespondBody)
}

let sendObj = {
    method : "GET"
}

fetch("http://localhost:3000/handleRequest?nthNumber=7", sendObj).then(callBackFn)