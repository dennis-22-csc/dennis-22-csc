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
        title: "Creating a URL safehouse in Android",
        date: "June 29, 2023",
        introductoryText: "I was trying to open some links to the LinkedIn platform on some websites but the LinkedIn app kept crashing. I tried repeatedly to no avail.",
        link: 'https://denniscode.hashnode.dev/creating-a-url-safehouse-in-android'
      },
      {
        title: "Integrate reverse location search in your Android app (Flutter)",
        date: "July 4, 2023",
        introductoryText: "This tutorial teaches you how to implement getting the address location of users using their longitude and latitude information in your Android app in Flutter",
        link: 'https://denniscode.hashnode.dev/integrate-reverse-location-search-in-your-flutter-android-app'
      }
    ];
    
    const projectsData = [
  {
    name: "Collabio",
    description: 'An Upwork-like platform for collaborations between designers and developers. Easily find collaborators for your personal projects and projects to collaborate on.',
    video: 'https://youtube',
    feature: ['Firebase email authentication', 'Firebase email login', 
'Logging out', 'Creating and updating user profiles', 'Creating and publishing projects to the backend', 'Loading projects from the backend on app launch if signed in'],
    user_interface: ['Flutter'],
    server: ['Nginx', 'Gunicorn'],
    database: ['SQLite', 'MySQL'],
    trial: 'https://play.google',
    github: 'https://github.com'
  },
  {
    name: "ShareIt",
    description: "An Android app that users can store URLs in and easily retrieved later. Common use cases includes when a user is doing research and is encountering a lot of links that should be explored later. Another use case is when a user encounters an article, but can't afford to read it at that moment. Rather than letting it disappear into thin air, the user can share it to the app and easily retrieve it later.",
    video: 'https://youtube',
    feature: ['Implemented Android URL sharing Intent', 'Load URLs via RecyclerView', 'Swipe to delete URL', 'Long press to copy URL', 'Click to open URL in browser', 'Auto persist copied URL'],
    user_interface: ['XML'],
    server: [''],
    database: ['SQLite'],
    trial: 'https://play.google',
    github: 'https://github.com'
  },
  {
    name: "FashionHub",
    description: "A website for the purchase of fashion wears. This project is a portfolio project jointly created in the ALX software engineering program.",
    video: 'https://youtube',
    feature: ['Dynamically load images from a CDN', 'Dynamically create image containers', 'Search functionality', 'Filter functionality', 'Payment validation', 'Automated email using SMTP'],
    user_interface: ['HTML' ,'CSS', 'Javascript'],
    server: ['Nginx', 'Gunicorn'],
    database: ['MySQL'],
    trial: 'https://play.google',
    github: 'https://github.com'
  },
  {
    name: "T-Store",
    description: "An Android app for the purchase of airtime and data. The project has been put on hold. This is due to an issue with the backend VTU vendor.",
    video: 'https://youtube',
    feature: ['Creating grids of cards in Flutter', 'Creating a form in Flutter', 'Connecting to an external API in a server'],
    user_interface: ['Flutter'],
    server: ['Nginx', 'Gunicorn'],
    database: [''],
    trial: 'https://play.google',
    github: 'https://github.com'
  }
];

    populateProjects(projectsData);

    if (!isMobileDevice()) {
      showArticleCardDesktop(articleData, articleData.length);
    } else {
      showArticleCardMobile(articleData, articleData.length);
    }
  });
  
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => button.addEventListener('click', handleClick));
}

function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function createArticleCard(title, date, introductoryText, link) {
  const articleCard = document.createElement('div');
  articleCard.classList.add('article-card');
  articleCard.dataset.link = link;
  articleCard.addEventListener('click', handleReadNowClick);
  

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
  introductoryTextElement.classList.add("ellipsis");


  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  const readNowBtn = document.createElement('button');
  readNowBtn.classList.add('read-now-btn');
  readNowBtn.textContent = 'Read';
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

  function updateCardContent() {
    // Update the content of the current article card based on the currentIndex
    articleCard.querySelector('h3').textContent = articleData[currentIndex].title;
    articleCard.querySelector('.article-date').textContent = articleData[currentIndex].date;
    articleCard.querySelector('p').textContent = articleData[currentIndex].introductoryText;
    articleCard.dataset['link'] = articleData[currentIndex].link;
    
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

function navigateToProject(project) {
  // Convert the project object to JSON
  const projectJSON = JSON.stringify(project);

  // Encode the JSON string as a query parameter
  const queryParams = new URLSearchParams({ project: projectJSON }).toString();

  // Navigate to the target page with the query parameters
  window.open('https://denniscode.tech/project.html?' + queryParams, '_blank');
}

function handleReadNowClick(event) {
  const link = event.currentTarget.dataset.link;
  //const link = event.target.closest('.article-card').dataset.link;
  if (link) {
    window.open(link, '_blank');
  }
}

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");
  projectCard.onclick = function() {
    navigateToProject(project);
  };

  const heading = document.createElement("h3");
  heading.textContent = project.name;

  const description = document.createElement("p");
  description.textContent = project.description;
  description.classList.add("ellipsis");

  const link = document.createElement("a");
  link.href = '#';
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

function handleClick(event) {
  const button = event.currentTarget;
  const action = button.dataset.action;

  switch (action) {
    case 'mail':
      // Call the function to handle "Send a Mail"
      sendMail();
      break;
    case 'call':
      // Call the function to handle "Place a Call"
      placeCall();
      break;
    case 'github':
      // Call the function to handle "Connect on Github"
      connectOnGithub();
      break;
    case 'linkedin':
      // Call the function to handle "Connect on LinkedIn"
      connectOnLinkedIn();
      break;
    case 'whatsapp':
      // Call the function to handle "Connect on WhatsApp"
      connectOnWhatsApp();
      break;
  }
}

function sendMail() {
  const emailAddress = 'dennisthebusinessguru@gmail.com';
  const mailtoUrl = `mailto:${encodeURIComponent(emailAddress)}`;
  window.open(mailtoUrl, '_blank');
}

function placeCall() {
  const phoneNumber = "+2348105654558";
  const callUrl = `tel:${encodeURIComponent(phoneNumber)}`;
  window.open(callUrl, '_blank');
}

function connectOnGithub() {
 const githubUrl = 'https://github.com/dennis-22-csc';
 window.open(githubUrl, '_blank');
}

function connectOnLinkedIn() {
  const linkedinUrl = 'https://www.linkedin.com/in/dennis-koko-akpotaire';
  window.open(linkedinUrl, '_blank');
}

function connectOnWhatsApp() {
  const whatsappUrl = 'https://wa.me/2348105654558';
  window.open(whatsappUrl, '_blank');
}

/// Start the main content display
showMain();

