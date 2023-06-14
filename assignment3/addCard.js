function loadFile(input) {
  let file = input.files[0];

  let newImage = document.createElement("img");
  newImage.setAttribute("class", "img");
  newImage.src = URL.createObjectURL(file);
  newImage.style.width = "100px";
  newImage.style.height = "100px";

  newImage.style.objectFit = "contain";
  let container = document.getElementById("showImg");
  container.appendChild(newImage);
}

let imgInput = document.querySelector(".imgInput");
imgInput.addEventListener("change", function () {
  loadFile(this);
});

function submit() {
  const book = [];
  const bookname = document.getElementById("bookname").value;
  const hashtag = document.getElementById("hashtag").value;
  const bookImg = document.getElementById("bookImg").value;
  const category = document.getElementById("category").value;

  book.push(bookname);
  book.push(category);
  book.push(hashtag);
  book.push(bookImg);

  localStorage.setItem("book", JSON.stringify(book));

  location.href = "./bookstore.html";
}

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function () {
  submit();
});
