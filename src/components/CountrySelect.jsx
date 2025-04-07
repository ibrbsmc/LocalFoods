import React from 'react';
import Form from 'react-bootstrap/Form';
import '../css/CountrySelect.css'


function CountrySelect({ countries, onChange  }) {
  return (
    <div className='country-container'>
    <Form.Select className='country-form' size='md' onChange={(e) => onChange(e.target.value)} style={{ position: 'relative', zIndex: 1000  }}>
      {countries.map(country => (
        <option key={country.id} value={country.name}>
          {country.name}
        </option>
      ))}
    </Form.Select>
    </div>
  );
}

export default CountrySelect;