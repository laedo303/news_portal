import {choices} from './choisesElem.js';
import {getData} from './getData.js';
import {renderCard} from './renderCard.js';

const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ?
    2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export const search = () => {
  const formSearch = document.querySelector('.form-search');
  const title = document.querySelector('.title');


  const loadSearch = async value => {
    const data = await getData(`https://newsapi.org/v2/everything?q=${value}&pageSize=100`);
    const quantity = data.articles.length;

    title.classList.remove('hide');

    title.textContent = `
      По вашему запросу “${value}” найдено ${quantity}
      ${declOfNum(quantity, ['результ', 'результа', 'результатов'])}
    `;

    choices.setChoiceByValue('');

    renderCard(data);
  };


  formSearch.addEventListener('submit', event => {
    event.preventDefault();
    loadSearch(formSearch.search.value);
    formSearch.reset();
  });
};
