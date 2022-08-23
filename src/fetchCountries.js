export { allCountries };

function allCountries(inputValue) {
  fetch(
    `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,population,flags,languages`
  );
}
