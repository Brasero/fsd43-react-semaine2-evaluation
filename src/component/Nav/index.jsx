import {NavLink} from "react-router-dom";

const Nav = () => {

    const style = ({isActive}) => {
        return {
            color: isActive ? 'var(--active-link-color)' : 'var(--inactive-link-color)'
        }
    }

    return (
        <nav>
            <NavLink style={style} to={'/'}>Mes tâches</NavLink>
            <NavLink style={style} to={'/add'}>Ajouter une tâches</NavLink>
        </nav>
    )
}

export default Nav;