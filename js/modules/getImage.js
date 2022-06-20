export const getImage = url => new Promise((resolve) => {
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
