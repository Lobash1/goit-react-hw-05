import css from './AppHeader.module.css'
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx"

const getLinkStyle = ({isActive}) => {
        return clsx(css.link, isActive && css.active )}


export default function AppHeader() {

    return (
        <header className={css.header}>
        <nav className={css.nav}>
            <ul className={css.list}>
                <li>
                    <NavLink to="/" className={getLinkStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={getLinkStyle}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/usersPages' className={getLinkStyle}>UsersPages</NavLink>
                </li>
            </ul>
        </nav>

    </header>
    )
    
}