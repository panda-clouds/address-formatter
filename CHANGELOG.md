## PCAddressFormatter Changelog

### master
[Full Changelog](https://github.com/panda-clouds/address-formatter/compare/2.0.0...master)

### 2.4.0

- added plusFour and tests
- added sipcodePlusFour and tests
- added test for "unit" return null
- added test for "unit" with letters

### 2.3.0

- truncated the plus 4 from zipcode for uniform entry

### 2.2.1

- removed logs

### 2.2.0

- added PL option
- avoid clobbering the string if we can't find the C1

### 2.1.0

- added real life examples seen in production
- unit/lot numbers
- Periods after C1

### 2.0.0

This version moves from "ALL CAPS" to "Title Case"

- country now return US instead of USA
- street (123 N Happy St > 123 HAPPY ST)
- state (GILBERT > Gilbert)