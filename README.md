
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
PCAddressFormatter.street('123 North Happy Street'); // => '123 N Happy St';
PCAddressFormatter.city('San Antonio'); // => 'San Antonio';
PCAddressFormatter.state('Arizona'); // => 'AZ';
PCAddressFormatter.country('United States of America'); // => 'US';
PCAddressFormatter.zipCode(85234); // => '85234';
```

You can replace PCAddressFormatter with any variable.


Methods
-------

[Unit Tests] are an additional resource for learning functionality.

### - street(input)

Example:

```javascript
PCAddressFormatter.street('123 North Happy Street'); // => '123 N Happy St;
```

### - city(input)

Example:

```javascript
PCAddressFormatter.city('San Antonio'); // => 'San Antonio';
```

### - state(input)

Example:

```javascript
PCAddressFormatter.state('Arizona'); // => 'AZ';
```

### - country(input)

Example:

```javascript
PCAddressFormatter.country('United States of America'); // => 'US';
```

### - zipcode(input)


Example:

```javascript
PCAddressFormatter.zipcode(85234); // => '85234';
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
