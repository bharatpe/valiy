import Regex from './regex';

const validate = (regex, value) => {
  return regex.test(value);
};

const validatePan = value => {
  return validate(Regex.PAN_REGEX, value);
};

const validateAadhaar = value => {
  return validate(Regex.AADHAAR_REGEX, value);
};

const validateGST = value => {
  return validate(Regex.GST_REGEX, value);
};

const validatePassport = value => {
  return validate(Regex.PASSPORT_REGEX, value);
};

const validateVoterId = value => {
  return validate(Regex.VOTER_ID_REGEX, value);
};

const validatePhone = value => {
  return validate(Regex.PHONE_NUMBER_REGEX, value);
};

const validateOnlyNumber = value => {
  return validate(Regex.ONLY_NUMBERS_REGEX, value);
};

const validateOnlyString = value => {
  return validate(Regex.ONLY_STRING_REGEX, value);
};

const validateAlphanumeric = value => {
  return validate(Regex.ALPHANUMERIC_REGEX, value);
};

const validateAlphanumericWithSpace = value => {
  return validate(Regex.ALPHANUMERIC_WITH_SPACE_REGEX, value);
};


const validateUsername = value => {
  return validate(Regex.USERNAME_REGEX, value);
};

const validateFullname = value => {
  return validate(Regex.FULL_NAME_REGEX, value);
};

const validateEmail = value => {
  return validate(Regex.EMAIL_REGEX, value);
};

const validateWebUrl = value => {
  return validate(Regex.WEB_URL_REGEX, value);
};

export default {
  validate,
  validatePan,
  validateAadhaar,
  validateGST,
  validatePassport,
  validateVoterId,
  validatePhone,
  validateOnlyString,
  validateOnlyNumber,
  validateAlphanumeric,
  validateAlphanumericWithSpace,
  validateFullname,
  validateUsername,
  validateEmail,
  validateWebUrl
};
