import {getDateCorrectFormat} from './getDateCorrectFormat.js';
import {getImage} from './getImage.js';

const newsList = document.querySelector('.news-list');

export const renderCard = async (data) => {
  data.articles.forEach(async (item) => {
    const {urlToImage, title, url, description, publishedAt, author} = item;

    const card = document.createElement('li');
    card.className = 'news-item';

    const image = await getImage(urlToImage);
    image.alt = title;
    card.append(image);

    card.innerHTML += `
      <h3 class="news-title">
        <a href="${url}" class="news-link"
          target="_blank">${title}</a>
      </h3>

      <p class="news-description">${description || ''}</p>

      <div class="news-footer">
        <time class="news-datetime" datetime="${publishedAt}">
          ${getDateCorrectFormat(publishedAt)}
        </time>
        <p class="news-author">${author || ''}</p>
      </div>
    `;
    newsList.append(card);
  });
};
