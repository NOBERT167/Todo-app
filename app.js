let itemList = document.getElementById("list");

//Adding todo items
document.querySelector(".add__btn").addEventListener("click", handleSubmit);
function handleSubmit() {
  //Getting new item from the form
  let newItem = document.getElementById("todo-item");
  newItem.classList.add("myItem");

  //Creating a list element
  let li = document.createElement("li");
  li.classList.add("list-items");
  li.appendChild(document.createTextNode(newItem.value));

  //Creating a delete button
  let del = document.createElement("button");
  del.appendChild(document.createTextNode("X"));
  del.className = "del";

  //Delete button
  del.addEventListener("click", deleteHandler);
  function deleteHandler() {
    if (confirm("Are you sure you want to delete?")) {
      li.parentNode.removeChild(li);
    }
  }

  //Appending delete button on the list element
  li.appendChild(del);

  //Appending li on the ul
  itemList.appendChild(li);

  closeFunc();
}
