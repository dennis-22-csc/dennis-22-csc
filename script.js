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
  document.addEventListener('DOMContentLoaded', function () {
    const articleData = [
      {
        id: '1',
        title: "Article Title 1",
        date: "August 1, 2023",
        introductoryText: "Introductory text for Article 1...",
        link: 'http'
      },
      {
        id: '2',
        title: "Article Title 2",
        date: "August 2, 2023",
        introductoryText: "Introductory text for Article 2...",
        link: 'hffp'
      },
      {
        id: '3',
        title: 'Article Title 3',
    	date: 'August 1, 2023',
    	introductoryText: 'Introductory text for Article 3...', 
    	link: 'hmmp'
      },
      {
        id: '4',
    	title: 'Article Title 4',
    	date: 'August 5, 2023',
    	introductoryText: 'Introductory text for Article 4...', 
    	link: 'hssp'
      },
      {
        id: '5',
    	title: 'Article Title 5',
    	date: 'August 10, 2023',
    	introductoryText: 'Introductory text for Article 5...', 
    	link: 'hbbp'
      },
      {
        id: '6',
    	title: 'Article Title 6',
    	date: 'August 15, 2023',
    	introductoryText: 'Introductory text for Article 6...', 
    	link: 'hqqp'
      },
      {
        id: '7',
    	title: 'Article Title 7',
    	date: 'August 20, 2023',
    	introductoryText: 'Introductory text for Article 7...', 
    	link: 'hccp'
      }
    ];
    
    const projectsData = [
  {
    name: "Project 1",
    description: "A project about...",
    link: 'http',
  },
  {
    name: "Project 2",
    description: "A project about...",
    link: "hccp",
  },
  {
    name: "Project 3",
    description: "A project about...",
    link: "hmmp",
  },
  {
    name: "Project 4",
    description: "A project about...",
    link: "hnnp",
  },
  {
    name: "Project 5",
    description: "A project about...",
    link: "hqqp",
  },
  
];

    populateProjects(projectsData);

    if (!isMobileDevice()) {
      showArticleCardDesktop(articleData, articleData.length);
    } else {
      showArticleCardMobile(articleData, articleData.length);
    }
  });
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function createArticleCard(title, date, introductoryText, link) {
  const articleCard = document.createElement('div');
  articleCard.classList.add('article-card');

  const topReadDiv = document.createElement('div');
  topReadDiv.classList.add('top-read');
  const starIcon = document.createElement('i');
  starIcon.classList.add('fas', 'fa-star');
  const topReadSpan = document.createElement('span');
  topReadSpan.textContent = 'Top Read';
  topReadDiv.appendChild(starIcon);
  topReadDiv.appendChild(topReadSpan);

  const articleTitle = document.createElement('h3');
  articleTitle.textContent = title;

  const articleDate = document.createElement('span');
  articleDate.classList.add('article-date');
  articleDate.textContent = date;

  const introductoryTextElement = document.createElement('p');
  introductoryTextElement.textContent = introductoryText;

  const ellipsisSpan = document.createElement('span');
  ellipsisSpan.classList.add('ellipsis');
  ellipsisSpan.textContent = '...';
  introductoryTextElement.appendChild(ellipsisSpan);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  const readNowBtn = document.createElement('button');
  readNowBtn.classList.add('read-now-btn');
  readNowBtn.textContent = 'Read';
  readNowBtn.dataset.link = link;
  readNowBtn.addEventListener('click', handleReadNowClick);
  buttonContainer.appendChild(readNowBtn);

  articleCard.appendChild(topReadDiv);
  articleCard.appendChild(articleTitle);
  articleCard.appendChild(articleDate);
  articleCard.appendChild(introductoryTextElement);
  articleCard.appendChild(buttonContainer);

  return articleCard;
}

function showArticleCardDesktop(articleData, totalCards) {
  const articlesContainer = document.querySelector('.articles-container');
  let currentIndex = 0;
  const visibleCards = 1; // Number of visible cards at a time

  for (const data of articleData) {
    const articleCard = createArticleCard(data.title, data.date, data.introductoryText, data.link);
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

function showArticleCardMobile(articleData, totalCards) {
  let currentIndex = 0;
  const articlesContainer = document.querySelector('.articles-container');
  let articleCard;

  articleCard = createArticleCard(articleData[currentIndex].title, articleData[currentIndex].date, articleData[currentIndex].introductoryText, articleData[currentIndex].link);
  articlesContainer.appendChild(articleCard); // Add the card to the DOM

  articleCard.classList.add('selected');

  function updateCardContent() {
    // Update the content of the current article card based on the currentIndex
    articleCard.querySelector('h3').textContent = articleData[currentIndex].title;
    articleCard.querySelector('.article-date').textContent = articleData[currentIndex].date;
    articleCard.querySelector('p').textContent = articleData[currentIndex].introductoryText;
    articleCard.querySelector('.read-now-btn').dataset.link = articleData[currentIndex].link;
    
    articleCard.classList.add('selected');
  }

  function navigateCardRight() {
    currentIndex = Math.min(currentIndex + 1, totalCards - 1);
    updateCardContent();
  }

  function navigateCardLeft() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCardContent();
  }

  // Add event listeners to arrow buttons
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  arrowRight.addEventListener('click', navigateCardRight);
  arrowLeft.addEventListener('click', navigateCardLeft);
}

function navigateToProject(projectLink) {
  alert("Navigating to project with link: " + projectLink);
}

function handleReadNowClick(event) {
  const link = event.target.dataset.link;
  alert("Navigating to article with link: " + link);
}

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectCard.onclick = function() {
    navigateToProject(project.link);
  };

  const heading = document.createElement("h3");
  heading.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.href = '#';
  link.id = project.link;
  link.classList.add("view-link");
  link.textContent = "View";
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });

  const linkWrapper = document.createElement("p");
  linkWrapper.appendChild(link);

  projectCard.appendChild(heading);
  projectCard.appendChild(description);
  projectCard.appendChild(linkWrapper);

  return projectCard;
}

function populateProjects(projectData) {
  const projectsContainer = document.querySelector(".projects-container");

  projectData.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}


// Start the main content display
showMain();

