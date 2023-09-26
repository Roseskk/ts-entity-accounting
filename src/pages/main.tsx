import React from 'react';
import ProjectSlider from "../components/ui/slider/slider";
import asanaImage from "../images/slider/asana.png";
import asanaImage2 from "../images/slider/asana2.jpeg";

const Main = () => {

    return(
        <div className={'flex flex-col mt-[25px]'}>
            <h1 className={'text-center text-[30px] uppercase'}>Название нашей команды</h1>
            <ProjectSlider />
        </div>
    )
}

export default Main;