const loadCountries = () => {
  const url = "https://restcountries.com/v3.1/all";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (countries) => {
  //   console.log(countries);
  countries.forEach((country) => {
    // console.log(country);
    const countryDiv = document.getElementById("country");
    const div = document.createElement("div");
    div.classList.add("country-style");
    div.innerHTML = `
        <h2>${country.name.common}</h2>
        <p style="display:block"> Capital: ${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')" style="display:block">Show Deatails</button>
  `;
    countryDiv.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  // console.log(name);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((detail) => {
        console.log(detail);
        const countryDetailDiv = document.getElementById("country-detail");
        countryDetailDiv.innerHTML = `
        <img src="${detail.flags.png}">
        <h3> ${detail.name.official}</h3>
        <p>Continent: ${detail.region}</p>
        <p>Popupaltion: ${detail.population}</p>
      `;
      });
    });
};
