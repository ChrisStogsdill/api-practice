const testImg = document.getElementById('update-image');
const searchInput = document.getElementById('search-text');
const updateButton = document.getElementById('update-button');

// create function for the update button

function updateGif(searchTerm) {
  // put search term in the fetch url
  const searchUrl = `https://api.giphy.com/v1/gifs/translate?api_key=iBwgR73ftQriwkNWYpchMJu2xCFI2sog&s=${searchTerm}`;

  fetch(searchUrl, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      //console.log(response.data.images.original.url);
      testImg.src = response.data.images.original.url;
    })
    .catch((err) => { alert(err); });
}

// add event listener for update button
updateButton.addEventListener('click', () => {
  updateGif(searchInput.value);
});

// add event listener for Enter Press as well
searchInput.addEventListener('keydown', (keyPress) => {
  if (keyPress.key === 'Enter') {
    updateGif(searchInput.value);
  }
});
