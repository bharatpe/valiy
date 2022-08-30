/**
 * @name validate
 * @args RegExp and a string value
 * @return boolean
 * @example validate(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "QWERT2345Y")
 * @description
 *    validates with given regex and return true / false
 */
declare const validate: (regex: RegExp, value: string) => boolean;
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
declare const validatePan: (value: string) => boolean;
/**
 * @name validateAadhaar
 * @args string value
 * @return boolean
 * @example 585851193566
 * @description
 *    - 12 Digits
 */
declare const validateAadhaar: (value: string) => boolean;
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
declare const validateGST: (value: string) => boolean;
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
declare const validatePassport: (value: string) => boolean;
/**
 * @name validateVoterId
 * @args string value
 * @return boolean
 * @example GDN0225185
 * @description It should be 10 characters long
 *  - First 3 alphabets
 *  - Followed by 7 numbers
 */
declare const validateVoterId: (value: string) => boolean;
/**
 * @name validatePhone
 * @args string value
 * @return boolean
 * @example 8880344456 | +918880344456 | +91 8880344456 | +91-8880344456 | 08880344456 | 918880344456
 * @description Mobile number validation with all cases +91,0,Without prefix. mobile number should start with 6,7,8,9.
 */
declare const validatePhone: (value: string) => boolean;
/**
 * @name validatePincode
 * @args string value
 * @return boolean
 * @example 770018
 * @description It should be 6 digit number
 *  - First digit cannot be 0
 */
declare const validatePincode: (value: string) => boolean;
/**
 * @name validateOnlyNumber
 * @args string value
 * @return boolean
 * @example 1234
 * @description All numbers regex
 */
declare const validateOnlyNumber: (value: string) => boolean;
/**
 * @name validateOnlyString
 * @args string value
 * @return boolean
 * @example Bharatpe
 * @description All string regex
 */
declare const validateOnlyString: (value: string) => boolean;
/**
 * @name validateAlphanumeric
 * @args string value
 * @return boolean
 * @example abcDeF124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
declare const validateAlphanumeric: (value: string) => boolean;
/**
 * @name validateAlphanumericWithSpace
 * @args string value
 * @return boolean
 * @example abcD eF 124
 * @description Alpanumeric contains mix of numbers and alpahbets with spaces in between
 */
declare const validateAlphanumericWithSpace: (value: string) => boolean;
/**
 * @name validateUsername
 * @args string value
 * @return boolean
 * @example abcDe_F124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
declare const validateUsername: (value: string) => boolean;
/**
 * @name validateFullname
 * @args string value
 * @return boolean
 * @example MOHANA KRISHNA PADDA
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
declare const validateFullname: (value: string) => boolean;
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
declare const validateEmail: (value: string) => boolean;
/**
 * @name validateWebUrl
 * @args string value
 * @return boolean
 * @example bharatpe.com | www.bharatpe.io | https://bharatpe.com | http://bharatpe.com?file=jus_.F-filename_
 * @description Common Web url format
 */
declare const validateWebUrl: (value: string) => boolean;

