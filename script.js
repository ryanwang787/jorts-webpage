let funcRun = 0;

window.onload = function () {
    document.getElementById("teleport-btn").innerHTML = "Jorts!";
};


function teleport() {
    var x = Math.round((Math.random() * 1200));
    var y = Math.round((Math.random() * 800));
    if (x <= 100 || x >= 1100) {
        x = 600;
    }
    if (y <= 100 || y >= 700) {
        y = 400;
    }

    if (funcRun > 28) {
        window.location.assign("https://youtu.be/UKVl14i8qUM?t=4");
    } else if (funcRun > 28) {
        document.getElementById("teleport-btn").innerHTML = "enjoy";
        document.getElementById("teleport-btn").style.fontSize = "20px";
    } else if (funcRun > 27) {
        document.getElementById("teleport-btn").innerHTML = "1";
        document.getElementById("teleport-btn").style.fontSize = "24px";
    } else if (funcRun > 26) {
        document.getElementById("teleport-btn").innerHTML = "2";
        document.getElementById("teleport-btn").style.fontSize = "24px";
    } else if (funcRun > 25) {
        document.getElementById("teleport-btn").innerHTML = "3";
        document.getElementById("teleport-btn").style.fontSize = "24px";
    } else if (funcRun > 24) {
        document.getElementById("teleport-btn").innerHTML = "Ready?";
        document.getElementById("teleport-btn").style.fontSize = "20px";
    } else if (funcRun > 23) {
        document.getElementById("teleport-btn").innerHTML = "I'll give you what you want";
        document.getElementById("teleport-btn").style.fontSize = "12px";
    } else if (funcRun > 21) {
        document.getElementById("teleport-btn").innerHTML = "Fine relax";
        document.getElementById("teleport-btn").style.fontSize = "20px";
    } else if (funcRun > 19) {
        document.getElementById("teleport-btn").innerHTML = "Okay";
        document.getElementById("teleport-btn").style.fontSize = "24px";
    } else if (funcRun > 17) {
        document.getElementById("teleport-btn").innerHTML = "It's for your own good";
        document.getElementById("teleport-btn").style.fontSize = "12px";
    } else if (funcRun > 10) {
        document.getElementById("teleport-btn").innerHTML = "Stop trying";
        document.getElementById("teleport-btn").style.fontSize = "16px";
    } else {
        document.getElementById("teleport-btn").innerHTML = "Jorts!";
    }

    document.getElementById("teleport-btn").style.left = x + "px";
    document.getElementById("teleport-btn").style.top = y + "px";

    funcRun ++;
}

function growButtonSize() {
    document.getElementById("teleport-btn").style.width = document.getElementById("teleport-btn").getBoundingClientRect()["width"] * 1.1 + "px";
    document.getElementById("teleport-btn").style.height = document.getElementById("teleport-btn").getBoundingClientRect()["height"] * 1.1 + "px";
}