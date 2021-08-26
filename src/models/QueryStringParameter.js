export default class QueryStringParameter {
  /**
   * {string}
   */
  key;
  /**
   * {string}
   */
  value;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
