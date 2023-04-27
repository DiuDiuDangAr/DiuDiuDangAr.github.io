// gallery.js
const vertical_images = [
"https://drive.google.com/uc?export=view&id=1qZYgwOo4ZIlxCrZChH9q7n_sAWFICM_t",
"https://drive.google.com/uc?export=view&id=1EtRDTcuEOuRD6NCM6IbnCuQMAsEhtNJP"
];

// Array of image URLs
const horizontal_images = [
    "https://drive.google.com/uc?export=view&id=1f8Ym0CsdBy-nUylKrdbozd7VVU1_SLTz",
    "https://drive.google.com/uc?export=view&id=1-1YXlYHbTozzReCAwn01R0bd83KiCTCD",
    "https://drive.google.com/uc?export=view&id=1RWWIXSeuhwAu2Xoam7iHm7MJ94wXfQyT"
	// and so on...
];

// Shuffle the array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Generate a random number between min and max (inclusive)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Generate a random size for the image between 100 and 300 pixels (width)
function generateSizeHorizontal() {
  return randomInt(250, 320);
}

function generateSizeVertical() {
    return randomInt(110, 190);
  }

// Create the gallery
function createGallery() {
  // Shuffle the array of horizontal_images
  shuffle(horizontal_images);
  shuffle(vertical_images);

  // Get the gallery element
  const gallery = document.querySelector('.gallery');

  // Loop through each image URL and create an image element
  for (let i = 0, v = 0, h = 0; i < horizontal_images.length + vertical_images.length; i++) {
    // Create the image element
    const img = document.createElement('img');

    if(Math.random() > 0.5 && h < horizontal_images.length){
        img.src = horizontal_images[h++];
        img.width = generateSizeHorizontal();
    }
    else{
        img.src = vertical_images[v++];
        img.width = generateSizeVertical();
    }
    
    // Append the image element to the gallery
    gallery.appendChild(img);
  }
}

// Call the createGallery function to generate the gallery
createGallery();
