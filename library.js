let libraryContainer = document.getElementById("library-container");

let bookNameInput = document.getElementById("book");
let authorInput = document.getElementById("author");
let descriptionInput = document.getElementById("description");
let ownerInput = document.getElementById("owner");
let imgUrlInput = document.getElementById("imgUrl");

console.log(bookNameInput);

//enter new book
const formElem2 = document.querySelector("form");
console.log(formElem2);
formElem2.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();
  console.log("clicked");

  // construct a FormData object, which fires the formdata event
  let formData2 = new FormData(formElem2);
  let bookName = formData2.get("bookNameInput");
  let author = formData2.get("authorInput");
  let description = formData2.get("descriptionInput");
  let owner = formData2.get("ownerInput");
  let imgUrl = formData2.get("imgUrlInput");

  console.log(bookName, author, description, owner, imgUrl);

  formElem2.reset(); // Reset all form data
  return false; // Prevent page refresh
});

let library = [
  {
    "book-name": "Romeo and Juliet",
    author: "William Shakespeare",
    description:
      "Romeo and Juliet is a tragedy written by William Shakespeare early in his career about two young star-crossed lovers whose deaths ultimately reconcile their feuding families. It was among Shakespeare's most popular plays during his lifetime and along with Hamlet, is one of his most frequently performed plays.",
    owner: "Abc",
    "img-url":
      "https://rukminim1.flixcart.com/image/352/352/jeiukcw0/book/8/4/9/romeo-and-juliet-original-imaf36tfg9etxpkk.jpeg?q=70",
  },
  {
    "book-name": "ABC",
    author: "Abc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed ex tristique, congue urna non, sodales tellus",
    owner: "Abc",
    "img-url":
      "https://rukminim1.flixcart.com/image/352/352/jeiukcw0/book/8/4/9/romeo-and-juliet-original-imaf36tfg9etxpkk.jpeg?q=70",
  },
];

for (i = 0; i < library.length; i++) {
  let libraryBook = document.createElement("p");
  libraryBook.setAttribute("class", "book");
  libraryBook.innerHTML =
    "<b> Book name:</b>" +
    library[i]["book-name"] +
    "<br>" +
    "<b> Author name:</b>" +
    library[i]["author"] +
    "<br>" +
    "<b>Description:</b>" +
    library[i]["description"] +
    "<br>" +
    "<b>Owner:</b>" +
    library[i]["owner"] +
    "<br>" +
    "<b>Img url:</b> <img alt='book-img' src='" +
    library[i]["img-url"] +
    "'</img> <br>";
  libraryContainer.appendChild(libraryBook);
}
