import Constants from './constants';

const validate = (regex, value) => {
  return regex.test(value);
};

const validatePAN = value => {
  return validate(Constants.PAN_REGEX, value);
};

const validateAadhaar = value => {
  return validate(Constants.AADHAAR_REGEX, value);
};

const validateGST = value => {
  return validate(Constants.GST_REGEX, value);
};

const validateOnlyNumber = value => {
  return validate(Constants.ONLY_NUMBERS_REGEX, value);
};

const validatePassport = value => {
  return validate(Constants.PASSPORT_REGEX, value);
};

const validateVoterId = value => {
  return validate(Constants.VOTER_ID_REGEX, value);
};

export default {
  validate,
  validatePAN,
  validateAadhaar,
  validateGST,
  validateOnlyNumber,
  validatePassport,
  validateVoterId,
};
