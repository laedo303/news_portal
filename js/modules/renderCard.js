import {getDateCorrectFormat} from './getDateCorrectFormat.js';

const getImage = url => new Promise((resolve) => {
  const image = new Image(270, 200);
  image.className = 'news-image';

  image.addEventListener('load', () => {
    resolve(image);
  });

  image.addEventListener('error', () => {
    image.src = '../../image/noPhoto.jpg';
    resolve(image);
  });

  image.src = url || '../../image/noPhoto.jpg';
  return image;
});


export const renderCard = (data) => {
  const newsList = document.querySelector('.news-list');
  newsList.textContent = '';

  data.articles.forEach(async (news) => {
    const {urlToImage, title, url, description, publishedAt, author} = news;

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
