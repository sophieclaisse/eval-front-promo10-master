var Tab = [
    {"name": "photo1", "image":"visuels/1.jpg", "alt": "Festival de Cannes"},
    {"name": "photo2", "image":"visuels/2.jpg" , "alt": "Festival d'abdos"},
    {"name": "photo3", "image":"visuels/3.jpg", "alt": "Festival de coupes de cheveux" },
];

document.getElementById("slideT").src = Tab[0].image;

var i=0;

document.getElementById("slide1").addEventListener("click", function () {
    if (i < 3) {
        i++;
        document.getElementById("slideT").src = Tab[i].image;
    }

});

document.getElementById("slide3").addEventListener("click", function () {
    if (i < 3) {
        i--;
        document.getElementById("slideT").src = Tab[i].image;
    }

});
