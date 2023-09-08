$(document).ready(function () {
  "use strict";

  const endPoint = "https://restcountries.com/v3.1/all";
  let data = []; // Array to store the fetched countries data
  async function fetchData() {
    try {
      const response = await fetch(endPoint);
      data = await response.json();
      gottenDetails(data);
      // console.log(data);
    } catch (error) {
      console.error(`An error occurred: ${error}`);
    }
  }
  function gottenDetails(countries) {
    const container = document.getElementsByClassName("container")[0];
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
        console.log(data);
        //Create a div for each country
        let countryInfo = document.createElement("div");
        countryInfo.classList.add("countryInfo");
        //Displaying the flags
        const countryFlag = document.createElement("img");
        countryFlag.src = `${country.flags.png}`;
        countryFlag.classList.add("countryFlag");
        countryInfo.appendChild(countryFlag);
        countryFlag.onclick = function(){
          window.location.href = "detail.html";
          function goDetails(country){
            
          }
          exports = goDetails;

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

        //Displaying each country in single container
        container.appendChild(countryInfo);
      });
    }
  }
  fetchData();
  gottenDetails();
  console.log(data);
  //Filters countries

  //Fiter Typed country name
  let searchbtn = document.getElementById("searchbtn");
  function filterTypedCountry() {
    // Add event listener to the search input field
    const searchInput = document.getElementById("typcountryName");
    searchInput.addEventListener("input", function (event) {
      const searchTerm = event.target.value.toLowerCase();
      const filteredCountries = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
      );
      gottenDetails(filteredCountries);
    });
  }
  filterTypedCountry();
  searchbtn.addEventListener("click", (e) => {
    filterTypedCountry();
  });

  //Filter selected country region
  if (data && data.length > 0) {
    let regionFilter = document.getElementById("filterbar");
    regionFilter.addEventListener("change", (e) => {
      let selectedRegion = e.target.value.toLowerCase();
      let filteredSelection = data.filter((country) => {
        country.region.toLowerCase().includes(selectedRegion);
      });
      gottenDetails(filteredSelection);
    });
  }
});
