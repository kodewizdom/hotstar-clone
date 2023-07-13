let movies = [
  {
    name:"ms.marvel",
    title:"Marvel . Superhero",
    des:"Kamala Khan,a Muslim American teen growing up in Jersey City,is a Superhero mega fan who discovers she has super powers.",
    image:"images/slider 2.png"
  },
  {
    name:"loki",
    title:"Superhero . U/A 13+ . Marvel",
    des:"The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of Avengers: Endgame.",
    image:"images/slider 1.png"
  },
  {
    name: "wanda vision",
    title:"Superhero . U/A 13+ . Marvel",
    des:"Wanda Maximoff and Vision-two super-powered beings living idealized suburban lives-begin to suspect that everything is not as it seems.",
    image: "images/slider 3.png"
  },
  {
    name: "raya and the last dragon",
    title:"Animation . UA 7+",
    des:"Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
    image: "images/slider 4.png"
  },
  {
    name: "luca",
    title:"Animation . UA 7+",
    des:"The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides",
    image: "images/slider 5.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // to track current slide index.

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // creating DOM element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let div = document.createElement("div");
  let p = document.createElement("p");
  

  // attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  div.appendChild(document.createTextNode(movies[slideIndex].title));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  // p.appendChild(document.createTextNode(movies[slideIndex].des2));
  content.appendChild(h1);
  content.appendChild(div);
  content.appendChild(p);
  // content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // setting up image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  // setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-top-title";
  div.className = "movie-title";
  p.className = "movie-des";
  // p.className = "movie-des2";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
 