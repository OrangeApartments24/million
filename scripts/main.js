
const payments = document.querySelectorAll('.credit__infographic-grid-el');
const buttonNextSlide = document.querySelector('.self__slider-arrow_direction_right');
const buttonPrevSlide = document.querySelector('.self__slider-arrow_direction_left');
const slides = document.querySelectorAll('.self__slider-image');
const sliderCaption = document.querySelector('.self__slider-caption');

const faqItems = document.querySelectorAll('.faq__item');

let sliderIndex = 0;

setInterval(() => {

    this.index = this.index || Math.floor(Math.random() * payments.length) + 1;
    payments.forEach((el, i) => {
        if(i === index) {
            el.classList.add('credit__infographic-grid-el_selected');
        } else {
            el.classList.remove('credit__infographic-grid-el_selected');
        }
    })
    this.index = Math.floor(Math.random() * payments.length) + 1;

}, 2000);

const updateCaption = () => {
    sliderCaption.textContent = slides[sliderIndex].getAttribute('alt');
    sliderCaption.href = slides[sliderIndex].getAttribute('data-url');
}

updateCaption();

const moveSlide = (direction) => {
    if(direction === 'next') { sliderIndex += 1; };
    if(direction === 'prev') { sliderIndex -= 1;};
    if(sliderIndex >= slides.length) {
        sliderIndex = 0;
    }
    if(sliderIndex <= 0) { sliderIndex = 0; };

    const slideWidth = slides[0].offsetWidth;
    
    slides.forEach((el) => {
        el.style.transform = `translate(-${sliderIndex * slideWidth}px)`;
    })

    updateCaption();

}

buttonNextSlide.addEventListener('click', () => moveSlide('next'));

buttonPrevSlide.addEventListener('click', () => moveSlide('prev'));

faqItems.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('faq__item_opened');
        e.currentTarget.querySelector('.faq__item-text').classList.toggle('faq__item-text_opened');
    })
})