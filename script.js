const prevButton = document.querySelector('.prev-button'); 
const nextButton = document.querySelector('.next-button');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');
slider.max = 2;


prevButton.addEventListener('click', (e) => {
    let currentValue = slider.value;
    currentValue = currentValue - (4 / images.length) < 0 ? 0 : currentValue - (4 / images.length);
    slider.value = currentValue;
    slider.dispatchEvent(new Event('input'));
  });
  
  nextButton.addEventListener('click', (e) => {
    let currentValue = slider.value;
    currentValue = currentValue + (4 / images.length) > 100 ? 100 : currentValue + (4 / images.length);
    slider.value = currentValue;
    slider.dispatchEvent(new Event('input'));
  });
  

slider.addEventListener('input', (e) => {
  const currentValue = e.target.value;
  const currentImage = currentValue % images.length;
  images.forEach((image) => {
    image.style.visibility = 'hidden';
  });
  images[currentImage].style.visibility = 'visible';
  slider.dispatchEvent(new Event('input'));
});



//search bar
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = document.querySelector("input").value;
  // Use the searchTerm to perform the search
});

const resultsContainer = document.getElementById("results-container");
resultsContainer.innerHTML = "";
data.forEach(result => {
    const resultEl = document.createElement("div");
    resultEl.innerHTML = result.title;
    resultsContainer.appendChild(resultEl);
});


//login button
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", () => {
  // Perform the login action
});


