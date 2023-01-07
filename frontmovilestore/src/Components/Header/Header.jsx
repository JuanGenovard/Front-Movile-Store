import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
function Header() {
    return (
        <header className="header">
            <img src="https://i.pinimg.com/originals/78/73/37/7873379c4a6dfc787b9ddfd19a7888b9.png" alt="" height="70" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Resgister</Link>
                <Link to="/movil">Mobiles</Link>
            </div>
        </header>
    )
}

export default Header