import {loadSearch} from './loadNews.js';


export const searchNews = () => {
  const formSearch = document.querySelector('.form-search');
  formSearch.addEventListener('submit', e => {
    e.preventDefault();
    loadSearch(formSearch.search.value);
    formSearch.reset();
  });
};
