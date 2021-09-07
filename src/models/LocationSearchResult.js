export default class LocationSearchResult {
  /**
   * @type {Uint8Array}
   */
  map;
  /**
   * @type {string}
   */
  mapUri;
  /**
   * Unique identifier for a result
   * @type {number}
   */
  id;
  /**
   * Latitude of the result
   * @type {number}
   */
  latitude;
  /**
   * Longitude of the result
   * @type {number}
   */
  longitude;
  /**
   * House name or Point of Interest (POI) such as a Cafe or School
   * @type {string}
   */
  name;
  /**
   * House or Building number
   * @type {number}
   */
  houseNumber;
  /**
   * Roads, Highways, Freeways, Motorways
   * @type {string}
   */
  road;
  /**
   * Neighbourhoods, Allotments, Quarters, Communities
   * @type {string}
   */
  neighborhood;
  /**
   * Suburbs, Subdivisions
   * @type {string}
   */
  suburb;
  /**
   * Islands, Islets
   * @type {string}
   */
  island;
  /**
   * Cities, Towns, Villages, Municipalities, Districts, Boroughs, Hamlets
   * @type {string}
   */
  city;
  /**
   * Counties
   * @type {string}
   */
  county;
  /**
   * States, Provinces, Regions, State Districts
   * @type {string}
   */
  state;
  /**
   * State or Province Code
   * @type {string}
   */
  stateCode;
  /**
   * Postal Codes, Zipcodes
   * @type {string}
   */
  postalCode;
  /**
   * Countries, Nation-states
   * @type {string}
   */
  country;
  /**
   * Country Code - 2 letter (ISO 3166-1 alpha-2)
   * @type {string}
   */
  countryCode;

  /**
   * @param {number} id
   * @returns {LocationSearchResult}
   */
  addId(id) {
    this.id = id;
    return this;
  }

  /**
   * @param {number} latitude
   * @returns {LocationSearchResult}
   */
  addLatitude(latitude) {
    this.latitude = latitude;
    return this;
  }

  /**
   * @param {number} longitude
   * @returns {LocationSearchResult}
   */
  addLongitude(longitude) {
    this.longitude = longitude;
    return this;
  }

  /**
   * @param {string} name
   * @returns {LocationSearchResult}
   */
  addName(name) {
    this.name = name;
    return this;
  }

  /**
   * @param {number} houseNumber
   * @returns {LocationSearchResult}
   */
  addHouseNumber(houseNumber) {
    this.houseNumber = houseNumber;
    return this;
  }

  /**
   * @param {string} road
   * @returns {LocationSearchResult}
   */
  addRoad(road) {
    this.road = road;
    return this;
  }

  /**
   * @param {string} neighborhood
   * @returns {LocationSearchResult}
   */
  addNeighborhood(neighborhood) {
    this.neighborhood = neighborhood;
    return this;
  }

  /**
   * @param {string} suburb
   * @returns {LocationSearchResult}
   */
  addSuburb(suburb) {
    this.suburb = suburb;
    return this;
  }

  /**
   * @param {string} island
   * @returns {LocationSearchResult}
   */
  addIsland(island) {
    this.island = island;
    return this;
  }

  /**
   * @param {string} city
   * @returns {LocationSearchResult}
   */
  addCity(city) {
    this.city = city;
    return this;
  }

  /**
   * @param {string} county
   * @returns {LocationSearchResult}
   */
  addCounty(county) {
    this.county = county;
    return this;
  }

  /**
   * @param {string} state
   * @returns {LocationSearchResult}
   */
  addState(state) {
    this.state = state;
    return this;
  }

  /**
   * @param {string} stateCode
   * @returns {LocationSearchResult}
   */
  addStateCode(stateCode) {
    this.stateCode = stateCode;
    return this;
  }

  /**
   * @param {string} postalCode
   * @returns {LocationSearchResult}
   */
  addPostalCode(postalCode) {
    this.postalCode = postalCode;
    return this;
  }

  /**
   * @param {string} country
   * @returns {LocationSearchResult}
   */
  addCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * @param {string} countryCode
   * @returns {LocationSearchResult}
   */
  addCountryCode(countryCode) {
    this.countryCode = countryCode;
    return this;
  }

  /**
   * @param {Uint8Array} map
   * @returns {LocationSearchResult}
   */
  addMap(map) {
    this.map = map;
    return this;
  }

  addMapUri(mapUri) {
    this.mapUri = mapUri;
    return this;
  }
}
