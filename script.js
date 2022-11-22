//Start of gallery script
var x = 0;

function changeImageUp() {
    x++;
    changeImage();
}

function changeImageDown() {
    x--;
    changeImage();
}

function changeImage() {
    var image = document.getElementById("imageScroll");
    var numImage = 4;

    if (x > numImage-1) {
        x = 0;
    } else if (x < 0) {
        x = numImage-1;
    }

    switch (x) {
        case 0:
            image.src = "Images/catboyyy.png";
            break;
        case 1:
            image.src = "Images/scrimbloshirt.png";
            break;
        case 2:
            image.src = "Images/treeboy.png";
            break;
        case 3:
            image.src = "Images/wormdevoursconneticut.png"
            break;
    }
}
//End of gallery script

//Start of choccros clicker
var total = 0;

function ChocClicked() {
    var choccros = document.getElementById("choccros");
    var choctext = document.getElementById("choctext");

    total++;
    choctext.textContent = total + " Warm Chocolate Croissants";

    choccros.style = "filter: brightness(70%);"
    setTimeout(function () {
        choccros.style = "filter: brightness(100%);"
    }, 50);
}
//End of choccros clicker
