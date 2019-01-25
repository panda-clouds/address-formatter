
PCAddressFormatter
=========
maintained by [PandaClouds.com](https://pandaclouds.com)

`PCAddressFormatter` is a lightweight JavaScript library for Node.js that provides formatting of postal addresses.


Installation
------------

1. If you want to use this library, you first need to install the [Node.js](https://nodejs.org/en/).

2. When you install node.js, will also be installed [npm](https://www.npmjs.com/).

3. Please run the following command.

```
npm install --save @panda-clouds/address-formatter
```

Usage
-----

### Node.js

```javascript
const PCAddressFormatter = require('@panda-clouds/address-formatter');

// example usage
PCAddressFormatter.street('123 North Happy Street'); // => '123 N HAPPY ST';
PCAddressFormatter.city('San Antonio'); // => 'SAN ANTONIO';
PCAddressFormatter.state('Arizona'); // => 'AZ';
PCAddressFormatter.country('United States of America'); // => 'USA';
PCAddressFormatter.zipCode(85234); // => '85234';
```

You can replace PCAddressFormatter with any variable.


Methods
-------

[Unit Tests] are an additional resource for learning functionality.

### - street(input)

Returns the street input formatted in the following way.
1. Convert to uppercase
2. NORTH > N and N. > N
3. DRIVE > DR
4. Remove leading and trailing spaces

Example:

```javascript
PCAddressFormatter.street('123 North Happy Street'); // => '123 N HAPPY ST';
```

### - city(input)

Returns the city input formatted in the following way.
1. Convert to uppercase
2. Remove leading and trailing spaces

Example:

```javascript
PCAddressFormatter.city('San Antonio'); // => 'SAN ANTONIO';
```

### - state(input)

Returns the state input formatted in the following way.
1. Convert to uppercase
2. Remove all spaces
3. Remove all periods
4. ALABAMA > AL
5. Remove leading and trailing spaces

Example:

```javascript
PCAddressFormatter.state('Arizona'); // => 'AZ';
```

### - country(input)

Returns the country input formatted in the following way.
1. Convert to uppercase
2. Remove all spaces
3. UNITEDSTATESOFAMERICA > USA
4. Remove leading and trailing spaces

Example:

```javascript
PCAddressFormatter.country('United States of America'); // => 'USA';
```

### - zipCode(input)

Returns the zipCode input formatted in the following way.
1. Convert to string
2. Remove all spaces
3. Remove leading and trailing spaces

Example:

```javascript
PCAddressFormatter.zipCode(85234); // => '85234';
```




Contributions
-------------

Pull requests are welcome! here is a checklist to speed things up:

- modify `PCAddressFormatter.js`
- add unit tests in `PCAddressFormatter.spec.js`
- run `npm test`
- document method in `README.md`
- add your name to 'Contributors' in `README.md`


### Contributors

(Add your name)

- [*] [Marc Smith](https://github.com/mrmarcsmith)


[Unit Tests]: https://github.com/panda-clouds/string/blob/master/spec/PCAddressFormatter.spec.js
