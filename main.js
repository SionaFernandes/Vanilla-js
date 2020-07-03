const inputfield = document.getElementById("input-field");
const inputbtn = document.getElementById("input-submit");
const ul = document.getElementById("items");
const togglebtn = document.getElementById("toggle-btn");
const formDetails = document.getElementById("form-details");
const formElem = document.getElementById("form1");
const formDetails2 = document.getElementById("form-string");
const display = document.getElementById("string-wrap");

//forms
let formObject = {
  name: "",
  password: "",
  email: "",
  message: "",
};

inputbtn.addEventListener("click", addItem);
togglebtn.addEventListener("click", togglediv);
//adding items to the ul
addItem = () => {
  let item = inputfield.value;
  if (item === "") {
    return false;
  } else {
    let li = document.createElement("li"); //creating the li
    let text = document.createTextNode(item); //makes a node to add
    li.appendChild(text); //putting the text from the input field into the li
    ul.appendChild(li); //adding the li to the ul
    inputfield.value = "";
  }
};

//removing the li
removeItem = (e) => {
  let target = e.target;
  if (target.tagName !== "LI") return;
  target.parentNode.removeChild(target);
};
ul.addEventListener("click", removeItem);

//show/hide the div
togglediv = () => {
  if (ul.style.display !== "none") {
    ul.style.display = "none";
    togglebtn.innerHTML = "Show items";
  } else {
    ul.style.display = "block";
    togglebtn.innerHTML = "Hide items";
  }
};

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

formDetails2.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  let formData = new FormData(formDetails2);
  let string = formData.get("string");

  let newstring = wrapChars(string);

  let text = document.createElement("p");
  text.setAttribute("class", "span-area");
  text.innerHTML = newstring;

  let spans = text.getElementsByTagName("span");
  display.appendChild(text);

  for (let i = 0; i < spans.length; i++) {
    animate(i);
  }
  function animate(i) {
    setTimeout(function () {
      console.log(i, spans[i]);
      spans[i].classList.add("animate");
    }, 600 * i);
  }

  formDetails2.reset(); // Reset all form data
  return false; // Prevent page refresh
});

wrapChars = (str, tmpl) => {
  return str.replace(/\w/g, tmpl || "<span>$&</span>");
};
