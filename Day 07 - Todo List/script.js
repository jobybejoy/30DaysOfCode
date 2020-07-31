const addTodoButtonEl = document.querySelector("#addTodoBtn");
const todoItemEl = document.querySelector(".todo__input");

const todoListEl = document.querySelector(".todo__list");

let todoList = [];

addTodoButtonEl.addEventListener("click", (e) => {
  addTodo(todoItemEl.value.trim());
  todoItemEl.value = "";
  todoItemEl.focus();
});
window.addEventListener("keyup", function (e) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addTodoButtonEl.click();
  }
});

function addTodo(text) {
  const todo = {
    id: Date.now(),
    text,
    complete: false,
  };

  if (text !== "") {
    todoList.push(todo);
  }

  displayTodo(todo);
}

function displayTodo(todo) {
  // removeAllTodos();

  // const html = todoList
  //   .map((todo) => {
  //     // return `<div class="todo__item" id="${todo.id}">${todo.text}<input type="checkbox" name="todoComplete" id="${todo.id}" /></div>`;
  //     return `<div class="todo__item" id="${todo.id}">${
  //       todo.complete ? `<strike>${todo.text}</strike>` : `${todo.text}`
  //     }</div>`;
  //   })
  //   .join("");

  const item = document.querySelector(`[data-id='${todo.id}']`);

  const btn = `<button class="todo__button todo--delete"><img src="./images/delete-24px.svg"/></button>`;

  const todo__item = document.createElement("div");
  todo__item.classList.add("todo__item");

  todo__item.setAttribute("data-id", todo.id);
  todo__item.setAttribute("data-completed", todo.complete);

  todo__item.innerHTML = todo.complete
    ? `<strike>${todo.text}</strike>${btn}`
    : `${todo.text}${btn}`;

  if (item) {
    todoListEl.replaceChild(todo__item, item);
  } else {
    todoListEl.append(todo__item);
  }
}

function deleteTodo(id) {
  const item = document.querySelector(`[data-id='${id}']`);
  item.remove();

  const index = todoList.findIndex((item) => item.id === Number(id));
  todoList.pop(index);

  console.log(todoList);
}

function removeAllTodos() {
  const todoItems = document.querySelectorAll(".todo__item");
  todoItems.forEach((item) => item.remove());
}

function toggleTodoComplete(id) {
  const index = todoList.findIndex((item) => item.id === Number(id));

  todoList[index].complete = !todoList[index].complete;
  displayTodo(todoList[index]);
}

todoListEl.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.classList.contains("todo__item")) {
    const id = e.target.dataset.id;
    toggleTodoComplete(id);
  }

  if (e.target.classList.contains("todo--delete")) {
    const id = e.target.parentElement.dataset.id;
    console.log("Deleting ", id);
    deleteTodo(id);
  }
});
