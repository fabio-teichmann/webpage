var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");
var lis = [...ul.children]
var delButtons = [...document.getElementsByClassName("delButton")]

console.log(delButtons)

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    addToggleEvent(li);

    var newButton = document.createElement("BUTTON");
    var btnText = document.createTextNode("X");
    newButton.appendChild(btnText);
    addDeleteEvent(newButton);

    li.appendChild(newButton);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    } 
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.code === "Enter") {
        createListElement()
    } 
}

function toggleListElement() {
    if (this.hasAttribute("class")) {
        this.removeAttribute("class");
    } else {
        this.setAttribute("class", "done");
    }
}

function addToggleEvent(li) {
    li.addEventListener("click", toggleListElement);
}

function deleteButton() {
    console.log(this.parentNode)
    this.parentNode.remove();
}

function addDeleteEvent(btn) {
    btn.addEventListener("click", deleteButton);
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keydown", addListAfterKeyPress)
lis.forEach(addToggleEvent);
delButtons.forEach(addDeleteEvent);
// ul.children[0].addEventListener("click", toggleListElement)