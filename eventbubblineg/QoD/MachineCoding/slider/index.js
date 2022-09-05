// there is some problem in it so it's not working
const sliders=document.querySelectorAll(".slider");
const dots=document.querySelectorAll(".dot");
const nextBtn=document.querySelector(".carousel-btn.btn-left");
const prevBtn=document.querySelector(".carousel-btn.btn-left");
let currentSlideIndex=0;

sliders.forEach((slide,index)=>{
    slide.style.transform=`translateX (${100 * index} %)`;
});

const updateSlider=(currentSlide,nextSlide)=>{
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
}

const updateDots=(currentDot, newDot)=> {
  currentDot.classList.remove("current-slide");
  newDot.classList.add("current-slide");
}
const getCurrentSlide=()=> {
  return document.querySelector(".current-slide");
}
const getCurrentDot=()=>{
    return document.querySelector(".dots-navigation").querySelector(".current-slide");
}
const moveSlides=(currentSlideIndex)=>{
    sliders.forEach((slide,index)=>{slide.style.transform=`translateX (${100* (index-currentSlideIndex)}%)`});
}
nextBtn.addEventListener("click", () => {
    console.log("clicked");
  currentSlideIndex =
    currentSlideIndex === sliders.length - 1 ? 0 : currentSlideIndex + 1;
  const currentSlide = getCurrentSlide();
  const currentDot = getCurrentDot();
  const newDot = currentDot.nextElementSibling;
  const nextSlide = currentSlide.nextElementSibling;
  nextSlide ?? updateCurrentSlide(currentSlide, nextSlide);
  newDot ? updateDots(currentDot, newDot) : updateDots(currentDot, dots[0]);
  sliders.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlideIndex)}%)`;
  });
});

prevBtn.addEventListener("click", () => {
  currentSlideIndex =
    currentSlideIndex === 0 ? sliders.length - 1 : currentSlideIndex - 1;
  const currentSlide = getCurrentSlide();
  const currentDot = getCurrentDot();
  const newDot = currentDot.previousElementSibling;

  newDot
    ? updateDots(currentDot, newDot)
    : updateDots(currentDot, dots[dots.length - 1]);
  const newSlide = currentSlide?.previousElementSibling;
  newSlide && updateCurrentSlide(currentSlide, newSlide);
  moveSlides(currentSlideIndex);
});

dots.forEach((dot, index) => {
  let clickedDotIndex = index;
  dot.addEventListener("click", () => {
    moveSlides(clickedDotIndex);
    updateCurrentSlide(sliders[currentSlideIndex], sliders[clickedDotIndex]);
    const currentDot = getCurrentDot();
    updateDots(currentDot, dot);
  });
});
