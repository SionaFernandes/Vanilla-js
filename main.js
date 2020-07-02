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

//forms
let formObject = {
  name: "",
  password: "",
  email: "",
  message: "",
};

let formDetails = document.getElementById("form-details");

const formElem = document.getElementById("form1");
formElem.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  let formData = new FormData(formElem);
  let name = formData.get("name");
  let password = formData.get("password");
  let email = formData.get("email");
  let message = formData.get("message");
  // console.log(name, password, email, message);

  formObject.name = name;
  formObject.password = password;
  formObject.email = email;
  formObject.message = message;
  // console.log(formObject);

  let uname = document.createElement("p");

  uname.innerHTML =
    "My name is " +
    name +
    "<br>" +
    "my email is" +
    email +
    "<br>" +
    "my password is" +
    password +
    "<br>" +
    "my message is" +
    message +
    "<br>";

  formDetails.appendChild(uname);

  formElem.reset(); // Reset all form data
  return false; // Prevent page refresh
});

//wrapping
let formDetails2 = document.getElementById("form-string");
let display = document.getElementById("string-wrap");
formDetails2.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  let formData = new FormData(formDetails2);
  let string = formData.get("string");

  let newstring = wrapChars(string);

  let text = document.createElement("p");
  text.innerHTML = newstring;

  display.appendChild(text);

  formDetails2.reset(); // Reset all form data
  return false; // Prevent page refresh
});

function wrapChars(str, tmpl) {
  return str.replace(/\w/g, tmpl || "<span class='animate'>$&</span>");
}
