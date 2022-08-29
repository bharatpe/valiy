import { useCallback, useMemo, useState } from 'react';
import { validatePhone } from 'valiy';

import InputField from 'bharat-ui-turbo/web/InputField';

import './App.css';

function App() {
  const [value, setValue] = useState("");

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value), []);

  const validate = useMemo(() => validatePhone(value), [value]);

  return (
    <div className="flex p4">
      <InputField variant='outlined' placeholder='enter phone' onChange={onChange} />
      {validate ? "Valid": "Invalid"}
    </div>
  );
}

export default App;
