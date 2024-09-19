
// slider section

const slider = document.getElementById('productSlider');
const images = document.querySelectorAll('.slider-image');
let currentIndex = 0;


function changeImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}


document.getElementById('next').addEventListener('click', changeImage);
document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1;
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});


setInterval(() => {
    changeImage();
}, 3000);


// faq 
document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.toggle-btn');

    faqButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = document.querySelector(this.getAttribute('data-bs-target'));
            const expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
            this.textContent = !expanded ? '-' : '+';
        });

        const target = document.querySelector(button.getAttribute('data-bs-target'));
        
        target.addEventListener('shown.bs.collapse', () => {
            button.textContent = '-';
        });

        target.addEventListener('hidden.bs.collapse', () => {
            button.textContent = '+';
        });
    });
});

