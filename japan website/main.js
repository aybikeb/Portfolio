let slide = document.querySelectorAll('.video-container');
let index =0;

function volgende()
{
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active');
}
function vorige()
{
    slide[index].classList.remove('active');
    index = (index -1 + slide.length) % slide.length;
    slide[index].classList.add('active');
}