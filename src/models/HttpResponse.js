export default class HttpResponse {
  /**
   * {number}
   */
  responseCode;
  /**
   * {any[]}
   */
  responseHeader;
  /**
   * {any}
   */
  content;

  /**
   * @param {any} content
   * @returns {HttpResponse}
   */
  addContent(content) {
    this.content = content;
    return this;
  }

  /**
   * @param {any[]} header
   * @returns {HttpResponse}
   */
  addResponseHeader(header) {
    this.responseHeader = header;
    return this;
  }

  /**
   * @param {number} responseCode
   * @returns {HttpResponse}
   */
  addResponseCode(responseCode) {
    this.responseCode = responseCode;
    return this;
  }
}
