export default class SearchResult {
  /**
   * Unique identifier for a result
   * {number}
   */
  id;
  /**
   * Latitude of the result
   * {number}
   */
  latitude;
  /**
   * Longitude of the result
   * {number}
   */
  longitude;
  /**
   * House name or Point of Interest (POI) such as a Cafe or School
   * {string}
   */
  name;
  /**
   * House or Building number
   * {number}
   */
  houseNumber;
  /**
   * Roads, Highways, Freeways, Motorways
   * {string}
   */
  road;
  /**
   * Neighbourhoods, Allotments, Quarters, Communities
   * {string}
   */
  neighborhood;
  /**
   * Suburbs, Subdivisions
   * {string}
   */
  suburb;
  /**
   * Islands, Islets
   * {string}
   */
  island;
  /**
   * Cities, Towns, Villages, Municipalities, Districts, Boroughs, Hamlets
   * {string}
   */
  city;
  /**
   * Counties
   * {string}
   */
  county;
  /**
   * States, Provinces, Regions, State Districts
   * {string}
   */
  state;
  /**
   * State or Province Code
   * {string}
   */
  stateCode;
  /**
   * Postal Codes, Zipcodes
   * {string}
   */
  postalCode;
  /**
   * Countries, Nation-states
   * {string}
   */
  country;
  /**
   * Country Code - 2 letter (ISO 3166-1 alpha-2)
   * {string}
   */
  countryCode;

/*
  constructor(result) {
    const {display_name, place_id, lat, lon} = result;
    const {
      country,
      house_number,
      suburb,
      postcode,
      state,
      road,
      neighbourhood,
      county,
      country_code,
      state_code,
      island,
      city
    } = result.address;

    this.id = place_id || -1;
    this.latitude = lat || undefined;
    this.longitude = lon || undefined;
    this.name = display_name || undefined;
    this.houseNumber = house_number || undefined;
    this.road = road || undefined;
    this.neighborhood = neighbourhood || undefined;
    this.suburb = suburb || undefined;
    this.island = island || undefined;
    this.city = city || undefined;
    this.county = county || undefined;
    this.state = state || undefined;
    this.stateCode = state_code || undefined;
    this.postalCode = postcode || undefined;
    this.country = country || undefined;
    this.countryCode = country_code || undefined;
  }
*/

  /**
   * @param {number} id
   * @returns {SearchResult}
   */
  addId(id) {
    this.id = id;
    return this;
  }

  /**
   * @param {number} latitude
   * @returns {SearchResult}
   */
  addLatitude(latitude) {
    this.latitude = latitude;
    return this;
  }

  /**
   * @param {number} longitude
   * @returns {SearchResult}
   */
  addLongitude(longitude) {
    this.longitude = longitude;
    return this;
  }

  /**
   * @param {string} name
   * @returns {SearchResult}
   */
  addName(name) {
    this.name = name;
    return this;
  }

  /**
   * @param {number} houseNumber
   * @returns {SearchResult}
   */
  addHouseNumber(houseNumber) {
    this.houseNumber = houseNumber;
    return this;
  }

  /**
   * @param {string} road
   * @returns {SearchResult}
   */
  addRoad(road) {
    this.road = road;
    return this;
  }

  /**
   * @param {string} neighborhood
   * @returns {SearchResult}
   */
  addNeighborhood(neighborhood) {
    this.neighborhood = neighborhood;
    return this;
  }

  /**
   * @param {string} suburb
   * @returns {SearchResult}
   */
  addSuburb(suburb) {
    this.suburb = suburb;
    return this;
  }

  /**
   * @param {string} island
   * @returns {SearchResult}
   */
  addIsland(island) {
    this.island = island;
    return this;
  }

  /**
   * @param {string} city
   * @returns {SearchResult}
   */
  addCity(city) {
    this.city = city;
    return this;
  }

  /**
   * @param {string} county
   * @returns {SearchResult}
   */
  addCounty(county) {
    this.county = county;
    return this;
  }

  /**
   * @param {string} state
   * @returns {SearchResult}
   */
  addState(state) {
    this.state = state;
    return this;
  }

  /**
   * @param {string} stateCode
   * @returns {SearchResult}
   */
  addStateCode(stateCode) {
    this.stateCode = stateCode;
    return this;
  }

  /**
   * @param {string} postalCode
   * @returns {SearchResult}
   */
  addPostalCode(postalCode) {
    this.postalCode = postalCode;
    return this;
  }

  /**
   * @param {string} country
   * @returns {SearchResult}
   */
  addCountry(country) {
    this.country = country;
    return this;
  }

  /**
   * @param {string} countryCode
   * @returns {SearchResult}
   */
  addCountryCode(countryCode) {
    this.countryCode = countryCode;
    return this;
  }
}
