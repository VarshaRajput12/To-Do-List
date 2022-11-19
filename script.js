const addBtn = document.getElementById("add_btn");

addBtn.addEventListener("click", addTask);

function addTask(e) {
  const currBtn = e.currentTarget;
  const currInput = currBtn.previousElementSibling;
  const currTask = currInput.value;

  if(currInput.value == ""){
    alert("Add item")
    

    return;
  }

  const newLi = document.createElement("li");
  // newLi.classList.add("list-group-item")
  newLi.className = "list-group-item";
  newLi.innerHTML = `<h3>${currTask}</h3> <button id="delete" onclick="deleteTask(this)">Delete</button>`;

  const parentUl = document.getElementById("parentUl");
  parentUl.appendChild(newLi);

  currInput.value = ""
}

function deleteTask(ele){
   ele.parentElement.remove();
}