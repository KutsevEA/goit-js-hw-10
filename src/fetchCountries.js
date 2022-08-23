export { allCountries };

function allCountries(inputValue) {
  return fetch(
    `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,population,flags,languages`
  )
}

