import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <NavLink to = '/pre-junior'>PreJunior</NavLink>
            <NavLink to = '/error404'>Error404</NavLink>
        </div>
    )
}

export default Header
