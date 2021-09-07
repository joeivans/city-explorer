export default class MapSearchResult {
  /**
   * @type {string}
   */
  imageUri;
  /**
   * @type {Uint8Array}
   */
  imageBlob;

  /**
   * @param {string} imageUri
   * @returns {MapSearchResult}
   */
  addImageUri(imageUri) {
    this.imageUri = imageUri;
    return this;
  }

  /**
   * @param {Uint8Array} imageBlob
   * @returns {MapSearchResult}
   */
  addImageBlob(imageBlob) {
    this.imageBlob = imageBlob;
    return this;
  }
}
