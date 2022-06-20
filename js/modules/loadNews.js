import {getData} from './getData.js';
import {renderCard} from './renderCard.js';
import {choices} from './choisesElem.js';
import {declOfNum} from './declOfNum.js';


export const loadNews = async () => {
  const newsList = document.querySelector('.news-list');
  const title = document.querySelector('.title');
  title.innerHTML = 'Свежие новости';

  const country = localStorage.getItem('country') || 'ru';
  choices.setChoiceByValue(country);
  newsList.textContent = '';

  const newsData = await getData(`https://newsapi.org/v2/top-headlines?country=${country}&pageSize=8`);
  // const newsData = await getData('../../headlines.json');

  renderCard(newsData);
};

export const loadSearch = async (value) => {
  const searchData = await getData(`https://newsapi.org/v2/everything?q=${value}&pageSize=8`);
  const quantity = searchData.articles.length;
  const title = document.querySelector('.title');

  title.classList.remove('hide');
  title.textContent = `
    По вашему запросу “${value}” найдено ${quantity}
    ${declOfNum(quantity, ['результ', 'результа', 'результатов'])}
  `;
  choices.setChoiceByValue('');

  renderCard(searchData);
};
