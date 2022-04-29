import {search} from './modules/formSearch.js';
import {loadNews} from './modules/loadNews.js';

const init = () => {
  loadNews();
  search();
};

init();


// news API key is: 105be2d2beee459cb4ca21c130eb883d