declare const validator_d_validate: typeof validate;
declare const validator_d_validatePan: typeof validatePan;
declare const validator_d_validateAadhaar: typeof validateAadhaar;
declare const validator_d_validateGST: typeof validateGST;
declare const validator_d_validatePassport: typeof validatePassport;
declare const validator_d_validateVoterId: typeof validateVoterId;
declare const validator_d_validatePhone: typeof validatePhone;
declare const validator_d_validatePincode: typeof validatePincode;
declare const validator_d_validateOnlyNumber: typeof validateOnlyNumber;
declare const validator_d_validateOnlyString: typeof validateOnlyString;
declare const validator_d_validateAlphanumeric: typeof validateAlphanumeric;
declare const validator_d_validateAlphanumericWithSpace: typeof validateAlphanumericWithSpace;
declare const validator_d_validateUsername: typeof validateUsername;
declare const validator_d_validateFullname: typeof validateFullname;
declare const validator_d_validateEmail: typeof validateEmail;
declare const validator_d_validateWebUrl: typeof validateWebUrl;
declare namespace validator_d {
  export {
    validator_d_validate as validate,
    validator_d_validatePan as validatePan,
    validator_d_validateAadhaar as validateAadhaar,
    validator_d_validateGST as validateGST,
    validator_d_validatePassport as validatePassport,
    validator_d_validateVoterId as validateVoterId,
    validator_d_validatePhone as validatePhone,
    validator_d_validatePincode as validatePincode,
    validator_d_validateOnlyNumber as validateOnlyNumber,
    validator_d_validateOnlyString as validateOnlyString,
    validator_d_validateAlphanumeric as validateAlphanumeric,
    validator_d_validateAlphanumericWithSpace as validateAlphanumericWithSpace,
    validator_d_validateUsername as validateUsername,
    validator_d_validateFullname as validateFullname,
    validator_d_validateEmail as validateEmail,
    validator_d_validateWebUrl as validateWebUrl,
  };
}

/**
 * @name PAN_REGEX
 * @example BUFPP9037C
 * @description
 *    - First 5 alphabets
 *    - followed by 4 numerals
 *    - followed by one alphabets
 */
declare const PAN_REGEX: RegExp;
/**
 * @name AADHAAR_REGEX
 * @example 5858 5119 3566
 * @description: 12 Digits
 */
declare const AADHAAR_REGEX: RegExp;
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
declare const GST_REGEX: RegExp;
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
declare const PASSPORT_REGEX: RegExp;
/**
 * @name VOTER_ID_REGEX
 * @example GDN0225185
 * @description It should be 10 characters long
 *  - First 3 alphabets
 *  - Followed by 7 numbers
 */
declare const VOTER_ID_REGEX: RegExp;
/**
 * @name PHONE_NUMBER_REGEX
 * @example 8880344456 | +918880344456 | +91 8880344456 | +91-8880344456 | 08880344456 | 918880344456
 * @description Mobile number validation with all cases +91,0,Without prefix. mobile number should start with 6,7,8,9.
 */
declare const PHONE_NUMBER_REGEX: RegExp;
/**
 * @name PINCODE_REGEX
 * @example 770018
 * @description It should be 6 digit number
 *  - First digit cannot be 0
 */
declare const PINCODE_REGEX: RegExp;
/**
 * @name ONLY_NUMBERS_REGEX
 * @example 1234
 * @description All numbers regex
 */
declare const ONLY_NUMBERS_REGEX: RegExp;
/**
 * @name ONLY_STRING_REGEX
 * @example Bharatpe
 * @description All string regex
 */
declare const ONLY_STRING_REGEX: RegExp;
/**
 * @name ALPHANUMERIC_REGEX
 * @example abcDeF124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
declare const ALPHANUMERIC_REGEX: RegExp;
/**
 * @name ALPHANUMERIC_WITH_SPACE_REGEX
 * @example abcD eF 124
 * @description Alpanumeric contains mix of numbers and alpahbets with spaces in between
 */
declare const ALPHANUMERIC_WITH_SPACE_REGEX: RegExp;
/**
 * @name USERNAME_REGEX
 * @example abcDe_F124
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
declare const USERNAME_REGEX: RegExp;
/**
 * @name FULL_NAME_REGEX
 * @example MOHANA KRISHNA PADDA
 * @description Alpanumeric contains mix of numbers and alpahbets
 */
declare const FULL_NAME_REGEX: RegExp;
/**
 * @name EMAIL_REGEX
 * @example krish@bharatpe.com | tech@geek.io.in | hack_12RT.Y56_RT@hc.st.io
 * @description Common email validator
 *  - Start with alphanumeric
 *  - Followed by alphanumeric with underscore, dot allowed
 *  - With @ followed by domain name
 */
