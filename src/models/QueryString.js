export default class QueryString {
  /**
   * {QueryStringParameter[]}
   */
  parameters = [];

  /**
   * @param {QueryStringParameter} param
   */
  add(param) {
    this.parameters.push(param);
    return this;
  }
}
