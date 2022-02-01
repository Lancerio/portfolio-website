let scrollPosition = 0;
let scrollAmount = 320;
let maxScroll = 840;

const scroll = document.querySelector('.scroll');
const projectList = document.querySelector('.project-container');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

// Event Listeners
rightBtn.addEventListener('click', () => {
    scrollHorizontal(-1);
});

leftBtn.addEventListener('click', () => {
    scrollHorizontal(1);
});

// Function
function scrollHorizontal(n) {
    scrollPosition += (n * scrollAmount);

    if (-scrollPosition >= maxScroll) {
        scrollPosition = -maxScroll;
    }

    if (scrollPosition >= 0) {
        scrollPosition = 0;
    }

    projectList.style.left = scrollPosition + 'px';

}