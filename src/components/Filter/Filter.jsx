import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <input
    className={styles.input}
    type="text"
    name="filter"
    value={filter}
    onChange={onChange}
    placeholder="Search contacts"
  />
);

export default Filter;
