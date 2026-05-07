import { NavLink } from 'react-router-dom'
import '../../styles/Header.css'


function Header(){
    return(
        <header className='navbar'>
            <div className="nav-logo">
                LOGO
            </div>

            <ul className="nav-links">
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>

            <div className="nav-buttons">
                <button>SignUp</button>
                <button>Login</button>
            </div>
        </header>
    )
}

export default Header