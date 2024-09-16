var images = document.querySelectorAll("img");
var speed = {
    image1: 30,
    image2: -30
};
var left = {};

images.forEach(function(image) {
    left[image.id] = 0;
});

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
