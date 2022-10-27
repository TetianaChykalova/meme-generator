import {NavLink} from "react-router-dom";
import s from './Nav.module.css'

const Nav = () => {
    return (
        <div className={s.body}>
            <div className={s.link}>
                <NavLink to='/home'>Головна</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/memes'>Створити мем</NavLink>
            </div>
            <div className={s.link}>
                <NavLink to='/cats'>Котики</NavLink>
            </div>
        </div>
    )
}

export default Nav;