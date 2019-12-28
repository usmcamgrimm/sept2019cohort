// Create a "close" button on each line item
let myNodeList = document.getElementsByTagName("li");

for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("span");
    let txtNode = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txtNode);
    myNodeList[i].appendChild(span);
}

// Click the close button to hide line items
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a checkmark symbol when a line item is clicked
let list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when adding tasks
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("taskAdd").value;
    let txt = document.createTextNode(inputValue);

    li.appendChild(txt);
    if (inputValue === '') {
        alert("Please add a task first");
    } else {
        document.getElementById("taskList").appendChild(li)
    }
    document.getElementById("taskAdd").value = "";

    let span = document.createElement("SPAN");
    let txtNode = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txtNode);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}