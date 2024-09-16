let button = document.getElementById("hamer");
let but = document.getElementById("ham");
let klikTeller = 0;



button.addEventListener("click", (randomKlik));
but.addEventListener("click", function() {
    document.body.style.cursor = `url('hammer.png') 10 10, auto`;
      });

//functie
function randomKlik(){
const body = document.querySelector("body");

body.addEventListener("click", (event) => {
    const img = document.createElement("img");

    img.src = "broken.png";

    img.style.position = "absolute";
    img.style.left = `${event.clientX}px`;
    img.style.top = `${event.clientY}px`;

    img.style.width = `${Math.random() * 500+ 50}px`;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;


    klikTeller++
    if (klikTeller === 6) {
        alert('OH NEE! Je hebt er een zooitje van gemaakt. Refresh de pagina en solliciteer bij ons om je troep op te ruimen. ');
      }

    body.appendChild(img);
});
}



/*picture = document.getElementById('bom')

function bomAanslag(){
    picture.style.display = "block";
    x = Math.floor(Math.random() * 0.3 * window.innerWidth);
    y = Math.floor(Math.random() * 2 * window.innerHeight);

    picture.style.left = x + "px";
    picture.style.top = y + "px";

    meerBommen();
}

function meerBommen(){
    const aanval = document.createElement('aanval');

    aanval.setAttribute('src',"broken.png")

    document.body.appendChild(aanval);

}*/

/*picture = document.getElementById('bom');

function bomAanslag(){
    picture.style.display = "block";
    x = Math.floor(Math.random() * 0.3 * window.innerWidth);
    y = Math.floor(Math.random() * 2 * window.innerHeight);

    picture.style.left = x + "px";
    picture.style.top = y + "px";

    var bommen = [
        "https://www.pngmart.com/files/13/Broken-Wall-PNG-File.png","https://www.pngmart.com/files/13/Broken-Wall-PNG-File.png", "https://www.pngmart.com/files/13/Broken-Wall-PNG-File.png"
    ]

    document.getElementById("hamer").addEventListener("click", function()
    {
        for (var i = 0; i<bommen.length; i++)
            var img = document.createElement("img");
            img.src = bommen[i];

        document.body.appendChild(img);
    });
}
*/
