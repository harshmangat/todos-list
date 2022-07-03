let input = document.getElementById("userinput");
let btn = document.getElementById("enter");
let ul = document.getElementById("items");
let listItems = document.getElementsByTagName("li");

const inputLength = () => {
  return input.value.length;
};

function createListElement() {
  var li = document.createElement("li");
  var delButton = document.createElement("button");
  li.classList.add("taskClass");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.append(delButton);
  input.value = "";
  delButton.classList.add("delClass");
  delButton.innerHTML = "Delete";
}

const createListAfterClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
};

const createListAfterEnter = (event) => {
  if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
  }
};

const doneTask = (task) => {
  if (task.target.tagName === "LI") {
    task.target.classList.toggle("done");
  }
};

const deleteListElement = (element) => {
  if (element.target.className === "delClass") {
    element.target.parentElement.remove();
  }
};

const handleUlClick = (element) => {
  doneTask(element);
  deleteListElement(element);
};

ul.addEventListener("click", handleUlClick);
btn.addEventListener("click", createListAfterClick);
input.addEventListener("keypress", createListAfterEnter);
