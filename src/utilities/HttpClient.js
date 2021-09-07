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
   * @param {function(httpStatusCode:number)} onError
   * @returns {Promise<HttpResponse>}
   */
  async getAsync(queryString, onError) {
    try {
      const axiosResponse = await axios.get(
        queryString.baseUri,
        {
          params: HttpClient.getParamsFrom(queryString)
        }
      );
      return HttpClient.responseFactory(axiosResponse);
    } catch (error) {
      onError(error);
      return null;
    }
  },

  responseFactory({data, headers, status}) {
    return new HttpResponse()
      .addContent(data)
      .addResponseHeader(headers)
      .addResponseCode(status);
  },
};


export default HttpClient.getAsync;
