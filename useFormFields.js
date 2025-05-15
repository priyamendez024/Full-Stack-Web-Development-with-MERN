import { useState } from 'react';

export function useFormFields(initialValues) {
  const [fields, setFields] = useState(initialValues);

  const handleChange = e => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
  };

  const reset = () => setFields(initialValues);

  return [fields, handleChange, reset];
}