declare const EMAIL_REGEX: RegExp;
/**
 * @name WEB_URL_REGEX
 * @example bharatpe.com | www.bharatpe.io | https://bharatpe.com | http://bharatpe.com?file=jus_.F-filename_
 * @description Common Web url format
 */
declare const WEB_URL_REGEX: RegExp;

declare const constants_d_PAN_REGEX: typeof PAN_REGEX;
declare const constants_d_AADHAAR_REGEX: typeof AADHAAR_REGEX;
declare const constants_d_GST_REGEX: typeof GST_REGEX;
declare const constants_d_PASSPORT_REGEX: typeof PASSPORT_REGEX;
declare const constants_d_VOTER_ID_REGEX: typeof VOTER_ID_REGEX;
declare const constants_d_PHONE_NUMBER_REGEX: typeof PHONE_NUMBER_REGEX;
declare const constants_d_PINCODE_REGEX: typeof PINCODE_REGEX;
declare const constants_d_ONLY_NUMBERS_REGEX: typeof ONLY_NUMBERS_REGEX;
declare const constants_d_ONLY_STRING_REGEX: typeof ONLY_STRING_REGEX;
declare const constants_d_ALPHANUMERIC_REGEX: typeof ALPHANUMERIC_REGEX;
declare const constants_d_ALPHANUMERIC_WITH_SPACE_REGEX: typeof ALPHANUMERIC_WITH_SPACE_REGEX;
declare const constants_d_USERNAME_REGEX: typeof USERNAME_REGEX;
declare const constants_d_FULL_NAME_REGEX: typeof FULL_NAME_REGEX;
declare const constants_d_EMAIL_REGEX: typeof EMAIL_REGEX;
declare const constants_d_WEB_URL_REGEX: typeof WEB_URL_REGEX;
declare namespace constants_d {
  export {
    constants_d_PAN_REGEX as PAN_REGEX,
    constants_d_AADHAAR_REGEX as AADHAAR_REGEX,
    constants_d_GST_REGEX as GST_REGEX,
    constants_d_PASSPORT_REGEX as PASSPORT_REGEX,
    constants_d_VOTER_ID_REGEX as VOTER_ID_REGEX,
    constants_d_PHONE_NUMBER_REGEX as PHONE_NUMBER_REGEX,
    constants_d_PINCODE_REGEX as PINCODE_REGEX,
    constants_d_ONLY_NUMBERS_REGEX as ONLY_NUMBERS_REGEX,
    constants_d_ONLY_STRING_REGEX as ONLY_STRING_REGEX,
    constants_d_ALPHANUMERIC_REGEX as ALPHANUMERIC_REGEX,
    constants_d_ALPHANUMERIC_WITH_SPACE_REGEX as ALPHANUMERIC_WITH_SPACE_REGEX,
    constants_d_USERNAME_REGEX as USERNAME_REGEX,
    constants_d_FULL_NAME_REGEX as FULL_NAME_REGEX,
    constants_d_EMAIL_REGEX as EMAIL_REGEX,
    constants_d_WEB_URL_REGEX as WEB_URL_REGEX,
  };
}

export { AADHAAR_REGEX, ALPHANUMERIC_REGEX, ALPHANUMERIC_WITH_SPACE_REGEX, EMAIL_REGEX, FULL_NAME_REGEX, GST_REGEX, ONLY_NUMBERS_REGEX, ONLY_STRING_REGEX, PAN_REGEX, PASSPORT_REGEX, PHONE_NUMBER_REGEX, PINCODE_REGEX, constants_d as Regex, USERNAME_REGEX, VOTER_ID_REGEX, validator_d as Validator, WEB_URL_REGEX, validate, validateAadhaar, validateAlphanumeric, validateAlphanumericWithSpace, validateEmail, validateFullname, validateGST, validateOnlyNumber, validateOnlyString, validatePan, validatePassport, validatePhone, validatePincode, validateUsername, validateVoterId, validateWebUrl };
