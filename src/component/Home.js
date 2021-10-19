
import profile_pic_home from './../profile_pic_home.jpg';
import React, { useState, useEffect } from 'react';
import ParticlesComponent from './ParticlesComponent';
import './Home.css';

const Home = (props) => {
    const imgStyle = {
        width: "7vw",
        height: "7vw"
    }
    const [className, setClassName] = useState("animate__backInUp");
    useEffect(() => {

        setTimeout(() => {
            // setClassName("animate__backOutUp");
        }, 5000, false);
    }, [])
    return (
        <>
            <div className="home-page" >
                <div className="home-page-content">
                    <div className="circletag" id="nay">
                        <img src={profile_pic_home} alt="profile pic home" style={imgStyle} />
                    </div>
                    <h1 className="my-name">Akashkumar Shendage</h1>
                    <div className={`animate__animated ${className}`}>
                        <div className="typewriter-text ">Senior Software Engineer</div>
                    </div>
                    <div className={`animate__animated animate__delay-1s ${className}`}>
                        <div className="typewriter-text  ">| UI Developer</div>
                    </div>
                    <div className={`animate__animated animate__delay-2s ${className}`}>
                        <div className="typewriter-text ">| Front End Developer</div>
                    </div>
                    <div className={`animate__animated animate__delay-3s ${className}`}>
                        <div className="typewriter-text">| Web UI Developer</div>
                    </div>
                </div>
            </div>
            <ParticlesComponent routeselected="home" />
        </>);
};
export default Home;