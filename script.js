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

firstSneaker.addEventListener("click", () => {
    firstSneaker.style.border = "2.5px solid var(--ORANGE)";
    mainImage.src = "./images/image-product-1.jpg";
})

secondSneaker.addEventListener("click", () => {
    secondSneaker.style.border = "2.5px solid var(--ORANGE)";
    mainImage.src = "./images/image-product-2.jpg";
})

thirdSneaker.addEventListener("click", () => {
    thirdSneaker.style.border = "2.5px solid var(--ORANGE)";
    mainImage.src = "./images/image-product-3.jpg";
})
fourthSneaker.addEventListener("click", () => {
    fourthSneaker.style.border = "2.5px solid var(--ORANGE)";
    mainImage.src = "./images/image-product-4.jpg";
})

previousButton.addEventListener("click", () => {

})
nextButton.addEventListener("click", () => {

})