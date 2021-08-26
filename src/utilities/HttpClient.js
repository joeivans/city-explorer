import axios from 'axios';
import HttpResponse from '../models/HttpResponse';


const HttpClient = {
  /**
   * Creates a URLSearchParams object from an array of string array values.
   * @param {QueryString} queryString
   * @returns {URLSearchParams}
   */
  getParamsFrom(queryString) {
    return new URLSearchParams(
      queryString.parameters.map(param =>
        [param.key, param.value]
      ));
  },

  /**
   * Performs a GET request.
   * @param {QueryString} queryString
   * @returns {Promise<HttpResponse>}
   */
  async getAsync(
    queryString) {
    let axiosResponse;

    try {
      axiosResponse = await axios.get(
        queryString.baseUri,
        {
          params: HttpClient.getParamsFrom(queryString)
        }
      );
    } catch (error) {
      console.log(error);
    }

    return HttpClient.responseFactory(axiosResponse);
  },

  responseFactory(axiosResponse) {
    return new HttpResponse()
      .addContent(axiosResponse.data)
      .addResponseHeader(axiosResponse.headers)
      .addResponseCode(axiosResponse.status);
  },
};


export default HttpClient.getAsync;
