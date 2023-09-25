import React from 'react';
import {NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {
    Bookmark,
    BookmarkOutlined,
    Contacts,
    Login,
    Schedule,
    ScheduleOutlined,
    Storage,
    StorageOutlined
} from "@mui/icons-material";

const Navigation: React.FC = () => {
    return(
        <nav className={'flex justify-between max-w-[1800px] items-center mx-auto text-[16px] py-[10px]'}>
            <NavLink className={'flex gap-[10px] p-[5px]'} to={'/'}>
                <HomeIcon />
                <span className={'underline font-bold'}>Главная</span>
            </NavLink>
            <div className={'flex gap-[25px]'}>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/stock'}>
                    <ScheduleOutlined />
                    <span className={'font-bold'}>Расписание</span>
                </NavLink>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/stock'}>
                    <StorageOutlined />
                    <span className={'font-bold'}>Учёт</span>
                </NavLink>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/favourite'}>
                    <BookmarkOutlined />
                    <span className={'font-bold'}>Избраное</span>
                </NavLink>
                <NavLink className={'flex gap-[10px] p-[5px]'} to={'/contacts'}>
                    <Contacts />
                    <span className={'font-bold'}>Контакты</span>
                </NavLink>
                <div className={'flex gap-[10px] p-[5px]'}>
                    <Login />
                </div>
            </div>
        </nav>
    )
}

export default Navigation;