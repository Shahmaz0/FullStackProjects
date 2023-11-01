function createDomElement(data){
    var parentElement = document.getElementById("mainArea");
    parentElement.innerHTML = ""
        // parentElement.innerHTML = JSON.stringify(data);
    for (var i = 0; i < data.length; i++) {
        var childElement = document.createElement("div");

        var grandChildElement1 = document.createElement("span")
        grandChildElement1.innerHTML = data[i].title

        var grandChildElement2 = document.createElement("span")
        grandChildElement2.innerHTML = data[i].description

        var grandChildElement3 = document.createElement("button")
        grandChildElement3.innerHTML = "Delete"
        grandChildElement3.setAttribute("onclick", "deleteTodo(" + data[i].id + ")");

        childElement.appendChild(grandChildElement1)
        childElement.appendChild(grandChildElement2)
        childElement.appendChild(grandChildElement3)


        parentElement.appendChild(childElement);
        
    }
}

window.setInterval(() => {
    let todos = [];
    for(let i=0; i<Math.floor(Math.random() * 100); i++){
        todos.push({
            title: "go to gym",
            "description": "Go to gym from 5",
            id: i + 1
        })
    }
    createDomElement(todos)
}, 1000)
