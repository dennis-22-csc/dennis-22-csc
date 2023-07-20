const nameElement = document.getElementById('name');
const professionElement = document.getElementById('profession');
const introContainer = document.querySelector('.intro-container');
const bioContainer = document.querySelector('.bio-container');
const statsContainer = document.querySelector('.stats-container');
const articlesContainer = document.querySelector('.articles-container');
const buttonsContainer = document.querySelector('.buttons-container');

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
    setTimeout(showBio, 1000);
  }
}

function showBio() {
  bioContainer.style.display = 'block';
  setTimeout(showStat, 1000);
}
function showStat() {
  statsContainer.style.display = 'block';
}
function showProject() {
  introContainer.style.display = 'block';
  bioContainer.style.display = 'block';
  statsContainer.style.display = 'block';
  articlesContainer.style.display = 'block';
  buttonsContainer.style.display = 'block';
}
function showArticle() {
  introContainer.style.display = 'block';
  bioContainer.style.display = 'block';
  statsContainer.style.display = 'block';
  articlesContainer.style.display = 'block';
  buttonsContainer.style.display = 'block';
}
function showButton() {
  introContainer.style.display = 'block';
  bioContainer.style.display = 'block';
  statsContainer.style.display = 'block';
  articlesContainer.style.display = 'block';
  buttonsContainer.style.display = 'block';
}

type();

