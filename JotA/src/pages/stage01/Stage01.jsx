import React , {useState} from 'react';
import Astronaut from '../../components/Astronaut/Astronaut';
import MenuIcon from '../../components/menuicon/MenuIcon';
import classes from './stage01.module.css';

const Stage01 = () => {
    const [moveRight , setMoveRight] = React.useState(0);
    const [moveTop , setMoveTop] = React.useState(0);
    // let modifier = 10;
    window.addEventListener('keydown', (event) => {
        // const  style  = document.getElementById('Astronautt');
        switch (event.key) {
            case 'ArrowRight' : setMoveRight(moveRight + 10);break;
            case 'ArrowLeft' : setMoveRight(moveRight - 10);break;
            case 'ArrowUp' :  setMoveTop(moveTop + 10);break;
            case 'ArrowDown' :  setMoveTop(moveTop - 10);break;
        }
        }
     )


    return (
        <div className={classes.main}>
            <div className={classes.air}>
                <MenuIcon/>
                <div className={classes.ast} style={{left:`${moveRight}px` , bottom:`${moveTop}px`}}>
                    <Astronaut />
                </div>
            </div>
            <div className={classes.ground}></div>
        </div>
    );
}

export default Stage01;
