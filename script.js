const firstSneaker = document.querySelector(".first_sneaker");
const secondSneaker = document.querySelector(".second_sneaker");
const thirdSneaker = document.querySelector(".third_sneaker");
const fourthSneaker = document.querySelector(".fourth_sneaker");
const mainImage = document.querySelector(".image");
const previousButton = document.querySelector(".previous_button");
const nextButton = document.querySelector(".next_button");
const closeButton = document.querySelector(".close_button");
const firstPopSneaker = document.querySelector(".first_pop_sneaker");
const secondPopSneaker = document.querySelector(".second_pop_sneaker");
const thirdPopSneaker = document.querySelector(".third_pop_sneaker");
const fourthPopSneaker = document.querySelector(".fourth_pop_sneaker");
const poppedSneakerCollection = document.querySelector(".popped_sneaker_collection");
const sneakers = Array.from(poppedSneakerCollection.children);
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const slideSize = slides[0].getBoundingClientRect().width;
const modal = document.querySelector(".modal");
const minusButton = document.querySelector(".minus_button");
const additionButton = document.querySelector(".addition_button");
const addToCartButton = document.querySelector(".add_to_cart");
const zeroButton = document.querySelector(".zero_button");
const addToCart = document.querySelector(".add_to_cart");
const cartBox = document.querySelector(".cart_box");
const itemCount= document.querySelector(".items");
const cartIcon = document.querySelector(".cart_icon_reveal");
const deleteCart = document.querySelector(".delete_cart");
const filledCartBox = document.querySelector(".cart_box_filled");
const checkoutButton = document.querySelector(".checkout_button");
let sneakerQuantity = document.querySelector(".no_of_items");
let amountToPay = document.querySelector(".amount_to_pay");
let count = 0;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideSize * index + "px";
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

const increaseItems = () => {
    count+= 1;
    zeroButton.innerHTML = count;
}
const reduceItems = () => {
    const reduce = count;
    if (reduce != 0) {
        count-= 1;
    }
    zeroButton.innerHTML = reduce;
    itemCount.classList.remove("stash");
    itemCount.innerHTML = reduce;
    if (reduce === 0) {
        itemCount.classList.add("stash");
    }
}

const calculateCartItems = () => {
    sneakerQuantity.innerHTML = count;
    let price = 125.00 * sneakerQuantity.innerHTML;
    return price.toFixed(2);
}

additionButton.addEventListener("click", (increaseItems));
minusButton.addEventListener("click", (reduceItems));

addToCart.addEventListener("click", () => {
    if (count === 0) {
        itemCount.classList.add("stash");
    } else {
        itemCount.classList.remove("stash");
        itemCount.innerHTML = count;
        cartBox.classList.add("hidden");
        filledCartBox.classList.add("store");
    }
})

cartIcon.addEventListener("click", () => {
    filledCartBox.classList.remove("store");
    amountToPay.innerHTML = "= $" + calculateCartItems();
})

deleteCart.addEventListener("click", () => {
    filledCartBox.classList.add("store");
    cartBox.classList.remove("hidden");
    itemCount.classList.add("stash");
    zeroButton.innerHTML = "0";
    count = 0;
})

checkoutButton.addEventListener("click", () => {
    filledCartBox.classList.add("store");
    itemCount.classList.add("stash");
    zeroButton.innerHTML = "0";
    count = 0;
    cartBox.classList.add("hidden");
})
mainImage.addEventListener("click", () => {
    modal.style.visibility = "visible";
})
closeButton.addEventListener("click", () => {
    modal.style.visibility = "hidden";
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