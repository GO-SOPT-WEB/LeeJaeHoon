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
  // let bookname=document.getElementById("bookname").value;
  // let hashtag=document.getElementById("hashtag").value;
  // let bookImg=document.getElementById("hashtag").value;

  const book = {
    bookname: document.getElementById("bookname").value,
    hashtag: document.getElementById("hashtag").value,
    bookImg: document.getElementById("hashtag").value,
  };
  localStorage.setItem("book", book);
}

let submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", function () {
  submit();
});
