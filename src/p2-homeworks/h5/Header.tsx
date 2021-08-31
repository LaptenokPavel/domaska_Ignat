import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Juniors.module.css'

function Header() {
    return (
               <div className={s.dropdown}>
            <button className={s.dropbtn}>Hi</button>
            <div className={s.dropdown_content}>
            <div>
                <NavLink
                    className={s.pre_junior} to='/pre-junior'>
                    pre-junior
                </NavLink>
            </div>
            <div>
                <NavLink
                    className={s.junior} to='/junior'>
                    junior
                </NavLink>
            </div>
            <div>
                <NavLink className={s.junior_plus} to='/junior+'>
                    junior+
                </NavLink>
            </div>
            </div>
        </div>
          )
}

export default Header
