import React from 'react';
import styles from './styles.module.scss';

export const TextField = ({ handleState }) => {

    const handleInputChange = (event) => {
        handleState(event?.target?.value);
    };

    return (
        <input className={styles.input} type="text" placeholder='Enter an issue' onChange={handleInputChange} />
    );
};
