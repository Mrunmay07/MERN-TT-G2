import '../../styles/Header.css'


function Header(){
    return(
        <header className='navbar'>
            <div className="nav-logo">
                LOGO
            </div>

            <ul className="nav-links">
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Movies</a></li>
            </ul>

            <div className="nav-buttons">
                <button>SignUp</button>
                <button>Login</button>
            </div>
        </header>
    )
}

export default Header