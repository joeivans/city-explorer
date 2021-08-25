import axios from 'axios';
import HttpResponse from '../models/HttpResponse';


const HttpClient = {
  /**
   * Creates a URLSearchParams object from an array of string array values.
   * @param {Array<string[]>} queryStringParams
   * @returns {URLSearchParams}
   */
  getParamsFrom(queryStringParams) {
    return new URLSearchParams(
      queryStringParams.map(param =>
        [param[0], param[1]]
      ));
  },

  /**
   * Performs a GET request.
   * @param {string} baseUrl
   * @param {Array<string[]>} queryStringParams
   * @returns {Promise<HttpResponse>}
   */
  async getAsync(
    baseUrl,
    queryStringParams) {
    let axiosResponse;

    try {
      axiosResponse = await axios.get(
        baseUrl,
        {
          params: HttpClient.getParamsFrom(queryStringParams)
        }
      );
    } catch (error) {
      // todo: add exponential backoff
      console.log(error);
    }

    return HttpClient.extracted(axiosResponse);
  },

  /**
   * @param {AxiosResponse<any>} axiosResponse
   * @returns {HttpResponse}
   */
  extracted(axiosResponse) {
    return new HttpResponse()
      .addContent(axiosResponse.data)
      .addResponseHeader(axiosResponse.headers)
      .addResponseCode(axiosResponse.status);
  },
};


export default HttpClient.getAsync;
