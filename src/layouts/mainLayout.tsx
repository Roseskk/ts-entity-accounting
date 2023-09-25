import React from "react";
import {ILayout} from "../types/layouts";
import Header from "../components/header/header";

const MainLayout: React.FC<ILayout> = ({ children }) => {
    return(
        <div className={'h-full'}>
            <Header />
            <div className={'max-w-[1800px] mx-auto'}>
                {children}
            </div>
            {/*<footer>Footer</footer>*/}
        </div>
    )
}


export default MainLayout