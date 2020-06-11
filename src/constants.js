const PAN_REGEX = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

const AADHAAR_REGEX = /^\d{4}\s\d{4}\s\d{4}$/;

const GST_REGEX = /^([0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[Z]{1}[0-9a-zA-Z]{1})|([0-9]{4}[a-zA-Z]{3}[0-9]{5}[UO]{1}[N][a-zA-Z0-9]{1})|([0-9]{2}[a-zA-Z]{4}[0-9]{5}[a-zA-Z]{1}[0-9]{1}[Z]{1}[0-9]{1})|([0-9]{4}[a-zA-Z]{3}[0-9]{5}[N][R][0-9a-zA-Z]{1})|([0-9]{2}[a-zA-Z]{4}[a-zA-Z0-9]{1}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[D]{1}[0-9a-zA-Z]{1})|([0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9A-Za-z]{1}[C]{1}[0-9a-zA-Z]{1})|([9][9][0-9]{2}[a-zA-Z]{3}[0-9]{5}[O][S][0-9a-zA-Z]{1})$/;

const ONLY_NUMBERS_REGEX = /^[0-9]+$/;

const PASSPORT_REGEX = /^(?!^0+$)[a-zA-Z0-9]{3,20}$/;

const VOTER_ID_REGEX = /^([a-zA-Z]){3}([0-9]){7}?$/;

export default {
  PAN_REGEX,
  AADHAAR_REGEX,
  GST_REGEX,
  ONLY_NUMBERS_REGEX,
  PASSPORT_REGEX,
  VOTER_ID_REGEX,
};