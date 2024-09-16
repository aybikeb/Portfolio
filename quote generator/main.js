let button = document.getElementById('button');
let output = document.getElementById('output');
let quote =
    [
        "Life is what happens when you’re busy making other plans. - John Lennon",
        "When the going gets tough, the tough get going. - Joe Kennedy",
        "You must be the change you wish to see in the world.- Mahatma Gandhi",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "Tough times never last but tough people do. - Robert H. Schuller",
        "Get busy living or get busy dying. - Stephen King",
        "Whether you think you can or you think you can’t, you’re right. - Henry Ford",
        "Tis better to have loved and lost than to have never loved at all. - Alrded Lord Tennyson",
        "A man is but what he knows. - Sir Francis Bacon",
        "You miss 100 percent of the shots you never take. - Wayne Gretzky",
        "If you’re going through hell, keep going. - Winston Churchill"
    ];

button.addEventListener('click', function(){
     var randomQuote= quote[Math.floor(Math.random() * quote.length)] 
     random_bg_color();
     output.innerHTML = randomQuote;
})

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();
