var images = document.querySelectorAll("img");
var speed = {
    image1: 60,
    image2: -50,
    image3: 60
};
var left = {
    image1: 0,
    image2: 100,
    image3: -50
};

function move() {
    images.forEach(function(image) {
        left[image.id] = (left[image.id] + speed[image.id] * (1/1160)) % 100; // update position with speed and time
        if (left[image.id] <= -100) {
            left[image.id] = 100;
        }
        image.style.left = left[image.id] + "%";
    });
    requestAnimationFrame(move);
}
move();

