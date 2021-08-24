import axios from 'axios';


export default class HttpClient {
  sanitizeUrl = (url) => url.replaceAll('"', '').replaceAll(';', '');

  getAsync = async (url) => {
    /*
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(API);
    */
    return await axios.get(
      this.sanitizeUrl(url)
    );
  };
}
