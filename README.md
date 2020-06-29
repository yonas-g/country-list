Get world countries. \
Minimal countries information finder

## countryCode

find country by country code
accepts both iso2 ( 2 letter) and iso3 ( 3 letter ) code

`@param {string} code`

```javascript
import { countryFinder } from "https://deno.land/x/countryfinder/mod.ts";
let result = countryFinder.countryCode("et");
/***
	{
		"id": 231,
		"name": "Ethiopia",
		"iso2": "ET",
		"iso3": "ETH",
		"continent": "Africa",
		"lat": "9.145",
		"long": "40.489673"
	}
*/
```

`@param {string} code`

## id

find by using unique number of a country

`@param {number} id`

```javascript
import { countryFinder } from "https://deno.land/x/countryfinder/mod.ts";
let result = countryFinder.id(344);
/***
	{
		"id": 344,
		"name": "Hong Kong",
		"iso2": "HK",
		"iso3": "HKG",
		"continent": "Asia",
		"lat": "22.396428",
		"long": "114.109497"
	}
*/
```

## name

Find by using country name

`@param {string} name`

```javascript
import { countryFinder } from "https://deno.land/x/countryfinder/mod.ts";
let result = countryFinder.name("Ethiopia");
/***
	{
		"id": 231,
		"name": "Ethiopia",
		"iso2": "ET",
		"iso3": "ETH",
		"continent": "Africa",
		"lat": "9.145",
		"long": "40.489673"
	}
*/
```

## continent

returns a list of countries that match a given continent

`@param {string} continent`

```javascript
import { countryFinder } from "https://deno.land/x/countryfinder/mod.ts";
let result = countryFinder.continent("Africa");
/***
[
  {
    id: 12,
    name: 'Algeria',
    iso2: 'DZ',
    iso3: 'DZA',
    continent: 'Africa',
    lat: '28.033886',
    long: '1.659626'
  },
  {
    id: 24,
    name: 'Angola',
    iso2: 'AO',
    iso3: 'AGO',
    continent: 'Africa',
    lat: '-11.202692',
    long: '17.873887'
  },
  .
  .
  .]
*/
```

## all

a list of available countries with the following parameters

```javascript
import { countryFinder } from "https://deno.land/x/countryfinder/mod.ts";
let result = countryFinder.all();
/***
[
  {
    id: 12,
    name: 'Algeria',
    iso2: 'DZ',
    iso3: 'DZA',
    continent: 'Africa',
    lat: '28.033886',
    long: '1.659626'
  },
  {
    id: 24,
    name: 'Angola',
    iso2: 'AO',
    iso3: 'AGO',
    continent: 'Africa',
    lat: '-11.202692',
    long: '17.873887'
  },
  .
  .
  .]
*/
```

##### The following information is associated with each country

-   id
-   name
-   iso2
-   iso3
-   continent
-   lat
-   long


## flags
Start the flag server via: 

```

deno run --allow-read --allow-net flagserver.ts

```