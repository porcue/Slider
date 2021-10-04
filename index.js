const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const slides = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
let activeSlide = 0;
let slidesLength = mainSlide.querySelectorAll('div').length;
slides.style.top = `-${(slidesLength - 1)*100}vh`;


function changeSlide(dir) {
    if(dir === 'up'){
        activeSlide++;
        if(activeSlide === slidesLength){
            activeSlide = 0;
        }
    }else if(dir === 'down'){
        activeSlide--;
        console.log(activeSlide)
        if(activeSlide < 0){
            activeSlide = slidesLength - 1;
        }
    }

    const height = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;
    slides.style.transform = `translateY(${activeSlide * height}px)`;

}

upBtn.addEventListener('click', () => {
changeSlide('up');
})

downBtn.addEventListener('click', () => {
changeSlide('down');
})

