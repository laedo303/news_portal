import {searchNews} from './modules/formSearch.js';
import {loadNews} from './modules/loadNews.js';
import {renderCard} from './modules/renderCard.js';

const newsList = document.querySelector('.news-list');


const init = () => {
  newsList.className = 'preload';
  return Promise.all([
    loadNews(),
    searchNews(),

  ]);
};

init().then(data => {
  newsList.classList.remove('preload');
  renderCard(data[0]);
  if (data[1] === undefined) return;
  else {
    renderCard(data[1]);
  }
});


// news API key is: 105be2d2beee459cb4ca21c130eb883d
