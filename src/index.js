const testImg = document.getElementById('update-image');
const searchInput = document.getElementById('search-text');
const updateButton = document.getElementById('update-button');

// create function for the update button

async function updateGif(searchTerm) {
  // put search term in the fetch url
  try {
    const fetchRequest = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=iBwgR73ftQriwkNWYpchMJu2xCFI2sog&s=${searchTerm}`, { mode: 'cors' });
    const response = await fetchRequest.json();
    testImg.src = response.data.images.original.url;
  } catch (err) {
    console.log(err);
  }
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
