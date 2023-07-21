// Function to check if the user is using a mobile device
    function isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Redirect to the mobile webpage if the user is on a mobile device
    if (isMobileDevice()) {
      // Define the URL of your mobile webpage
      const mobileWebpageURL = "https://denniscode.tech/mobile.html";

      // Redirect to the mobile webpage
      window.location.href = mobileWebpageURL;
    }

// Function to show the main container
function showMain() {
  const nameElement = document.getElementById('name');
  const professionElement = document.getElementById('profession');
  const mainContainer = document.querySelector('.main-container');
  const articleCards = document.querySelectorAll('.article-card');

  const name = 'Dennis Akpotaire';
  const profession = 'A Software Engineer';

  let index = 0;
  const typingDelay = 100; // Adjust typing speed (in milliseconds)

  function type() {
    if (index < name.length) {
      nameElement.textContent += name.charAt(index);
      index++;
      setTimeout(type, typingDelay);
    } else {
      professionElement.textContent = profession;
      mainContainer.style.display = 'block';
    }
  }

  type();
	// Set the initial selected card based on currentIndex
let currentIndex = 0;
const visibleCards = 1; // Number of visible cards at a time

function updateSelectedCard() {
  articleCards.forEach((card, index) => {
    if (index === currentIndex) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  });
}

function navigateCardRight() {
  currentIndex = Math.min(currentIndex + 1, articleCards.length - visibleCards);
  const cardWidth = articleCards[currentIndex].offsetWidth;
  articlesContainer.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
  updateSelectedCard();
}

function navigateCardLeft() {
  currentIndex = Math.max(currentIndex - 1, 0);
  const cardWidth = articleCards[currentIndex].offsetWidth;
  articlesContainer.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
  updateSelectedCard();
}

function resizeWindow() {
  const cardWidth = articleCards[currentIndex].offsetWidth;
  articlesContainer.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'auto'
  });
  updateSelectedCard();
}

// Define the articles container variable
const articlesContainer = document.querySelector('.articles-container');

// Add event listeners to arrow buttons
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

arrowRight.addEventListener('click', navigateCardRight);
arrowLeft.addEventListener('click', navigateCardLeft);
window.addEventListener('resize', resizeWindow);

  
 }

showMain();

