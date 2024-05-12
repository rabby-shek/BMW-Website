let toggleButton = document.querySelector(".menu-toggle");
toggleButton.addEventListener("click", handleToggleButton);

function handleToggleButton() {
  let nav = document.querySelector("nav");
  if (nav.classList.contains("show-nav")) {
    nav.classList.remove("show-nav");
  } else {
    nav.classList.add("show-nav");
  }
}

let heroSectionContent = document.querySelector(".hero-slider");
let heroSliderPrevButton = document.getElementById("hero-slider-prev-btn");
let heroSliderNextButton = document.getElementById("hero-slider-next-btn");
let heroSectionTitle = document.querySelector(".hero-content-title");
let count = 0;
const sliderImages = [
  "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=24XB&client=byo&paint=P0300&fabric=FKUSW&sa=S01ED,S02TF,S0302,S03AT,S03MB,S0420,S0459,S04AT,S04NW,S05A4,S05AC,S05AS,S05DM,S06AC,S06AK,S0775,S07HW,S09T5&quality=70&bkgnd=transparent&resp=png&angle=60&w=10000&h=10000&x=0&y=0",
  "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=24XY&client=byo&paint=P0300&fabric=FKUSW&sa=S01EG,S02TF,S0302,S0420,S0459,S04AT,S04NW,S05AC,S05AS,S05DM,S06AC,S06AK,S0760,S0775&quality=70&bkgnd=transparent&resp=png&angle=60&w=10000&h=10000&x=0&y=0",
  "https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=242V&client=byo&paint=P0300&fabric=FKCSW&sa=S0205,S024U,S0255,S0302,S0313,S03AG,S03MB,S0423,S0430,S0431,S0459,S0481,S0493,S04P3,S0508,S0534,S0544,S05AC,S05AS,S0676,S06AC,S06AK,S06C4,S06CP,S06U2,S0775,S07AC&date=20210706&quality=70&bkgnd=transparent&w=9800&h=8000&x=180&y=800&resp=png&angle=60",
];
const sliderTitle = ["X1 Suv", "X2 xDrive28i", "228i xDrive Gran"];

heroSectionContent.src = sliderImages[0];
heroSectionTitle.textContent = sliderTitle[0];

heroSliderNextButton.onclick = function () {
  count++;
  if (count >= sliderImages.length) {
    count = 0; // Reset count if it exceeds the number of images
  }
  // Update slider content
  heroSectionContent.src = sliderImages[count];
  heroSectionTitle.textContent = sliderTitle[count];
  animateDivs();
};

heroSliderPrevButton.onclick = function () {
  count--;
  if (count < 0) {
    count = sliderImages.length - 1; // Reset count if it exceeds the number of images
  }
  // Update slider content
  heroSectionContent.src = sliderImages[count];
  heroSectionTitle.textContent = sliderTitle[count];
  animateDivs();
};

function animateDivs() {
  let divs = document.querySelectorAll(".hero-bg div");
  divs.forEach((div) => {
    div.style.width = "0";
  });

  // Reset widths after animation
  setTimeout(() => {
    divs.forEach((div) => {
      div.style.width = "100px";
    });
  }, 500); // Adjust timing to match the transition duration
}
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrolled = window.scrollY > 100; // Change 100 to whatever scroll position you prefer
  header.classList.toggle("scrolled", scrolled);
});
