import React from 'react';
import {NavLink} from "react-router-dom";
import {AccountBoxOutlined} from "@mui/icons-material";

const Navigation: React.FC = () => {
    return(
        <nav className={'flex max-w-[1800px] items-center mx-auto'}>
            <div className={'flex gap-[10px] p-[5px]'}>
                <NavLink className={'underline font-bold'} to={'/'}>Главная</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;