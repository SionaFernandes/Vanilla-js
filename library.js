let libraryContainer = document.getElementById("library-container");

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

//enter new book
const formElem2 = document.querySelector("form");
formElem2.addEventListener("submit", (e) => {
  // on form submission, prevent default
  e.preventDefault();

  // construct a FormData object, which fires the formdata event
  let formData2 = new FormData(formElem2);
  let bookName = formData2.get("book");
  let author = formData2.get("author");
  let description = formData2.get("description");
  let owner = formData2.get("owner");
  let imgUrl = formData2.get("imgUrl");
  if (imgUrl === "") {
    imgUrl =
      "data:image/jpeg;base64,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";
  }

  library.push({
    "book-name": bookName,
    author: author,
    description: description,
    owner: owner,
    "img-url": imgUrl,
  });

  printLibrary();

  formElem2.reset(); // Reset all form data

  return false; // Prevent page refresh
});

function printLibrary() {
  libraryContainer.innerHTML = " ";
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
}

printLibrary();
