import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.css';

const Form = ({ searchSubmit }) => {
    const [location, setLocation] = useState('');
    const submitHandler = e => {
        e.preventDefault();
        if (!location || location === '') return;
        searchSubmit({ location });
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <button type="submit" className={styles.button}>
                SEARCH
            </button>
        </form>
    );
};

Form.prototype = {
    submitHandler: PropTypes.func.isRequired,
};

export default Form;
