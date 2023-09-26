import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import asanaImage from "../../../images/slider/asana.png";
import asanaImage2 from "../../../images/slider/asana2.jpeg";

const projects = [
    {
        image: asanaImage,
        title: 'Проект 1',
        description: 'Описание проекта 1',
    },
    {
        image: asanaImage2,
        title: 'Проект 2',
        description: 'Описание проекта 2',
    },
    {
        image: asanaImage,
        title: 'Проект 3',
        description: 'Описание проекта 3',
    },
    {
        image: asanaImage2,
        title: 'Проект 4',
        description: 'Описание проекта 4',
    },
];

export default function ProjectSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const transitions = useTransition(currentSlide, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 },
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
    };

    return (
        <div className={''} style={{ position: 'relative', width: '100%', height: '400px' }}>
            {transitions((style, item) => {
                const project = projects[item];
                return (
                    <animated.div style={{ ...style, position: 'absolute', width: '100%', height: '400px' }}>
                        <Card sx={{ width: '100%', height: 400, position:"relative" }}>
                            <div style={{ height: '400px', background: `url(${project.image}) center / cover no-repeat`, filter: "brightness(0.5)" }}></div>
                            <CardContent>
                                <Typography variant="h5" style={{position: "absolute", top:"10px", left:'10px', color: 'white', fontSize: 50, fontFamily: 'Poppins' }}>{project.title}</Typography>
                                <Typography variant="body2" style={{position: "absolute", top:"100px", left:'10px', color: 'white', fontSize: 30, fontFamily: 'Poppins' }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </animated.div>
                );
            })}
            <IconButton
                style={{ position: 'absolute', left: 0, bottom: 0, color: 'black' }}
                onClick={handlePrev}
            >
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton
                style={{ position: 'absolute', right: 0, bottom: 0, color: 'black' }}
                onClick={handleNext}
            >
                <ArrowForwardIosIcon />
            </IconButton>
        </div>
    );
}