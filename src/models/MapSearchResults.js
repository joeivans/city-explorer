export default class MapSearchResults {
  /**
   * @type {MapSearchResult[]}
   */
  results = [];

  /**
   * @param {MapSearchResult[]} results
   */
  constructor(results = []) {
    this.results = results;
  }

  hasResults() {
    return this.results.length > 0;
  }
}
