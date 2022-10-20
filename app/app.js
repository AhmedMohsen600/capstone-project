const featureSection = document.querySelector('.speak-group');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close');
const links = document.querySelectorAll('a');
const data = [
  {
    name: 'Ali Morshedlou',
    imgSrc: './images/speakers/ali-morshedlou.jpg',
    jobTitle: 'BEng. Computer Science',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'David Mumma',
    imgSrc: './images/speakers/david-mumma.jpg',
    jobTitle: 'BEng. Mechanical Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Gift Habeshaw',
    imgSrc: './images/speakers/gift-habeshaw.jpg',
    jobTitle: 'BEng. Food Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Christina Wocinte',
    imgSrc: './images/speakers/christina-wocintechchat.jpg',
    jobTitle: 'BEng. Civil Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Elin Tabitha',
    imgSrc: './images/speakers/elin-tabitha.jpg',
    jobTitle: 'BEng. Industrial Chemistry',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },

  {
    name: 'Juan Enclada',
    imgSrc: './images/speakers/juan-encalada.jpg',
    jobTitle: 'BEng. Electrical Engineering',
    about:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto praesentium commodi beatae',
  },
];

let htmlContent = ``;
data.forEach((item) => {
  htmlContent += `<li class="speaker">
    <div class="img-holder">
    <img
    class="cheese"
    src="./images/home/empty-chessboard-svgrepo-com.svg"
    alt=""
  />
    <img
      class="speaker-img"
      src=${item.imgSrc}
      alt=""
    />
  </div>
  <div class="speaker-info">
    <h4 class="speaker-name">${item.name}</h4>
    <p class="job-title">${item.jobTitle}</p>
    <div class="line"></div>
    <p class="about">
     ${item.about}
    </p>
  </div>
</li>`;

  featureSection.innerHTML = htmlContent;
});

burger.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
});

let url = window.location.href;
links.forEach((link) => {
  if (link.href === url) link.id = 'active-link';
});
