const slides = document.querySelectorAll('.slide');
let counter = 0;

// Position each slide next to each other
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Go to the previous slide
const goPrevious = () => {
    if (counter > 0) {
        counter--;
    } else {
        counter = slides.length - 1; // Loop to the last slide if at the first slide
    }
    slideImage();
};

// Go to the next slide
const goNext = () => {
    if (counter < slides.length - 1) {
        counter++;
    } else {
        counter = 0; // Loop back to the first slide if at the last slide
    }
    slideImage();
};

// Apply sliding effect by translating the slides
const slideImage = () => {
    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};
