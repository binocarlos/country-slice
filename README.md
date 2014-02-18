country-slice
=============

An array of country data exposed that can be mapped or filtered

## install

```bash
$ npm install country-slice
```

## source

the data was extracted from [mledoze/countries](https://github.com/mledoze/countries)

each country object has the following fields:

```js
{ name: 'Afghanistan',
  nativeName: 'Afġānistān',
  tld: [ '.af' ],
  cca2: 'AF',
  ccn3: '004',
  cca3: 'AFG',
  currency: [ 'AFN' ],
  callingCode: [ '93' ],
  capital: 'Kabul',
  altSpellings: [ 'AF', 'Afġānistān' ],
  relevance: '0',
  region: 'Asia',
  subregion: 'Southern Asia',
  language: [ 'Pashto', 'Dari' ],
  languagesCodes: [ 'ps', 'uz', 'tk' ],
  translations:
   { de: 'Afghanistan',
     en: 'Afghanistan',
     es: 'Afganistán',
     fr: 'Afghanistan',
     it: 'Afghanistan',
     ja: 'アフガニスタン',
     nl: 'Afghanistan' },
  population: 25500100,
  latlng: [ 33, 65 ],
  demonym: 'Afghan',
  borders: [ 'IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN' ] }
```

## usage

There are a few ways to consume the list of countries:

### raw()

This returns the json file by 'require'

```js
var countries = require('country-slice');

var list = countries.raw();
```

### stream()

This returns an object stream that emits one country per data event:

```js
var countries = require('country-slice');

var list = countries.stream();

list.on('data', function(country){

	// country is a JSON object
})
```

### filepath()

This returns the full filepath to the .json file of countries

```js
var countries = require('country-slice');

var filepath = countries.filepath();

// e.g. /srv/projects/country-slice/src/countries.json

```


### filestream()

This returns a fs.createReadStream on the json file

```js
var countries = require('country-slice');

var stream = countries.filestream();
```

