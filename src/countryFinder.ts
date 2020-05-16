import countries from "./data/countries.json";

/**
 * Find country by country iso2 or iso3 code
 * eg: US || us for USA
 *     ET || et || ETH || eth for Ethiopia
 * @param {string} code
 */

export const countryCode = (code: string) => {
    code = code.toUpperCase();
    if (code.length == 2) {
        return countries.find((c) => c.iso2 == code);
    } else {
        return countries.find((c) => c.iso3 == code);
    }
};

/**
 * Find by using unique number id of a country
 * @param {number} id
 */
export const id = (id: number) => countries.find((c) => c.id == id);

/**
 * Find by using country name
 * eg: Ethiopia
 * @param {string} name
 */
export const name = (name: string) => {
    name = name.toLowerCase();
    return countries.find((c) => c.name.toLowerCase() == name);
};

/**
 * Finder countries by continent name
 * eg: Africa
 *     Asia
 * @param {string} continent
 * @returns {array} list of countries
 */
export const continent = (continent: string) => {
    continent = continent.toLowerCase();
    return countries.filter((c) => c.continent.toLowerCase() == continent);
};

/**
 * A list of all available countries with the following parameters
 * @returns {array}
 *          list of all available countries
 */

export const all = (): Array<any> => countries;
