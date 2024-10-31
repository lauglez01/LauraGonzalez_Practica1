const divElements = document.querySelectorAll("div");

divElements[0].classList.add("container");
divElements[1].classList.add("search");
divElements[2].classList.add("li-container");
divElements[3].classList.add("empty");
divElements[4].classList.add("task-count");

const task = document.querySelector("input");
const buttonAdd = document.querySelector("button");
buttonAdd.classList.add('btn-add');
const taskList = document.querySelector(".li-container");
const emptyText = document.querySelector(".empty p");
let counter = 0;
const task_count = document.querySelectorAll(".task-count span");

buttonAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const newTaskList = document.createElement("li");
  const newTaskParagraph = document.createElement("p");
  const buttonDelete = document.createElement("button");
  buttonDelete.textContent = "x";
  buttonDelete.classList.add("btn-delete");
  const newTaskSpan = document.createElement("span");
  newTaskSpan.textContent = task.value;

  if (task.value != "") {
    newTaskParagraph.appendChild(newTaskSpan);
    newTaskList.appendChild(newTaskParagraph);
    newTaskList.appendChild(buttonDelete);
    taskList.appendChild(newTaskList);
    task.value = "";
    emptyText.textContent = "";
    counter++;
    task_count[1].textContent = counter;
  }

  function linethrough() {
    newTaskList.addEventListener("click", (e) => {
      //al hacer click, si el textDecoration es line-through, lo quita; si está a none, lo pone
        e.target.style.textDecoration =
        e.target.style.textDecoration === "line-through" ? "none" : "line-through";
    });
  }
  linethrough();

  buttonDelete.addEventListener("click", (e) => {
    //si pongo solo e.target.remove(), deja el newTaskList, por ello debo hacer parentElement, para que elimine el
    //elemento padre del boton
    e.target.parentElement.remove();
    counter--;
    task_count[1].textContent = counter;
    if (counter == 0) {
      emptyText.textContent = "You have no pending tasks.";
    }
  });
});