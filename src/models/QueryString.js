export default class QueryString {
  /**
   * {QueryStringParameter[]}
   */
  parameters = [];
  /**
   * {string}
   */
  baseUri;

  constructor(baseUri) {
    this.baseUri = baseUri;
  }

  /**
   * @param {QueryStringParameter} param
   */
  addParameter(param) {
    this.parameters.push(param);
    return this;
  }

  /**
   * @returns {string}
   */
  urlFactory() {
    const stringBuilder = [`${this.baseUri}`];

    for (let i = 0; i < this.parameters.length; i++) {
      const parameter = this.parameters[i];
      stringBuilder.push(i < 1 ? '?' : '&');
      stringBuilder.push(`${parameter.key}=${parameter.value}`);
    }

    return encodeURI(stringBuilder.join(''));
  }
}
