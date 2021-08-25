export default class SearchResults {
  /**
   * @param {Result[]} results
   */
  constructor(results = []) {
    this._results.splice();
    this._results = results;
  }

  /**
   * @type {Result[]}
   * @private
   */
  _results = [];

  /**
   * @returns {Result[]}
   */
  get results() {
    return this._results;
  }

  /**
   * @param {Result[]} value
   */
  set results(value) {
    this._results = value;
  }

  hasResults() {
    return this._results.length > 0;
  }
}
