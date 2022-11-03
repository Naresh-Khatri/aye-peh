let imageElement = document.querySelector(".main_img");

function updateImage() {
  fetch(
    "https://api.unsplash.com/photos/random/?client_id=c4rKmt5cuIUImWU0AUBsOlLwMutHjeQGo6gRjzUZlpk"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      imageElement.src = data.urls.regular;
    });
}

updateImage()

// challege 2

//make the 'Next Photo' button work