import {getData} from './getData.js';
import {renderCard} from './renderCard.js';
import {choices} from './choisesElem.js';


export const loadNews = async () => {
  const newsList = document.querySelector('.news-list');
  newsList.innerHTML = `<li class="preload"></li>`;

  const title = document.querySelector('.title');
  title.innerHTML = `Список новостей`;
  // title.classList.add('hide');

  const country = localStorage.getItem('country') || 'ru';
  choices.setChoiceByValue(country);
  newsList.textContent = '';


  const data = await getData(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=8`);
  // const data = await getData('../../headlines.json');
  renderCard(data);
};
