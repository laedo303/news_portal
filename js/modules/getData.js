
export const getData = async (url) => {
  const response = await fetch(url, {
    headers: {
      'X-Api-Key': '105be2d2beee459cb4ca21c130eb883d',
    },
  });
  const data = await response.json();
  return data;
};
