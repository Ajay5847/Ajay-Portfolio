import React from 'react'
import './About.scss'
import aboutProfile from '../../assets/aboutProfile.jpeg'

function About() {

    const downloadCV = () => {
        const url = 'https://drive.google.com/file/d/1-827-eeGsunN59RTftkco5wHZX3B2Wqj/view';
        window.open(url, '_blank');
    }
    return (
        <div className='About'>
            <div className="about-container">
                <div className="about-left center">
                    <div className="about-image">
                        <img src={aboutProfile} alt="Profile" />
                    </div>
                </div>
                <div className="about-right">
                    <div className="heading">
                        <h1 className='tag'>About Me</h1>
                    </div>
                    <div className="text center">
                        <p>Hello, I am M Ajay Kumar, a graduate with a Bachelor of Engineering from UCEOU. I have developed a passion for problem-solving. During my time at college, I acquired a strong foundation in Computer Science fundamentals and interpersonal skills such as teamwork, networking, and leadership.

                            My passion lies in Algorithmic Problem Solving, where I have developed a firm grasp of Data Structures and Algorithms, with a particular emphasis on Java. I have honed my Web Development skills, creating several websites using HTML, CSS, JavaScript, and ReactJS. I am a well-rounded software engineer with expertise in both front-end and back-end development, including Node.js, Express, and MongoDB.

                            Ultimately, I aim to leverage my skills and passion to work on projects that make a difference in people's lives. I am excited to contribute to a team of like-minded professionals and eager to grow as an engineer.</p>
                    </div>
                    <div className="cv center">
                        <button className='primary-btn' onClick={downloadCV}>Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About