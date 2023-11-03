import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import './Home.scss'
import profileImg from '../../assets/profile.png'
import TextTransition, { presets } from 'react-text-transition';

function Home() {
    const TEXTS = ['Frontend Developer', 'Coder', 'Engineer'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className='Home'>
            <Navbar />
            <div className="Home-container center">
                <div className="profile-icon center">
                    <div className="icon">
                        <img src={profileImg} alt="ProfilIcon" />
                    </div>
                </div>
                <div className="left-container">
                    <h1>Hi, I'm M Ajay Kumar</h1>
                    <h1 className="changing-text">
                        <span>A</span>
                        <TextTransition className="text-color" springConfig={presets.stiff}>
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home