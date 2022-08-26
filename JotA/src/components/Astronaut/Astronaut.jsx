import React from 'react';
import ast from '../../assets/Astronaut.png';
import classes from './astronaut.module.css';

const Astronaut = () => {
    return (
        <>
            <img className={classes.aste} src={ast} alt="ast"/>
        </>
    );
}

export default Astronaut;
