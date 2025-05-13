import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'

export default function MenuLink({children, to}) {
    return (
        <NavLink 
            to={to}
            className={({isActive}) => isActive ? `${styles.link} ${styles.linkDestacado}` : styles.link}>
            {children}
        </NavLink>

    )
}