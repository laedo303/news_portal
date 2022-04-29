/* eslint-disable no-undef */

import {loadNews} from './loadNews.js';

const choicesElem = document.querySelector('.js-choice');

export const choices = new Choices(choicesElem, {
  searchEnabled: false,
  itemSelectText: '',
});

choicesElem.addEventListener('change', (event) => {
  const value = event.detail.value;
  localStorage.setItem('country', value);
  loadNews();
});
