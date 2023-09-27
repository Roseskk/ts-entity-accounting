import React from 'react';
import {NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {
    Contacts, Image,
    Login, Web,
} from "@mui/icons-material";

const Navigation: React.FC = () => {
    return(
        <nav className={'flex justify-between max-w-[1800px] items-center mx-auto text-[16px] py-[10px]'}>
            <NavLink className={'flex gap-[10px] p-[5px]'} to={'/'}>
                <HomeIcon />
                <span className={'underline font-bold'}>Главная</span>
            </NavLink>
            <div className={'flex gap-[25px]'}>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/projects'}>
                    <Image />
                    <span className={'font-bold'}>Портфолио</span>
                </NavLink>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/services'}>
                    <Web />
                    <span className={'font-bold'}>Услуги</span>
                </NavLink>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/services'}>
                    <Contacts />
                    <span className={'font-bold'}>О нас</span>
                </NavLink>
                <div className={'flex gap-[10px] p-[5px]'}>
                    <Login />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;