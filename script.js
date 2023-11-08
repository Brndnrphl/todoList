// Get the todoContainer and the buttons
const todoContainer = document.querySelector(".todoContainer");
const editBtn = document.querySelector(".editBtn");
const trashBtn = document.querySelector(".trashBtn");

// Check if scrollbar is present
function checkScrollbar() {
  if (todoContainer.scrollHeight > todoContainer.clientHeight) {
    // Scrollbar is present, adjust the buttons
    editBtn.style.right = "22px";
    trashBtn.style.right = "66px";
  } else {
    // Scrollbar is not present, reset the buttons
    editBtn.style.right = "12px";
    trashBtn.style.right = "56px";
  }
}

// Run the function initially
checkScrollbar();

// Run the function whenever the window is resized
window.addEventListener("resize", checkScrollbar);

function createTodoContainer() {
  // Create todoContainer div
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todoContainer");

  // Create newTodo div
  const newTodo = document.createElement("div");
  newTodo.classList.add("newTodo");

  // Create todoText paragraph
  const todoText = document.createElement("p");
  todoText.classList.add("todoText");

  // Create edit button
  const editBtn = document.createElement("img");
  editBtn.classList.add("editBtn");
  editBtn.src = "edit.png";
  editBtn.alt = "edit button";

  // Create trash button
  const trashBtn = document.createElement("img");
  trashBtn.classList.add("trashBtn");
  trashBtn.src = "trash.png";
  trashBtn.alt = "delete button";

  // Append elements
  newTodo.appendChild(todoText);
  newTodo.appendChild(editBtn);
  newTodo.appendChild(trashBtn);

  todoContainer.appendChild(newTodo);

  // Return finished todoContainer
  return todoContainer;
}

const newTodoContainer = createTodoContainer();
document.body.appendChild(newTodoContainer);
