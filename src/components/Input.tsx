import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Vancouver', label: 'Vancouver' },
  { value: 'London', label: 'London' },
  { value: 'Tokyo', label: 'Tokyo' },
];

const Input = () => <Select options={options} />;

export default Input;
