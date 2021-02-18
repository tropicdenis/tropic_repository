import React from 'react';
import s from './Header.module.css';


const Header = () => {
    return(
        <header className={s.header}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1024px-NASA_logo.svg.png'}/>
        </header>
    );
}

export default Header