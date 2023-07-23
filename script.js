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
  
 
 // JavaScript code to generate and display the article cards dynamically
  document.addEventListener("DOMContentLoaded", function () {
    
    const articleData = [
      {
        title: "Article Title 1",
        date: "August 1, 2023",
        introductoryText: "Introductory text for Article 1...",
      },
      {
        title: "Article Title 2",
        date: "August 2, 2023",
        introductoryText: "Introductory text for Article 2...",
      },
      {
    title: 'Article Title 3',
    date: 'August 1, 2023',
    introductoryText: 'Introductory text for Article 3...'
  },
  {
    title: 'Article Title 4',
    date: 'August 5, 2023',
    introductoryText: 'Introductory text for Article 4...'
  },
  {
    title: 'Article Title 5',
    date: 'August 10, 2023',
    introductoryText: 'Introductory text for Article 5...'
  },
  {
    title: 'Article Title 6',
    date: 'August 15, 2023',
    introductoryText: 'Introductory text for Article 6...'
  },
  {
    title: 'Article Title 7',
    date: 'August 20, 2023',
    introductoryText: 'Introductory text for Article 7...'
  }
    ];
    
    

    if (!isMobileDevice()) {
       showCardDesktop(articleData, articleData.length);
   } else {
      showCardMobile(articleData, articleData.length);
   }
 });
       
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
 

function showCardDesktop(articleData, totalCards) {
  const articlesContainer = document.querySelector('.articles-container');
  let currentIndex = 0;
  const visibleCards = 1; // Number of visible cards at a time
  
  function createArticleCard(title, date, introductoryText) {
      const articleCard = document.createElement("div");
      articleCard.classList.add("article-card");

      const topReadDiv = document.createElement("div");
      topReadDiv.classList.add("top-read");
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      const topReadSpan = document.createElement("span");
      topReadSpan.textContent = "Top Read";
      topReadDiv.appendChild(starIcon);
      topReadDiv.appendChild(topReadSpan);

      const articleTitle = document.createElement("h3");
      articleTitle.textContent = title;

      const articleDate = document.createElement("span");
      articleDate.classList.add("article-date");
      articleDate.textContent = date;

      const introductoryTextElement = document.createElement("p");
      introductoryTextElement.textContent = introductoryText;

      const ellipsisSpan = document.createElement("span");
      ellipsisSpan.classList.add("ellipsis");
      ellipsisSpan.textContent = "...";
      introductoryTextElement.appendChild(ellipsisSpan);

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      const readNowBtn = document.createElement("button");
      readNowBtn.classList.add("read-now-btn");
      readNowBtn.textContent = "Read";
      buttonContainer.appendChild(readNowBtn);

      articleCard.appendChild(topReadDiv);
      articleCard.appendChild(articleTitle);
      articleCard.appendChild(articleDate);
      articleCard.appendChild(introductoryTextElement);
      articleCard.appendChild(buttonContainer);

      return articleCard;
    }



  for (const data of articleData) {
      const articleCard = createArticleCard(
         data.title,
         data.date,
         data.introductoryText
       );
      articlesContainer.appendChild(articleCard);
  }
    

  // Get the dynamically created article cards
  const articleCards = Array.from(document.querySelectorAll('.article-card'));

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

  // Add event listeners to arrow buttons
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  arrowRight.addEventListener('click', navigateCardRight);
  arrowLeft.addEventListener('click', navigateCardLeft);
  window.addEventListener('resize', resizeWindow);

  
  updateSelectedCard();
}

function showCardMobile(articleData, totalCards) {
  let currentIndex = 0;
  const articlesContainer = document.querySelector('.articles-container');
 
   //Function to create the article card element
    function createArticleCard(title, date, introductoryText) {
      const articleCard = document.createElement("div");
      articleCard.classList.add("article-card");

      const topReadDiv = document.createElement("div");
      topReadDiv.classList.add("top-read");
      const starIcon = document.createElement("i");
      starIcon.classList.add("fas", "fa-star");
      const topReadSpan = document.createElement("span");
      topReadSpan.textContent = "Top Read";
      topReadDiv.appendChild(starIcon);
      topReadDiv.appendChild(topReadSpan);

      const articleTitle = document.createElement("h3");
      articleTitle.textContent = title;

      const articleDate = document.createElement("span");
      articleDate.classList.add("article-date");
      articleDate.textContent = date;

      const introductoryTextElement = document.createElement("p");
      introductoryTextElement.textContent = introductoryText;

      const ellipsisSpan = document.createElement("span");
      ellipsisSpan.classList.add("ellipsis");
      ellipsisSpan.textContent = "...";
      introductoryTextElement.appendChild(ellipsisSpan);

      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      const readNowBtn = document.createElement("button");
      readNowBtn.classList.add("read-now-btn");
      readNowBtn.textContent = "Read";
      buttonContainer.appendChild(readNowBtn);

      articleCard.appendChild(topReadDiv);
      articleCard.appendChild(articleTitle);
      articleCard.appendChild(articleDate);
      articleCard.appendChild(introductoryTextElement);
      articleCard.appendChild(buttonContainer);

      return articleCard;
    }
    
articlesContainer.appendChild(createArticleCard(articleData[currentIndex].title, articleData[currentIndex].date, articleData[currentIndex].introductoryText));

updateSelectedCard();


function updateCardContent() {
    articlesContainer.innerHTML = ''; // Clear the current content

    // Create a new article card using the currentIndex
    articlesContainer.appendChild(
      createArticleCard(
        articleData[currentIndex].title,
        articleData[currentIndex].date,
        articleData[currentIndex].introductoryText
      )
    );

    updateSelectedCard(); // Update the selected card style
  }

  function navigateCardRight() {
    currentIndex = Math.min(currentIndex + 1, totalCards - 1);
    updateCardContent();
  }

  function navigateCardLeft() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCardContent();
  }

  function updateSelectedCard() {
    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
  }

  // Add event listeners to arrow buttons
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  arrowRight.addEventListener('click', navigateCardRight);
  arrowLeft.addEventListener('click', navigateCardLeft);
  

}


showMain();

