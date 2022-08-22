export { allCountries };

function allCountries(inputValue) {
  fetch(
    `https://restcountries.com/v3.1/name/${inputValue}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error);
    });
}
