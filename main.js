let inputfield = document.getElementById("input-field");
let inputbtn = document.getElementById("input-submit");
let ul = document.getElementById("items");
let togglebtn = document.getElementById("toggle-btn");

inputbtn.addEventListener("click", addItem);
togglebtn.addEventListener("click", togglediv);
//adding items to the ul
function addItem() {
  let item = inputfield.value;
  if (item === "") {
    return false;
  } else {
    var li = document.createElement("li"); //creating the li
    var text = document.createTextNode(item); //makes a node to add
    li.appendChild(text); //putting the text from the input field into the li
    ul.appendChild(li); //adding the li to the ul
    inputfield.value = "";
  }
}

//removing the li
function removeItem(e) {
  var target = e.target;
  if (target.tagName !== "LI") return;
  target.parentNode.removeChild(target);
}
ul.addEventListener("click", removeItem);

//show/hide the div
function togglediv() {
  if (ul.style.display !== "none") {
    ul.style.display = "none";
    togglebtn.innerHTML = "Show items";
  } else {
    ul.style.display = "block";
    togglebtn.innerHTML = "Hide items";
  }
}
