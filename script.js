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