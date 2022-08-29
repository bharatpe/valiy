import * as Constants from './constants';

export const validate = (regex: RegExp, value: string) => {
  return regex.test(value);
};

export const validatePan = (value: string): boolean => {
  return validate(Constants.PAN_REGEX, value);
};

export const validateAadhaar = (value: string): boolean => {
  return validate(Constants.AADHAAR_REGEX, value);
};

export const validateGST = (value: string): boolean => {
  return validate(Constants.GST_REGEX, value);
};

export const validatePassport = (value: string): boolean => {
  return validate(Constants.PASSPORT_REGEX, value);
};

export const validateVoterId = (value: string): boolean => {
  return validate(Constants.VOTER_ID_REGEX, value);
};

export const validatePhone = (value: string): boolean => {
  return validate(Constants.PHONE_NUMBER_REGEX, value);
};

export const validatePincode = (value: string): boolean => {
  return validate(Constants.PINCODE_REGEX, value);
};

export const validateOnlyNumber = (value: string): boolean => {
  return validate(Constants.ONLY_NUMBERS_REGEX, value);
};

export const validateOnlyString = (value: string): boolean => {
  return validate(Constants.ONLY_STRING_REGEX, value);
};

export const validateAlphanumeric = (value: string): boolean => {
  return validate(Constants.ALPHANUMERIC_REGEX, value);
};

export const validateAlphanumericWithSpace = (value: string): boolean => {
  return validate(Constants.ALPHANUMERIC_WITH_SPACE_REGEX, value);
};

export const validateUsername = (value: string): boolean => {
  return validate(Constants.USERNAME_REGEX, value);
};

export const validateFullname = (value: string): boolean => {
  return validate(Constants.FULL_NAME_REGEX, value);
};

export const validateEmail = (value: string): boolean => {
  return validate(Constants.EMAIL_REGEX, value);
};

export const validateWebUrl = (value: string): boolean => {
  return validate(Constants.WEB_URL_REGEX, value);
};
