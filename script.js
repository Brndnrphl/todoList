function createTodoContainer(paragraphContent) {
  // Create todoContainer div
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todoContainer");

  // Create newTodo div
  const newTodo = document.createElement("div");
  newTodo.classList.add("newTodo");

  // Create todoText paragraph
  const todoText = document.createElement("p");
  todoText.classList.add("todoText");
  todoText.innerText = paragraphContent;

  // Create edit button
  const editBtn = document.createElement("img");
  editBtn.classList.add("editBtn");
  editBtn.src = "assets/edit.png";
  editBtn.alt = "edit button";

  // Create trash button
  const trashBtn = document.createElement("img");
  trashBtn.classList.add("trashBtn");
  trashBtn.src = "assets/trash.png";
  trashBtn.alt = "delete button";

  // Create timestamp
  const timestamp = document.createElement("p");
  timestamp.classList.add("timestamp");
  const date = new Date();
  timestamp.innerText = `Created on ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;

  // Append elements
  newTodo.appendChild(todoText);
  newTodo.appendChild(editBtn);
  newTodo.appendChild(trashBtn);
  newTodo.appendChild(timestamp);
  todoContainer.appendChild(newTodo);

  // Trash Button functionality
  trashBtn.addEventListener("click", () => {
    todoContainer.style.animation = "popOut 0.5s ease forwards";
    setTimeout(() => todoContainer.remove(), 500);
  });

  // edit button functionality
  editBtn.addEventListener("click", () => {
    // Change to edit mode
    todoText.contentEditable = "true";
    todoText.focus();
    // Add blur event listener to keep todoText focused
    todoText.addEventListener("blur", function () {
      if (todoText.contentEditable === "true") {
        todoText.focus(); // refocus directly without setTimeout
      }
    });
    // Hide trash and edit button
    editBtn.style.display = "none";
    trashBtn.style.display = "none";
    // create confirm butotn
    const confirmBtn = document.createElement("img");
    confirmBtn.src = "assets/checkmark.png";
    confirmBtn.alt = "confirm button";
    confirmBtn.classList.add("confirmBtn");
    // create cancel button
    const cancelBtn = document.createElement("img");
    cancelBtn.src = "assets/cancel.png";
    cancelBtn.alt = "cancel button";
    cancelBtn.classList.add("cancelBtn");
    // append the cancel and confirm button
    newTodo.appendChild(cancelBtn);
    newTodo.appendChild(confirmBtn);
    // confirm button functionality
    confirmBtn.addEventListener("click", () => {
      todoText.onblur = null; // remove the blur event listener
      todoText.contentEditable = "false";
      confirmBtn.remove();
      cancelBtn.remove();
      editBtn.style.display = "block";
      trashBtn.style.display = "block";
    });
    // cancel button functionality
    let originalTodoText = todoText.innerText;

    cancelBtn.addEventListener("click", () => {
      todoText.innerText = originalTodoText;
      todoText.contentEditable = "false";
      // todoText.focus();
      confirmBtn.remove();
      cancelBtn.remove();
      editBtn.style.display = "block";
      trashBtn.style.display = "block";
      todoText.onblur = null;
    });
  });
  // Return finished todoContainer
  return todoContainer;
}

// create new todo event listener
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
let todoContainerWrapper = document.querySelector("#todoContainerWrapper");
todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Check if input is blank
  if (todoInput.value.trim() === "") {
    return; // Stop execution if input is blank
  }

  const newTodoContainer = createTodoContainer(todoInput.value);
  todoContainerWrapper.appendChild(newTodoContainer);
  todoInput.value = ""; // Clear the input field
});
