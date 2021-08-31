import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Juniors.module.css'
import {PATH} from "./Routes";

function Header() {
    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>Hi</button>
            <div className={s.dropdown_content}>
                <div>
                    <NavLink
                        className={s.pre_junior} to={PATH.PRE_JUNIOR}>
                        pre-junior
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        className={s.junior} to={PATH.JUNIOR}>
                        junior
                    </NavLink>
                </div>
                <div>
                    <NavLink className={s.junior_plus} to={PATH.JUNIORPLUS}>
                        junior+
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
