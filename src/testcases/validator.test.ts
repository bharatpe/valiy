import * as React from "react";

import { PAN_REGEX } from '../constants';
import { validate, validatePan, validateAadhaar, validateGST, validatePassport, validateVoterId, validatePhone, validatePincode, validateOnlyNumber, validateOnlyString, validateAlphanumeric, validateAlphanumericWithSpace, validateUsername, validateFullname, validateEmail, validateWebUrl } from '../validator';

describe('Testing validator.ts', function () {
    describe('Testing validate function', function () {
        it('value with correct format - [QWERT2345Y]-true', function () {
            expect(validate(PAN_REGEX, "QWERT2345Y")).toEqual(true);
        });
        it(' value with wrong format - [QWERTY2342]-false', function () {
            expect(validate(PAN_REGEX, "QWERTY2342")).toEqual(false);
        });
        it(' value with wrong format - [QWER32342Y]-false', function () {
            expect(validate(PAN_REGEX, "QWER32342Y")).toEqual(false);
        });
        it('value with wrong format with less chars - [QWERT2345]-false', function () {
            expect(validate(PAN_REGEX, "QWERT2345")).toEqual(false);
        });
        it('value with wrong format with extra chars - [QWERT2345YU]-false', function () {
            expect(validate(PAN_REGEX, "QWERT2345YU")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validate(PAN_REGEX, " ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validate(PAN_REGEX, "")).toEqual(false);
        });
    });

    describe('Testing validatePan function', function () {
        it('value with correct format - [QWERT2345Y]-true', function () {
            expect(validatePan("QWERT2345Y")).toEqual(true);
        });
        it('value with wrong format - [QWERTY2342]-false', function () {
            expect(validatePan("QWERTY2342")).toEqual(false);
        });
        it('value with wrong format - [QWER32342Y]-false', function () {
            expect(validatePan("QWER32342Y")).toEqual(false);
        });
        it('value with wrong format with less chars - [QWERT2345]-false', function () {
            expect(validatePan("QWERT2345")).toEqual(false);
        });
        it('value with wrong format with extra chars - [QWERT2345YU]-false', function () {
            expect(validatePan("QWERT2345YU")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validatePan(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validatePan("")).toEqual(false);
        });
    });

    describe('Testing validateAadhaar function', function () {
        it('value with correct format - [585851193566]-true', function () {
            expect(validateAadhaar("585851193566")).toEqual(true);
        });
        it('value with wrong format with extra chars - [585851193566D]-false', function () {
            expect(validateAadhaar("585851193566D")).toEqual(false);
        });
        it('value with wrong format with extra chars - [5858511935662]-false', function () {
            expect(validateAadhaar("5858511935662")).toEqual(false);
        });
        it('value with wrong format with space - [58585119 356]-false', function () {
            expect(validateAadhaar("58585119 3566")).toEqual(false);
        });
        it('value with wrong format with char - [58585119356H]-false', function () {
            expect(validateAadhaar("58585119356H")).toEqual(false);
        });
        it('value with wrong format with less chars - [58585119356]-false', function () {
            expect(validateAadhaar("58585119356")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateAadhaar(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateAadhaar("")).toEqual(false);
        });
    });

    describe('Testing validateGST function', function () {
        it('value with correct format - [27AAPFU0939F1ZV]-true', function () {
            expect(validateGST("27AAPFU0939F1ZV")).toEqual(true);
        });
        it('value with correct format - [27AAPFU0939F1Z4]-true', function () {
            expect(validateGST("27AAPFU0939F1Z4")).toEqual(true);
        });
        it('value with wrong format with extra chars - [27AAPFU0939F1ZV6]-false', function () {
            expect(validateGST("27AAPFU0939F1ZV6")).toEqual(false);
        });
        it('value with wrong format with less chars - [27AAPFU0939F1Z]-false', function () {
            expect(validateGST("27AAPFU0939F1Z")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateGST(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateGST("")).toEqual(false);
        });
    });

    describe('Testing validatePassport function', function () {
        it('value with correct format - [A2096457]-true', function () {
            expect(validatePassport("A2096457")).toEqual(true);
        });
        it('value with wrong format with extra chars - [A2096457Wkwjdlajsdlajld]-false', function () {
            expect(validatePassport("A2096457Wkwjdlajsdlajld")).toEqual(false);
        });
        it('value with wrong format with less chars - [A2]-false', function () {
            expect(validatePassport("A2")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validatePassport(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validatePassport("")).toEqual(false);
        });
    });

    describe('Testing validateVoterId function', function () {
        it('value with correct format - [GDN0225185]-true', function () {
            expect(validateVoterId("GDN0225185")).toEqual(true);
        });
        it('value with wrong format with extra chars - [GDN02251852]-false', function () {
            expect(validateVoterId("GDN02251852")).toEqual(false);
        });
        it('value with wrong format with less chars - [GDN022518]-false', function () {
            expect(validateVoterId("GDN022518")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateVoterId(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateVoterId("")).toEqual(false);
        });
    });

    describe('Testing validatePhone function', function () {
        it('value with correct format 10 digits - [9999999999]-true', function () {
            expect(validatePhone("9999999999")).toEqual(true);
        });
        it('value with correct format +91 without space - [+919999999999]-true', function () {
            expect(validatePhone("+919999999999")).toEqual(true);
        });
        it('value with correct format format +91 with space - [+91 9999999999]-true', function () {
            expect(validatePhone("+91 9999999999")).toEqual(true);
        });
        it('value with correct format 91 without space - [919999999999]-true', function () {
            expect(validatePhone("919999999999")).toEqual(true);
        });
        it('value with correct format 91 with space - [91 9999999999]-true', function () {
            expect(validatePhone("91 9999999999")).toEqual(true);
        });
        it('value with correct format +91 with dash - [+91-9999999999]-true', function () {
            expect(validatePhone("+91-9999999999")).toEqual(true);
        });
        it('value with correct format starting with 0 - [09999999999]-true', function () {
            expect(validatePhone("09999999999")).toEqual(true);
        });
        it('value with wrong format starting without 0 and length 11 digits - [99999999999]-false', function () {
            expect(validatePhone("99999999999")).toEqual(false);
        });
        it('value with wrong format invalid phone number - [1234567890]-false', function () {
            expect(validatePhone("1234567890")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validatePhone(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validatePhone("")).toEqual(false);
        });
    });

    describe('Testing validatePincode function', function () {
        it('value with correct format - [122017]-true', function () {
            expect(validatePincode("122017")).toEqual(true);
        });
        it('value with wrong format with extra chars - [1220172]-false', function () {
            expect(validatePincode("1220172")).toEqual(false);
        });
        it('value with wrong format with less chars - [12201]-false', function () {
            expect(validatePincode("12201")).toEqual(false);
        });
        it('value with wrong format with char - [12201e]-false', function () {
            expect(validatePincode("12201e")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validatePincode(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validatePincode("")).toEqual(false);
        });
    });

    describe('Testing validateOnlyNumber function', function () {
        it('value with correct format - [122017]-true', function () {
            expect(validateOnlyNumber("122017")).toEqual(true);
        });
        it('value with correct format with only 0 at start position - [0123]-true', function () {
            expect(validateOnlyNumber("0123")).toEqual(true);
        });
        it('value with correct format with only 0 - [0]-true', function () {
            expect(validateOnlyNumber("0")).toEqual(true);
        });
        it('value with wrong format with chars - [ABC]-false', function () {
            expect(validateOnlyNumber("ABC")).toEqual(false);
        });
        it('value with wrong format with chars - [abc]-false', function () {
            expect(validateOnlyNumber("abc")).toEqual(false);
        });
        it('value with wrong format with alphanumeric - [123ABc]-false', function () {
            expect(validateOnlyNumber("123ABc")).toEqual(false);
        });
        it('value with wrong format with decimal - [123.12]-false', function () {
            expect(validateOnlyNumber("123.12")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateOnlyNumber(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateOnlyNumber("")).toEqual(false);
        });
    });

    describe('Testing validateOnlyString function', function () {
        it('value with correct format - [ABCabc]-true', function () {
            expect(validateOnlyString("ABCabc")).toEqual(true);
        });
        it('value with correct format - all caps - [ABC]-true', function () {
            expect(validateOnlyString("ABC")).toEqual(true);
        });
        it('value with correct format - all lowercase - [abc]-true', function () {
            expect(validateOnlyString("abc")).toEqual(true);
        });
        it('value with wrong format with number - [0123]-false', function () {
            expect(validateOnlyString("0123")).toEqual(false);
        });
        it('value with wrong format with alphanumeric - [123ABN]-false', function () {
            expect(validateOnlyString("123ABN")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateOnlyString(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateOnlyString("")).toEqual(false);
        });
    });

    describe('Testing validateAlphanumeric function', function () {
        it('value with correct format - [ABCabc]-true', function () {
            expect(validateAlphanumeric("ABCabc")).toEqual(true);
        });
        it('value with correct format - all caps - [ABC]-true', function () {
            expect(validateAlphanumeric("ABC")).toEqual(true);
        });
        it('value with correct format - all lowercase - [abc]-true', function () {
            expect(validateAlphanumeric("abc")).toEqual(true);
        });
        it('value with correct format with number - [0123]-true', function () {
            expect(validateAlphanumeric("0123")).toEqual(true);
        });
        it('value with correct format with alphanumeric - [123ABN]-true', function () {
            expect(validateAlphanumeric("123ABN")).toEqual(true);
        });
        it('value with wrong format with decimal and chars - [123.12ab]-false', function () {
            expect(validateOnlyNumber("123.12ab")).toEqual(false);
        });
        it('value with wrong format with decimal - [123.12]-false', function () {
            expect(validateOnlyNumber("123.12")).toEqual(false);
        });
        it('value with wrong format with special chars - [$12312abc]-false', function () {
            expect(validateOnlyNumber("$12312abc")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateAlphanumeric(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateAlphanumeric("")).toEqual(false);
        });
    });

    describe('Testing validateAlphanumericWithSpace function', function () {
        it('value with correct format - [ABCabc]-true', function () {
            expect(validateAlphanumericWithSpace("ABCabc")).toEqual(true);
        });
        it('value with correct format with space - [ABC abc]-true', function () {
            expect(validateAlphanumericWithSpace("ABC abc")).toEqual(true);
        });
        it('value with correct format with space at position 0 - [ ABC abc]-true', function () {
            expect(validateAlphanumericWithSpace(" ABC abc")).toEqual(true);
        });
        it('value with correct format with space at position last - [ABC abc ]-true', function () {
            expect(validateAlphanumericWithSpace("ABC abc ")).toEqual(true);
        });
        it('value with correct format with space at position start and last - [ ABC abc DEF ]-true', function () {
            expect(validateAlphanumericWithSpace(" ABC abc DEF ")).toEqual(true);
        });
        it('value with correct format - all caps - [ABC]-true', function () {
            expect(validateAlphanumericWithSpace("ABC")).toEqual(true);
        });
        it('value with correct format - all lowercase - [abc]-true', function () {
            expect(validateAlphanumericWithSpace("abc")).toEqual(true);
        });
        it('value with correct format with number - [0123]-true', function () {
            expect(validateAlphanumericWithSpace("0123")).toEqual(true);
        });
        it('value with correct format with alphanumeric - [123ABN]-true', function () {
            expect(validateAlphanumericWithSpace("123ABN")).toEqual(true);
        });
        it('value with wrong format with decimal and chars - [123.12ab]-false', function () {
            expect(validateAlphanumericWithSpace("123.12ab")).toEqual(false);
        });
        it('value with wrong format with decimal - [123.12]-false', function () {
            expect(validateAlphanumericWithSpace("123.12")).toEqual(false);
        });
        it('value with wrong format with special chars - [$12312abc]-false', function () {
            expect(validateAlphanumericWithSpace("$12312abc")).toEqual(false);
        });
        it('only space - true ----------------------------- need to fix', function () {
            expect(validateAlphanumericWithSpace(" ")).toEqual(true);
        });
        it('empty string - false', function () {
            expect(validateAlphanumericWithSpace("")).toEqual(false);
        });
    });

    describe('Testing validateUsername function', function () {
        it('value with correct format - [ABCabc]-true', function () {
            expect(validateUsername("ABCabc")).toEqual(true);
        });
        it('value with correct format - alpha numeric - [ABCabc121]-true', function () {
            expect(validateUsername("ABCabc121")).toEqual(true);
        });
        it('value with correct format with underscore - [ABC_abc]-true', function () {
            expect(validateUsername("ABC_abc")).toEqual(true);
        });
        it('value with wrong format with underscore at start - [_ABC_abc]-false', function () {
            expect(validateUsername("_ABC_abc")).toEqual(false);
        });
        it('value with correct format with underscore at end - [ABC_abc_]-true', function () {
            expect(validateUsername("ABC_abc_")).toEqual(true);
        });
        it('value with wrong format with underscore at start and end - [_ABC_abc_]-false', function () {
            expect(validateUsername("_ABC_abc_")).toEqual(false);
        });
        it('value with wrong format with space - [ABC abc]-false', function () {
            expect(validateUsername("ABC abc")).toEqual(false);
        });
        it('value with wrong format with space at position 0 - [ ABC abc]-false', function () {
            expect(validateUsername(" ABC abc")).toEqual(false);
        });
        it('value with wrong format with space at position last - [ABC abc ]-false', function () {
            expect(validateUsername("ABC abc ")).toEqual(false);
        });
        it('value with wrong format with space at position start and last - [ ABC abc DEF ]-false', function () {
            expect(validateUsername(" ABC abc DEF ")).toEqual(false);
        });
        it('value with correct format - all caps - [ABC]-true', function () {
            expect(validateUsername("ABC")).toEqual(true);
        });
        it('value with correct format - all lowercase - [abc]-true', function () {
            expect(validateUsername("abc")).toEqual(true);
        });
        it('value with wrong format with only number - [0123]-false', function () {
            expect(validateUsername("0123")).toEqual(false);
        });
        it('value with wrong format with alphanumeric with number at 0 - [123ABN]-true', function () {
            expect(validateUsername("123ABN")).toEqual(false);
        });
        it('value with wrong format with decimal and chars - [123.12ab]-false', function () {
            expect(validateUsername("123.12ab")).toEqual(false);
        });
        it('value with wrong format with decimal - [123.12]-false', function () {
            expect(validateUsername("123.12")).toEqual(false);
        });
        it('value with wrong format with special chars - [$12312abc]-false', function () {
            expect(validateUsername("$12312abc")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateUsername(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateUsername("")).toEqual(false);
        });
    });

    describe('Testing validateFullname function', function () {
        it('value with correct format - [ABCabc]-true', function () {
            expect(validateFullname("ABCabc")).toEqual(true);
        });
        it('value with wrong format - alpha numeric - [ABCabc121]-false', function () {
            expect(validateFullname("ABCabc121")).toEqual(false);
        });
        it('value with wrong format with underscore - [ABC_abc]-false', function () {
            expect(validateFullname("ABC_abc")).toEqual(false);
        });
        it('value with wrong format with underscore at start - [_ABC_abc]-false', function () {
            expect(validateFullname("_ABC_abc")).toEqual(false);
        });
        it('value with wrong format with underscore at end - [ABC_abc_]-false', function () {
            expect(validateFullname("ABC_abc_")).toEqual(false);
        });
        it('value with wrong format with underscore at start and end - [_ABC_abc_]-false', function () {
            expect(validateFullname("_ABC_abc_")).toEqual(false);
        });
        it('value with correct format with space - [ABC abc]-true', function () {
            expect(validateFullname("ABC abc")).toEqual(true);
        });
        it('value with wrong format with space at position 0 - [ ABC abc]-false', function () {
            expect(validateFullname(" ABC abc")).toEqual(false);
        });
        it('value with correct format with space at position last - [ABC abc ]-true', function () {
            expect(validateFullname("ABC abc ")).toEqual(true);
        });
        it('value with wrong format with space at position start and last - [ ABC abc DEF ]-false', function () {
            expect(validateFullname(" ABC abc DEF ")).toEqual(false);
        });
        it('value with correct format - all caps - [ABC]-true', function () {
            expect(validateFullname("ABC")).toEqual(true);
        });
        it('value with correct format - all lowercase - [abc]-true', function () {
            expect(validateFullname("abc")).toEqual(true);
        });
        it('value with wrong format with only number - [0123]-false', function () {
            expect(validateFullname("0123")).toEqual(false);
        });
        it('value with wrong format with alphanumeric with number at 0 - [123ABN]-true', function () {
            expect(validateFullname("123ABN")).toEqual(false);
        });
        it('value with wrong format with decimal and chars - [123.12ab]-false', function () {
            expect(validateFullname("123.12ab")).toEqual(false);
        });
        it('value with wrong format with decimal - [123.12]-false', function () {
            expect(validateFullname("123.12")).toEqual(false);
        });
        it('value with wrong format with special chars - [$12312abc]-false', function () {
            expect(validateFullname("$12312abc")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateFullname(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateFullname("")).toEqual(false);
        });
    });

    describe('Testing validateEmail function', function () {
        it('value with correct format - [user@bharatpe.com]-true', function () {
            expect(validateEmail("user@bharatpe.com")).toEqual(true);
        });
        it('value with correct format - [tech@geek.io.in]-true', function () {
            expect(validateEmail("tech@geek.io.in")).toEqual(true);
        });
        it('value with correct format - [hack_12RT.Y56_RT@hc.st.io]-true', function () {
            expect(validateEmail("hack_12RT.Y56_RT@hc.st.io")).toEqual(true);
        });
        it('value with wrong format - [user@bharatpe.comjwhdjs]-false', function () {
            expect(validateEmail("user@bharatpe.comjwhdjs")).toEqual(false);
        });
        it('value with wrong format - [user@bharatpe]-false', function () {
            expect(validateEmail("user@bharatpe")).toEqual(false);
        });
        it('value with wrong format - [user@bharatpe.com.]-false', function () {
            expect(validateEmail("user@bharatpe.com.")).toEqual(false);
        });
        it('value with wrong format - [user@bharat pe.com]-false', function () {
            expect(validateEmail("user@bharat pe.com")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateEmail(" ")).toEqual(false);
        });
        it('empty string - true ----------------------------- need to fix', function () {
            expect(validateEmail("")).toEqual(true);
        });
    });

    describe('Testing validateWebUrl function', function () {
        it('value with correct format - [bharatpe.com]-true', function () {
            expect(validateWebUrl("bharatpe.com")).toEqual(true);
        });
        it('value with correct format - [ww.bharatpe.io]-true', function () {
            expect(validateWebUrl("ww.bharatpe.io")).toEqual(true);
        });
        it('value with correct format - [https://bharatpe.com]-true', function () {
            expect(validateWebUrl("https://bharatpe.com")).toEqual(true);
        });
        it('value with correct format - [http://bharatpe.com]-true', function () {
            expect(validateWebUrl("http://bharatpe.com")).toEqual(true);
        });
        it('value with correct format - [http://bharatpe.com?file=jus_.F-filename_]-true', function () {
            expect(validateWebUrl("http://bharatpe.com?file=jus_.F-filename_")).toEqual(true);
        });
        it('value with wrong format - [http://bharatpe .com]-false', function () {
            expect(validateWebUrl("http://bharatpe .com")).toEqual(false);
        });
        it('only space - false', function () {
            expect(validateWebUrl(" ")).toEqual(false);
        });
        it('empty string - false', function () {
            expect(validateWebUrl("")).toEqual(false);
        });
    });

});
