//Start of gallery script
var x = 0;
var buttonPayout = 1;
var autoActivated = false;

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
    var numImage = 7;

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
        case 4:
            image.src = "Images/BASIL.png"
            break;
        case 5:
            image.src = "Images/elminXT.png"
            break;
        case 6:
            image.src = "Images/jadeharleybutCOOLER.jpg"
            break;
    }
}
//End of gallery script

//Start of choccros clicker
var total = 0;

var perClick = 1;
var perClickCost = 25;

function ChocClicked() {
    var choccros = document.getElementById("choccros");
    var choctext = document.getElementById("choctext");

    total += perClick;
    choctext.textContent = total + " Warm Chocolate Croissants";

    choccros.style = "filter: brightness(70%);"
    setTimeout(function () {
        choccros.style = "filter: brightness(100%);"
    }, 50);
}

function IncClick() {
    var perClickId = document.getElementById("perClick")

    if (total >= perClickCost) {
        total -= perClickCost;
        perClickCost -= 2;
        perClickCost = Math.round(1.5 * perClickCost);
        perClick += buttonPayout;
        perClickId.textContent = "(" + perClickCost + ") +" + buttonPayout + " Per Click";
        document.getElementById("choctext").textContent = total + " Warm Chocolate Croissants";
        document.getElementById("chocdesc").textContent = perClick + " per click / " + autoClick + " per second";
    } else {
        perClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            perClickId.textContent = "(" + perClickCost + ") +" + buttonPayout + " Per Click";
        }, 600);
    }
}

var autoClick = 0;
var autoClickCost = 50;

function IncAutoClick() {
    var autoClickId = document.getElementById("autoClick");

    if (total >= autoClickCost) {
        total -= autoClickCost;
        autoClickCost -= 2;
        autoClickCost = Math.round(1.3 * autoClickCost);
        autoClick += buttonPayout;
        if (autoClick == buttonPayout && !autoActivated) {
            autoActivated = true;
            AutoClicker();
        }
        autoClickId.textContent = "(" + autoClickCost + ") +" + buttonPayout + " Auto Click";
        document.getElementById("choctext").textContent = total + " Warm Chocolate Croissants";
        document.getElementById("chocdesc").textContent = perClick + " per click / " + autoClick + " per second";
    } else {
        autoClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            autoClickId.textContent = "(" + autoClickCost + ") + " + buttonPayout + " Auto Click";
        }, 600);
    }
}

var clickIncCost = 200;

function IncButtonPayout() {
    var clickIncId = document.getElementById("increaseButton");
    var autoClickId = document.getElementById("autoClick");
    var perClickId = document.getElementById("perClick")

    if (total >= clickIncCost) {
        total -= clickIncCost;
        clickIncCost = Math.round(2.2 * clickIncCost);
        buttonPayout*=2;
        clickIncId.textContent = "(" + clickIncCost + ") Double Button Upgrade Amount";
        document.getElementById("choctext").textContent = total + " Warm Chocolate Croissants";

        autoClickId.textContent = "(" + autoClickCost + ") +" + buttonPayout + " Auto Click";
        perClickId.textContent = "(" + perClickCost + ") +" + buttonPayout + " Per Click";
    } else {
        autoClickId.textContent = "Not enough croissants!!";
        setTimeout(function () {
            clickIncId.textContent = "(" + clickIncCost + ") Double Button Upgrade Amount";
        }, 600);
    }
}

function AutoClicker() {
    total += autoClick;
    document.getElementById("choctext").textContent = total + " Warm Chocolate Croissants";

    setTimeout(function () {
        AutoClicker();
    }, 1000);
}
//End of choccros clicker
