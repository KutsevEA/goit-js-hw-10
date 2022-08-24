import './css/styles.css';

import { allCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryInfoEl = document.querySelector('.country-info');
const countryListEl = document.querySelector('.country-list');
const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(star, DEBOUNCE_DELAY));

let markup = '';

function star(event) {
  const userChoiceValue = event.target.value.trim().toLowerCase();

  if (!userChoiceValue || userChoiceValue === ` `) {
    countryInfoEl.innerHTML = ' ';
    countryListEl.innerHTML = ' ';
    return;
  }

  allCountries(userChoiceValue)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.status === 404) {
        Notiflix.Notify.failure(`Oops, there is no country with that name`);
        return;
      }

      checkLength(data);
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
      countryInfoEl.innerHTML = ' ';
      countryListEl.innerHTML = ' ';
    });
}

function checkLength(countries) {
  if (countries.length > 10) {
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }

  if (countries.length === 1) {
    markupCard(countries);
  } else {
    markupCards(countries);
  }
}

function markupCard(countries) {
  const [country] = countries;
  markup = `
    <img src="${country.flags.svg}" alt="Flag" width="150" height="150">
    <h1>${country.name.official}</h1>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Languages: ${Object.values(country.languages)}</p>
  `;
  countryInfoEl.innerHTML = ' ';
  countryListEl.innerHTML = ' ';
  countryInfoEl.insertAdjacentHTML('beforeend', `${markup}`);
}

function markupCards(countries) {
  markup = ' ';
  for (const country of countries) {
    markup += `
  <li style="display: flex ; align-items: center"> 
    <img src="${country.flags.svg}" style="margin-right: 15px" alt="Flag" width="25" height="25">
    <h2>${country.name.official}</h2>
    </li>
  `;
  }

  countryInfoEl.innerHTML = ' ';
  countryListEl.innerHTML = ' ';
  countryListEl.insertAdjacentHTML('beforeend', `${markup}`);
}
