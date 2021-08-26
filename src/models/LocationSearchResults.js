export default class LocationSearchResults {
  /**
   * @type {LocationSearchResult[]}
   */
  results = [];

  /**
   * @param {LocationSearchResult[]} results
   */
  constructor(results = []) {
    this.results = results;
  }

  hasResults() {
    return this.results.length > 0;
  }
}
