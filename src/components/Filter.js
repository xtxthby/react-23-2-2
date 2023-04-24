import React from 'react';
// приймає пропи  value, onChange
const Filter = ({ value, onChange }) => (
  <label>
    Фильтр за ім'ям
    <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;