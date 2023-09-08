$(document).ready(function () {
    "use strict";

    //console.log("Hello world");
    let DefaultBackground = document.body;
    const navSection = document.getElementById("navSection");
    const changeToDark = () => {
        if (DefaultBackground.style.backgroundColor != `hsl(207, 26%, 17%)`) {
            DefaultBackground.style.backgroundColor = `hsl(207, 26%, 17%)`;
            navSection.style.backgroundColor = `hsl(209, 23%, 22%)`;
            $(".where").css("color", "white");
            $("#ChangeModes").css("color", "white");
        } else {
            DefaultBackground.style.backgroundColor = `hsl(225, 6%, 88%)`;
        }
    };
    const changeToLight = () => {
        if (DefaultBackground.style.backgroundColor != `hsl(225, 6%, 88%)`) {
            DefaultBackground.style.backgroundColor = `hsl(225, 6%, 88%)`;
            navSection.style.backgroundColor = `hsl(0, 0%, 98%)`;
            $(".where").css("color", "black");
            $("#ChangeModes").css("color", "black");
        } else {
            DefaultBackground.style.backgroundColor = `hsl(207, 26%, 17%)`;
        }
    };
    const LIghtMode = document.getElementById("LightMode");
    const DarkMode = document.getElementById("DarkMode");
    DarkMode.onclick = function () {
        changeToDark();
        DarkMode.style.display = `none`;
        LIghtMode.style.display = `flex`;
    };
    LightMode.onclick = function () {
        changeToLight();
        DarkMode.style.display = `flex`;
        LIghtMode.style.display = `none`;
    };
});
