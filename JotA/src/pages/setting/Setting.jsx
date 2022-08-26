import React from 'react';
import classes from './Setting.module.css';
import { Link } from 'react-router-dom';

const Setting = () => {
    return (
        <div className={classes.main}>
            <Link className={classes.back} to="../"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></Link>
            <ul className={classes.menu}>
                <li>music</li>
                <li>control</li>
                <li>graphic</li>
                <li>mute</li>
                <li>highscore</li>
            </ul>
        </div>
    );
}

export default Setting;
