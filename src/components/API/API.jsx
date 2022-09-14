
import axios from 'axios';

const ServiceAPI = (q, page) => {
  const options = {
    params: {
      key: '5755941-df6c2a567dcee2477d03fcf47',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      q,
      page,
    },
  };

  return axios.get('https://pixabay.com/api/', options);
};

export { ServiceAPI };