
export const getDateCorrectFormat = isoDate => {
  const date = new Date(isoDate);

  const fullDate = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const fullTime = date.toLocaleString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `<span class="news-date">${fullDate}</span> ${fullTime}`;
};
