export default class SearchResults {
  /**
   * @param {SearchResult[]} results
   */
  constructor(results = []) {
    this._results = results;
  }

  /**
   * @type {SearchResult[]}
   * @private
   */
  _results = [];

  /**
   * @returns {SearchResult[]}
   */
  get results() {
    return this._results;
  }

  /**
   * @param {SearchResult[]} value
   */
  set results(value) {
    this._results = value;
  }

  hasResults() {
    return this._results.length > 0;
  }
}
