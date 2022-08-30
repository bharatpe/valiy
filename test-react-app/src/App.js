
import { useCallback, useMemo, useState } from 'react';
import { validatePhone, Regex, Validator } from 'valiy';

import InputField from 'bharat-ui-turbo/web/InputField';
import Typography from 'bharat-ui-turbo/web/Typography';

import './App.css';

function App() {

  const [value, setValue] = useState("");

  const onChange = useCallback((event) => setValue(event.target.value), []);

  const validate = useMemo(() => validatePhone(value), [value]);

  const validateOldFlow = useMemo(() => Validator.validatePhone(value), [value]);

  const validateOldFlow2 = useMemo(() => Validator.validate(Regex.PHONE_NUMBER_REGEX, value), [value]);

  return (
    <div className="flex flex-column p4">
      <InputField className='mb2' variant='outlined' placeholder='enter phone' onChange={onChange} />
      <Typography className={`my4 ${validate ? 'success': 'danger'}`}>
        {validate ? "Valid": "Invalid"}
      </Typography>
      <Typography className={`mb4 ${validateOldFlow ? 'success': 'danger'}`}>
        {`Old Flow ${validateOldFlow ? "Valid": "Invalid"}`}
      </Typography>
      <Typography className={`mb4 ${validateOldFlow2 ? 'success': 'danger'}`}>
        {`Old Flow 2 ${validateOldFlow2 ? "Valid": "Invalid"}`}
      </Typography>
    </div>
  );
}

export default App;
