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
