$(document).ready(function () {
  "use strict";

  const endPoint = "https://restcountries.com/v3.1/all";
  let data = []; // Array to store the fetched countries data

  async function fetchData() {
    try {
      const response = await fetch(endPoint);
      data = await response.json();
      gottenDetails(data);
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }

  function gottenDetails(countries) {
    // Clear the container before populating with new country details
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";

    if (countries && countries.length > 0) {
      countries.sort((a, b) => {
        // Sort countries based on the common name
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      countries.forEach((country) => {
        // Create a div for each country
        let countryInfo = document.createElement("div");
        countryInfo.classList.add("countryInfo");

        // Display the flags
        const countryFlag = document.createElement("img");
        countryFlag.src = country.flags.png;
        countryFlag.classList.add("countryFlag");
        countryInfo.appendChild(countryFlag);
        //Display country Details
        countryFlag.onclick = function () {
          //console.log(country);
          const backButton = document.getElementById("backButton");
          //Disabling some displays
          backButton.onclick = function () {
            pageTitle.innerText = "Rest-countries-api";
            $("#Details").css("display", "none");
            $(".container").css("display", "flex");
            $("#Section1").css("display", "flex");
          }
          $("#Details").css("display", "flex");
          $(".container").css("display", "none");
          $("#Section1").css("display", "none");
          //For display of necessary outpur
          const pageTitle = document.getElementById("pageTitle")
            pageTitle.innerText = country.name.common;

          const coutryDetailFlag = document.getElementById("coutryDetailFlag");
          coutryDetailFlag.src = country.flags.png;

          const Name = document.getElementById("Name");
          Name.textContent = country.name.common;

          const nativeName = document.getElementById("nativeName")
          nativeName.textContent = country.name.official;

          const detailPopulation = document.getElementById("Population")
          detailPopulation.textContent = country.population.toLocaleString('en-us', {minimumFractionDigits: 0});

          const Region = document.getElementById("Region")
          Region.textContent = country.region;

          const subRegion = document.getElementById("Subregion")
          subRegion.textContent = country.subregion;

          const detailCapital = document.getElementById("Capital")
          detailCapital.textContent = country.capital;

          const ToplevelD = document.getElementById("ToplevelD")
          ToplevelD.textContent = country.tld.shift();

          const countryCurrencies = document.getElementById("countryCurrencies")
          const currencyName = Object.values(country.currencies)[0].name;
          countryCurrencies.innerText = currencyName;
          
          const Languages = document.getElementById("Languages")
          const langsValues = Object.values(country.languages)[0];
          Languages.innerText = langsValues;

          const Borders = document.getElementById("Borders")
          Borders.innerHTML = "";
          let borderss = [];
          borderss = country.borders;

            setTimeout(() => {
              for (let i = 0; i < borderss.length; i++) {
                  const responseBorder = document.createElement("li");
                responseBorder.textContent = borderss[i];
                responseBorder.classList.add("borders");
                const responseContainer = document.createElement("div");
                responseContainer.appendChild(responseBorder);
                Borders.appendChild(responseContainer);
              }
            }, -50);
        }

//Displaying the country names
const countryName = document.createElement("h2");
countryName.classList.add("countryName");
countryName.textContent = `${country.name.common}`;
countryInfo.appendChild(countryName);

//Displaying the country population
const countryPopulation = document.createElement("p");
countryPopulation.textContent = `Population: ${country.population.toLocaleString(
  "en-us",
  { minimumFractionDigits: 0 }
)}`;
countryPopulation.classList.add("mainDetails");
countryInfo.appendChild(countryPopulation);

//Displaying the country region
const countryRegion = document.createElement("p");
countryRegion.classList.add("mainDetails");
countryRegion.textContent = `Region: ${country.region}`;
countryInfo.appendChild(countryRegion);

//Displaying the country capital
const countryCapital = document.createElement("p");
countryCapital.classList.add("mainDetails");
countryCapital.textContent = `Capital: ${country.capital}`;
countryInfo.appendChild(countryCapital);

        // Display each country in the single container
        container.appendChild(countryInfo);
      });
    }
  }

  fetchData();

  // Filter Typed country name
  function filterTypedCountry() {
    // Add event listener to the search input field
    const Section2 = document.getElementById("Section2")
    const searchInput = document.querySelector("#typcountryName");
    searchInput.addEventListener("input", function (event) {
          const searchTerm = event.target.value.toLowerCase();
      data.filter((country) => {
        if (country.name.common.toLowerCase() != event.target.value.toLowerCase()) {
          Section2.innerHTML = `<h1>No country matches Search term...</h1>`
        } else {
          const filteredCountries = data.filter((country) => 
        country.name.common.toLowerCase().includes(searchTerm)
      );
      gottenDetails(filteredCountries);
      
        }
      })
    });
  }
  setTimeout(() => {
    filterTypedCountry();
  }, 5080);

  // Filters countries based on the typed country name
  let searchbtn = document.getElementById("searchbtn");
  searchbtn.addEventListener("click", (e) => {
    filterTypedCountry();
  });

  // Filter selected country region
  function SelectedRgion() {
    let regionFilter = document.getElementById("filterbar");
    regionFilter.addEventListener("change", (e) => {
      let selectedRegion = e.target.value.toLowerCase();
      let filteredSelection = data.filter((country) =>
        country.region.toLowerCase().includes(selectedRegion)
      );
      gottenDetails(filteredSelection);
    });
  }
  SelectedRgion();
});