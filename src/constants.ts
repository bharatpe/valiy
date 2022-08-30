/**
 * @name PAN_REGEX
 * @example BUFPP9037C
 * @description
 *    - First 5 alphabets
 *    - followed by 4 numerals
 *    - followed by one alphabets
 */
export const PAN_REGEX = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

/**
 * @name AADHAAR_REGEX
 * @example 5858 5119 3566
 * @description: 12 Digits
 */
export const AADHAAR_REGEX = /^\d{4}\d{4}\d{4}?$/;

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
export const GST_REGEX =
  /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

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
export const PASSPORT_REGEX = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/;

/**
 * @name VOTER_ID_REGEX
 * @example GDN0225185
 * @description It should be 10 characters long
 *  - First 3 alphabets
 *  - Followed by 7 numbers
 */
export const VOTER_ID_REGEX = /^([a-zA-Z]){3}([0-9]){7}?$/;

/**
 * @name PHONE_NUMBER_REGEX
 * @example 8880344456 | +918880344456 | +91 8880344456 | +91-8880344456 | 08880344456 | 918880344456
 * @description Mobile number validation with all cases +91,0,Without prefix. mobile number should start with 6,7,8,9.
 */
export const PHONE_NUMBER_REGEX = /^(\+91[-\s]?)?[0]?(91[-\s]?)?[56789]\d{9}$/;

/**
 * @name PINCODE_REGEX
 * @example 770018
 * @description It should be 6 digit number
 *  - First digit cannot be 0
 */
export const PINCODE_REGEX = /^[1-9][0-9]{5}$/;

/**
 * @name ONLY_NUMBERS_REGEX
 * @example 1234
 * @description All numbers regex
 */
export const ONLY_NUMBERS_REGEX = /^[0-9]+$/;

/**
 * @name ONLY_STRING_REGEX
 * @example Bharatpe
 * @description All string regex
 */
export const ONLY_STRING_REGEX = /^[a-zA-Z]+$/;

/**
 * @name ALPHANUMERIC_REGEX
 * @example abcDeF124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
export const ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]+$/;

/**
 * @name ALPHANUMERIC_WITH_SPACE_REGEX
 * @example abcD eF 124
 * @description Alpanumeric contains mix of numbers and alpahbets with spaces in between
 */
export const ALPHANUMERIC_WITH_SPACE_REGEX = /^[a-zA-Z0-9 ]+$/;

// TODO accepts only space - need to fix
/**
 * @name USERNAME_REGEX
 * @example abcDe_F124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_-]+$/;

/**
 * @name FULL_NAME_REGEX
 * @example MOHANA KRISHNA PADDA
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
export const FULL_NAME_REGEX = /^[a-zA-Z][a-zA-Z ]+$/;

// TODO accepting empty string - need to fix
/**
 * @name EMAIL_REGEX
 * @example krish@bharatpe.com | tech@geek.io.in | hack_12RT.Y56_RT@hc.st.io
 * @description Common email validator
 *  - Start with alphanumeric
 *  - Followed by alphanumeric with underscore, dot allowed
 *  - With @ followed by domain name
 */
export const EMAIL_REGEX =
  /^([a-zA-Z0-9][a-zA-Z0-9_.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

/**
 * @name WEB_URL_REGEX
 * @example bharatpe.com | www.bharatpe.io | https://bharatpe.com | http://bharatpe.com?file=jus_.F-filename_
 * @description Common Web url format
 */
export const WEB_URL_REGEX =
  /(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
