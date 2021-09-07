export default class ErrorModel {
  /**
   * @type {string}
   */
  title;
  /**
   * @type {string}
   */
  message;

  /**
   * @param {object} obj expecting {title: string, message: string}
   */
  constructor(obj) {
    if (obj.title) {
      this.title = obj.title;
    }
    if (obj.message) {
      this.message = obj.message;
    }
  }
}
