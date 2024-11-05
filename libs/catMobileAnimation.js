// Setting the width
const width = window.innerWidth;
const catStand = document.getElementById('catStand');
const catsSeat = document.querySelectorAll('.cat-img-seat');
const bg = document.getElementById('img-bg');
const sun = document.getElementById('img-sun');

// Setting up the draw function
function catDraw() {
    setTimeout(() => {
        catsSeat.forEach(element => {
            element.classList.add('animate');
        })
        bg.classList.add('animated-bg');
        sun.classList.add('animated-bg');
    }, 8_000);
    
    setTimeout(() => {
        catsSeat.forEach(element => {
            element.classList.remove('animate');
            element.classList.add('hide');
        })
        bg.classList.remove('animated-bg');
        sun.classList.remove('animated-bg');
        catStand.classList.remove('hide');
    }, 18_000);

    setTimeout(() => {
        catStand.classList.add('hide');
        catsSeat.forEach(element => {
            element.classList.remove('hide');
        })
    }, 20_000);
}

// Loop the animation
if (width < 480) {
    catDraw();
    setInterval(catDraw, 20_000);
}
