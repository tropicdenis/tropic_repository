import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {
    return(
        <header className={s.header}>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1024px-NASA_logo.svg.png'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    :<NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header