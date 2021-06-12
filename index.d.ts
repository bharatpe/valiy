

declare namespace Valiy {

  interface ValidatorInterface {
    validate(RegExp: regex, string: value);
    validatePan(string: value);
    validateAadhaar(string: value);
    validateGST(string: value);
    validatePassport(string: value);
    validateVoterId(string: value);
    validatePhone(string: value);
    validatePincode(string: value);
    validateOnlyNumber(string: value);
    validateOnlyString(string: value);
    validateAlphanumeric(string: value);
    validateAlphanumericWithSpace(string: value);
    validateUsername(string: value);
    validateFullname(string: value);
    validateEmail(string: value);
    validateWebUrl(string: value);
  }

  interface RegexInterface {
    PAN_REGEX: RegExp;
    AADHAAR_REGEX: RegExp;
    GST_REGEX: RegExp;
    PASSPORT_REGEX: RegExp;
    VOTER_ID_REGEX: RegExp;
    PHONE_NUMBER_REGEX: RegExp;
    PINCODE_REGEX: RegExp;
    ONLY_STRING_REGEX: RegExp;
    ONLY_NUMBERS_REGEX: RegExp;
    ALPHANUMERIC_REGEX: RegExp;
    ALPHANUMERIC_WITH_SPACE_REGEX: RegExp;
    USERNAME_REGEX: RegExp;
    FULL_NAME_REGEX: RegExp;
    EMAIL_REGEX: RegExp;
    WEB_URL_REGEX: RegExp;
  }
}

export = Valiy;
export as namespace Valiy;
