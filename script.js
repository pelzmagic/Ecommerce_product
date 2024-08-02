const firstSneaker = document.querySelector(".first_sneaker");
const secondSneaker = document.querySelector(".second_sneaker");
const thirdSneaker = document.querySelector(".third_sneaker");
const fourthSneaker = document.querySelector(".fourth_sneaker");
const mainImage = document.querySelector(".image");
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const previousButton = document.querySelector(".previous_button");
const nextButton = document.querySelector(".next_button");
const closeButton = document.querySelector(".close_button");
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
const firstPopSneaker = document.querySelector(".first_pop_sneaker");
const secondPopSneaker = document.querySelector(".second_pop_sneaker");
const thirdPopSneaker = document.querySelector(".third_pop_sneaker");
const fourthPopSneaker = document.querySelector(".fourth_pop_sneaker");
const poppedSneakerCollection = document.querySelector(".popped_sneaker_collection");
const sneakers = Array.from(poppedSneakerCollection.children);

console.log(sneakers);

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);

firstSneaker.addEventListener("click", () => {
    secondSneaker.classList.remove("current_sneaker");
    thirdSneaker.classList.remove("current_sneaker");
    fourthSneaker.classList.remove("current_sneaker");
    firstSneaker.classList.add("current_sneaker");
    mainImage.src = "./images/image-product-1.jpg";
})

secondSneaker.addEventListener("click", () => {
    firstSneaker.classList.remove("current_sneaker");
    thirdSneaker.classList.remove("current_sneaker");
    fourthSneaker.classList.remove("current_sneaker");
    secondSneaker.classList.add("current_sneaker");
    mainImage.src = "./images/image-product-2.jpg";
})

thirdSneaker.addEventListener("click", () => {
    firstSneaker.classList.remove("current_sneaker");
    secondSneaker.classList.remove("current_sneaker");
    fourthSneaker.classList.remove("current_sneaker");
    thirdSneaker.classList.add("current_sneaker");
    mainImage.src = "./images/image-product-3.jpg";
})
fourthSneaker.addEventListener("click", () => {
    firstSneaker.classList.remove("current_sneaker");
    secondSneaker.classList.remove("current_sneaker");
    thirdSneaker.classList.remove("current_sneaker");
    fourthSneaker.classList.add("current_sneaker");
    mainImage.src = "./images/image-product-4.jpg";
})

nextButton.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current_slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove("current_slide");
    nextSlide.classList.add("current_slide");
})

previousButton.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current_slide");
    const previousSlide = currentSlide.previousElementSibling;
    const amountToMove = previousSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove("current_slide");
    previousSlide.classList.add("current_slide");
})

firstPopSneaker.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current_slide");
    const currentSneaker = poppedSneakerCollection.querySelector(".current-slide");
    const targetSlide = slides[0];
    const amountToMove = targetSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove("current_slide");
    targetSlide.classList.add("current_slide");

    currentSneaker.classList.remove("current-slide");
    firstPopSneaker.classList.add("current-slide");
})

secondPopSneaker.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current_slide");
    const currentSneaker = poppedSneakerCollection.querySelector(".current-slide");
    const targetSlide = slides[1];
    const amountToMove = targetSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove("current_slide");
    targetSlide.classList.add("current_slide");

    currentSneaker.classList.remove("current-slide");
    secondPopSneaker.classList.add("current-slide");
})

thirdPopSneaker.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current_slide");
    const currentSneaker = poppedSneakerCollection.querySelector(".current-slide");
    const targetSlide = slides[2];
    const amountToMove = targetSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove("current_slide");
    targetSlide.classList.add("current_slide");

    currentSneaker.classList.remove("current-slide");
    thirdPopSneaker.classList.add("current-slide");
})

fourthPopSneaker.addEventListener("click", () => {
    const currentSlide = track.querySelector(".current_slide");
    const currentSneaker = poppedSneakerCollection.querySelector(".current-slide");
    const targetSlide = slides[3];
    const amountToMove = targetSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove("current_slide");
    targetSlide.classList.add("current_slide");

    currentSneaker.classList.remove("current-slide");
    fourthPopSneaker.classList.add("current-slide");
})