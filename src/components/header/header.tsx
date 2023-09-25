import React from 'react';
import Navigation from "./navigation";

const Header: React.FC = () => {
    return(
        <header className={'sticky mt-[10px] shadow '}>
            <Navigation />
        </header>
    )
}

export default Header;