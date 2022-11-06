const imageElement = document.querySelector(".main_img");
const nextBtn = document.querySelector("#next_btn");

function updateImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      imageElement.src = data[0].url;
    });
}

updateImage();

nextBtn.addEventListener("click", updateImage);
