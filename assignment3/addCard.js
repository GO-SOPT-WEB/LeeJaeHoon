function loadFile(input) {
  let file = input.files[0];
  console.log(file);
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
  const book = {
    bookname: document.getElementById("bookname").value,
    hashtag: document.getElementById("hashtag").value,
    bookImg: document.getElementById("bookImg").value,
  };
  localStorage.setItem("book", JSON.stringify(book));

  location.href = "./bookstore.html";
}

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function () {
  submit();
});
// submitBtn.addEventListener("click", function () {
//   location.href = "./bookstore.html";
// });
