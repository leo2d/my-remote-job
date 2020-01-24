import axios from 'axios';

const fetchHTML = async url => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log('error on REQUEST');
    console.log(error);
  }
};

export default fetchHTML;
