var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var toDoText = document.createTextNode(itemText);
  toDoItem.appendChild(toDoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
  var itemText = toDoEntryBox.value.trim();
  if (itemText !== "") {
    newToDoItem(itemText, false);
    toDoEntryBox.value = "";
  }
}

function toggleToDoItemState() {
  this.classList.toggle("completed");
}

function clearCompletedToDoItems() {
  var completedItems = toDoList.getElementsByClassName("completed");
  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function emptyList() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  }
}

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"

var toDoInfo = {
  task: "Thing I need to do",
  completed: false,
};

function saveList() {
  var toDos = [];
  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children[i];
    var toDoInfo = {
      task: toDo.innerText,
      completed: toDo.classList.contains("completed"),
    };
    toDos.push(toDoInfo);
  }
  localStorage.setItem("toDos", JSON.stringify(toDos));
  console.log("masuk kesini yaa");
}

function loadList() {
  if (localStorage.getItem("toDos") != null) {
    var toDos = JSON.parse(localStorage.getItem("toDos"));
    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      newToDoItem(toDo.task, toDo.completed);
    }
  }
}

loadList();
