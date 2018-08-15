const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

//sets opacity of first image
imgs[0].style.opacity = opacity;

// refactored even more with destructuring
// const [current, imgs] = [
//     document.querySelector('#current'),
//     document.querySelectorAll('.imgs img')
// ];
imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //resets the opacity of all the images
    imgs.forEach(img => (img.style.opacity = 1));
    //changes current image to source of clicked image
    current.src = e.target.src;

    // adds fade in class
    current.classList.add('fade-in');

    //removes fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);
    //changes opacity to the opacity variable
    e.target.style.opacity = opacity;
}