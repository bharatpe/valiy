import * as Constants from './constants';

/**
 * @name validate
 * @args RegExp and a string value
 * @return boolean
 * @example validate(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "QWERT2345Y")
 * @description 
 *    validates with given regex and return true / false
 */
export const validate = (regex: RegExp, value: string) => {
  return regex.test(value);
};

/**
 * @name validatePan
 * @args string value
 * @return boolean
 * @example BUFPP9037C
 * @description 
 *    - First 5 alphabets
 *    - followed by 4 numberals
 *    - followed by one alphabets
 */
export const validatePan = (value: string): boolean => {
  return validate(Constants.PAN_REGEX, value);
};

/**
 * @name validateAadhaar
 * @args string value
 * @return boolean
 * @example 585851193566
 * @description 
 *    - 12 Digits
 */
export const validateAadhaar = (value: string): boolean => {
  return validate(Constants.AADHAAR_REGEX, value);
};

/**
  * @name validateGST
  * @args string value
  * @return boolean
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
export const validateGST = (value: string): boolean => {
  return validate(Constants.GST_REGEX, value);
};

/**
 * @name validatePassport
 * @args string value
 * @return boolean
 * @example A2096457
 * @description It should be eight characters long.
 *  - The first character should be an upper case alphabet.
 *  - The next two characters should be a number, but the first character should be any number from 1-9 and the second character should be any number from 0-9.
 *  - It should be zero or one white space character.
 *  - The next four characters should be any number from 0-9.
 *  - The last character should be any number from 1-9.
 */
export const validatePassport = (value: string): boolean => {
  return validate(Constants.PASSPORT_REGEX, value);
};

/**
 * @name validateVoterId
 * @args string value
 * @return boolean
 * @example GDN0225185
 * @description It should be 10 characters long
 *  - First 3 alphabets
 *  - Followed by 7 numbers
 */
export const validateVoterId = (value: string): boolean => {
  return validate(Constants.VOTER_ID_REGEX, value);
};

/**
 * @name validatePhone
 * @args string value
 * @return boolean
 * @example 8880344456 | +918880344456 | +91 8880344456 | +91-8880344456 | 08880344456 | 918880344456
 * @description Mobile number validation with all cases +91,0,Without prefix. mobile number should start with 6,7,8,9.
 */
export const validatePhone = (value: string): boolean => {
  return validate(Constants.PHONE_NUMBER_REGEX, value);
};

/**
 * @name validatePincode
 * @args string value
 * @return boolean
 * @example 770018
 * @description It should be 6 digit number
 *  - First digit cannot be 0
 */
export const validatePincode = (value: string): boolean => {
  return validate(Constants.PINCODE_REGEX, value);
};

/**
 * @name validateOnlyNumber
 * @args string value
 * @return boolean
 * @example 1234
 * @description All numbers regex
 */
export const validateOnlyNumber = (value: string): boolean => {
  return validate(Constants.ONLY_NUMBERS_REGEX, value);
};

/**
 * @name validateOnlyString
 * @args string value
 * @return boolean
 * @example Bharatpe
 * @description All string regex
 */
export const validateOnlyString = (value: string): boolean => {
  return validate(Constants.ONLY_STRING_REGEX, value);
};

/**
 * @name validateAlphanumeric
 * @args string value
 * @return boolean
 * @example abcDeF124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
export const validateAlphanumeric = (value: string): boolean => {
  return validate(Constants.ALPHANUMERIC_REGEX, value);
};

/**
 * @name validateAlphanumericWithSpace
 * @args string value
 * @return boolean
 * @example abcD eF 124
 * @description Alpanumeric contains mix of numbers and alpahbets with spaces in between
 */
export const validateAlphanumericWithSpace = (value: string): boolean => {
  return validate(Constants.ALPHANUMERIC_WITH_SPACE_REGEX, value);
};

/**
 * @name validateUsername
 * @args string value
 * @return boolean
 * @example abcDe_F124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
export const validateUsername = (value: string): boolean => {
  return validate(Constants.USERNAME_REGEX, value);
};

/**
 * @name validateFullname
 * @args string value
 * @return boolean
 * @example MOHANA KRISHNA PADDA
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
export const validateFullname = (value: string): boolean => {
  return validate(Constants.FULL_NAME_REGEX, value);
};

/**
 * @name validateEmail
 * @args string value
 * @return boolean
 * @example krish@bharatpe.com | tech@geek.io.in | hack_12RT.Y56_RT@hc.st.io
 * @description Common email validator
 *  - Start with alphanumeric
 *  - Followed by alphanumeric with underscore, dot allowed
 *  - With @ followed by domain name
 */
export const validateEmail = (value: string): boolean => {
  return validate(Constants.EMAIL_REGEX, value);
};

/**
 * @name validateWebUrl
 * @args string value
 * @return boolean
 * @example bharatpe.com | www.bharatpe.io | https://bharatpe.com | http://bharatpe.com?file=jus_.F-filename_
 * @description Common Web url format
 */
export const validateWebUrl = (value: string): boolean => {
  return validate(Constants.WEB_URL_REGEX, value);
};
