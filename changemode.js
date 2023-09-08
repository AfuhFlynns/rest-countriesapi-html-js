$(document).ready(function () {
  "use strict";

  //console.log("Hello world");
  let DefaultBackground = document.body;
  const navSection = document.getElementById("navSection");
  const searchbar = document.getElementById("searchbar");
  const filterbar = document.getElementById("filterbar");
  const Details = document.getElementsByClassName("countryInfo");
  const Input = document.getElementById("typcountryName");
  const changeToDark = () => {
    if (DefaultBackground.style.backgroundColor != `hsl(207, 26%, 17%)`) {
      DefaultBackground.style.backgroundColor = `hsl(207, 26%, 17%)`;
      navSection.style.backgroundColor = `hsl(209, 23%, 22%)`;
      searchbar.style.backgroundColor = `hsl(209, 23%, 22%)`;
      filterbar.style.backgroundColor = `hsl(209, 23%, 22%)`;
      $(".countryInfo").css("backgroundColor", "hsl(209, 23%, 22%)");
      $(".where").css("color", "white");
      $("#ChangeModes").css("color", "white");
      $(".container").css("color", "white");
      $("#typcountryName").css("color", "white");
      Input.style.backgroundColor = `hsl(209, 23%, 22%)`;
      Input.oninput = function () {
        $(".countryInfo").css("backgroundColor", "hsl(209, 23%, 22%)");
      };
      $("#searchbtn").css("filter", "invert(80%)");
      $("#filterbar").css("color", "white", "opacity", "0.5");
      $("option").css("backgroundColor", "hsl(209, 23%, 22%)");
      $("option").css("color", "rgb(255, 255, 255, 0.7)");
    } else {
      DefaultBackground.style.backgroundColor = `hsl(225, 6%, 88%)`;
    }
  };
  const changeToLight = () => {
    if (DefaultBackground.style.backgroundColor != `hsl(225, 6%, 88%)`) {
      DefaultBackground.style.backgroundColor = `hsl(225, 6%, 88%)`;
      navSection.style.backgroundColor = `hsl(0, 0%, 98%)`;
      searchbar.style.backgroundColor = `hsl(0, 0%, 98%)`;
      filterbar.style.backgroundColor = `hsl(0, 0%, 98%)`;
      $(".countryInfo").css("backgroundColor", "hsl(0, 0%, 98%)");
      Input.style.backgroundColor = `hsl(0, 0%, 98%)`;
      Input.oninput = function () {
        $(".countryInfo").css("backgroundColor", "hsl(0, 0%, 98%)");
      };
      $(".where").css("color", "black");
      $("#ChangeModes").css("color", "black");
      $(".container").css("color", "black");
      $("#typcountryName").css("color", "black");
      $("#searchbtn").css("filter", "invert(0)");
      $("#filterbar").css("color", "rgb(59, 59, 59)");
      $("option").css("backgroundColor", "hsl(0, 0%, 98%)");
      $("option").css("color", "rgb(0, 0, 0, 0.7)");
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
