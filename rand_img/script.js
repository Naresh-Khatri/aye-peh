let imageElement = document.querySelector(".main_img");

function updateImage() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      imageElement.src = data[0].url;
    });
}

updateImage()

// challege 2

//make the 'Next Photo' button work
