# Valiy [![NPM version](https://img.shields.io/npm/v/valiy.svg)](https://www.npmjs.com/package/valiy) [![Downloads](http://img.shields.io/npm/dm/valiy.svg)](https://npmjs.org/package/valiy)

A mini regex library for most commonly used patterns

![Valiy](/assets/valiy.png)

## Regex
 - Pan Card
 - Aadhaar Card
 - GST Number
 - Passport
 - Voter ID
 - Phone number,
 - Pincode,
 - Pure numbers,
 - Pure string,
 - Alphanumeric,
 - Alphanumeric with spaces,
 - Username,
 - Fullname
 - Email
 - Web URL


 # Getting Started (Installation)

```javascript
yarn add @bp/valiy

or

npm i @bp/valiy
```

--------------------------------------------------------------------------------
## Validate Methods

  Method                          |     Params               |        Description
----------------------------------|--------------------------|----------------------------
  validate                        |   regex, value[string]   |  Custom validation - validate(regex, value) returns boolean
  validatePan                     |      value[string]       |  Pan validation - validatePan(value) returns boolean
  validateAadhaar                 |      value[string]       |  Aadhar validation - validateAadhaar(value) returns boolean 
  validateGST                     |      value[string]       |  GST validation - validateGST(value) returns boolean
  validatePassport                |      value[string]       |  Passport validation - validatePassport(value) returns boolean
  validateVoterId                 |      value[string]       |  VoterID validation - validateVoterId(value) returns boolean
  validatePhone                   |      value[string]       |  Phone number validation - validatePhone(value) returns boolean
  validatePincode                 |      value[string]       |  Pincode validation - validatePincode(value) returns boolean
  validateOnlyString              |      value[string]       |  String validation - validateOnlyString(value) returns boolean
  validateOnlyNumber              |      value[string]       |  Number validation - validateOnlyNumber(value) returns boolean
  validateAlphanumeric            |      value[string]       |  Alphanumeric validation - validateAlphanumeric(value) returns boolean
  validateAlphanumericWithSpace   |      value[string]       |  Alphanumeric with space validation - validateAlphanumericWithSpace(value) returns boolean
  validateFullname                |      value[string]       |  Full name validation - validateFullname(value) returns boolean
  validateUsername                |      value[string]       |  Username validation - validateUsername(value) returns boolean
  validateEmail                   |      value[string]       |  Email validation - validateEmail(value) returns boolean
  validateWebUrl                  |      value[string]       |  Web URL validation - validateWebUrl(value) returns boolean

--------------------------------------------------------------------------------------------------


## Usage
```javascript
import { Validator, Regex } from '@bp/valiy';

// PAN Validation
Validator.validatePan('BUFPP9037C') // True
Validator.validatePan('BUFPP90_37CS') // False

// AADHAR Validation
Validator.validateAadhaar('5858 5119 3566') // True


// Full name validation
Validator.validateFullname('ABDUL KALAM AZAAD') // True
Validator.validateFullname('0345_KRISH') // False


// Validate GST
Validator.validateGST('07CQZCD1111I4Z7') // True


// Can get Regex directly
Regex.PAN_REGEX;  // /[A-Z]{5}[0-9]{4}[A-Z]{1}$/


// Custom validation
Validator.validate(SOME_REGEX, 'VALUE1234'); // True or False


// Can import individual function or regex
import { validate, PAN_REGEX, validateFullname } from '@bp/valiy';

// Full name validation
Validator.validateFullname('ABDUL KALAM AZAAD') // True
Validator.validateFullname('0345_KRISH') // False

// Custom validation
Validator.validate(PAN_REGEX, 'BUFPP9037C'); // True
Validator.validate(PAN_REGEX, 'BUFPP90_37CS'); // False

// Custom validation
Validator.validate(SOME_REGEX, 'VALUE1234'); // True or False

```


### Regex Conditions

#### PAN
```javascript
/**
 * @name PAN_REGEX
 * @example BUFPP9037C
 * @description 
 *    - First 5 alphabets
 *    - followed by 4 numberals
 *    - followed by one alphabets
 */
```

#### Aadhar
```javascript
/**
 * @name AADHAAR_REGEX
 * @example 585851193566
 * @description: 12 Digits
 */
```

#### GST
```javascript
/**
 * @name GST_REGEX
 * @example 27AAPFU0939F1ZV
 * @description Total 15 characters
 *  - First 2 digits of the GST Number will represent State Code as per the Census (2011).
    - Next 10 digits will be same as in the PAN number of the taxpayer.
       - First five will be alphabets
       - Next four will be numbers
       - Last will be check code
    - The 13th digit will be the number of registration you take within a state i.e. after 9, A to Z is considered as 10 to 35 .
    - 14th digit will be Z by default.
    - Last would be the check code. 
 */
```

#### Passport
```javascript
/**
 * @name PASSPORT_REGEX
 * @example A2096457
 * @description It should be eight characters long. 
 *  - The first character should be an upper case alphabet. 
 *  - The next two characters should be a number, but the first character should be any number from 1-9 and the second character should be any number from 0-9.
 *  - It should be zero or one white space character.
 *  - The next four characters should be any number from 0-9.
 *  - The last character should be any number from 1-9.
 */
```

#### Voter ID
```javascript
/**
 * @name VOTER_ID_REGEX
 * @example GDN0225185
 * @description It should be 10 characters long
 *  - First 3 alphabets
 *  - Followed by 7 numbers
 */
```

#### Phone number
```javascript
/**
 * @name PHONE_NUMBER_REGEX
 * @example 8880344456 | +918880344456 | +91 8880344456 | +91-8880344456 | 08880344456 | 918880344456
 * @description Mobile number validation with all cases +91,0,Without prefix.
 */
```

#### Pincode
```javascript
/**
 * @name PINCODE_REGEX
 * @example 770018
 * @description It should be 6 digit number
 *  - First digit cannot be 0
 */
```

#### Only strings
```javascript
/**
 * @name ONLY_STRING_REGEX
 * @example Bharatpe
 * @description All string regex
 */
```

#### Numbers
```javascript
/**
 * @name ONLY_NUMBERS_REGEX
 * @example 1234
 * @description All numbers regex
 */
```

#### Alphanumeric
```javascript
/**
 * @name ALPHANUMERIC_REGEX
 * @example abcDeF124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
```

#### Alphanumeric with string
```javascript
/**
 * @name ALPHANUMERIC_WITH_SPACE_REGEX
 * @example abcD eF 124
 * @description Alpanumeric contains mix of numbers and alpahbets with spaces in between
 */
```

#### Username
```javascript
/**
 * @name USERNAME_REGEX
 * @example abcDe_F124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
```

#### Fullname
```javascript
/**
 * @name FULL_NAME_REGEX
 * @example MOHANA KRISHNA PADDA
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
```

#### Email
```javascript
/**
 * @name EMAIL_REGEX
 * @example krish@bharatpe.com | tech@geek.io.in | hack_12RT.Y56_RT@hc.st.io
 * @description Common email validator
 *  - Start with alphanumeric
 *  - Followed by alphanumeric with underscore, dot allowed
 *  - With @ followed by domain name
 */
```

#### Web URL
```javascript
/**
 * @name WEB_URL_REGEX
 * @example bharatpe.com | www.bharatpe.io | https://bharatpe.com | http://bharatpe.com?file=jus_.F-filename_
 * @description Common Web url format
 */
 ```


## Contributors
Here [Contributors](https://github.com/bharatpe/validator/graphs/contributors)


## License
MIT @[bharatpe](https://bharatpe.in)
