import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsPersonLinesFill } from 'react-icons/bs';
import { GrLike } from 'react-icons/gr';
import Dan from '../../assets/Dan2.png';
import Ross from '../../assets/Ross2.png';
import Thanh from '../../assets/Thanh2.png';

const About = () => {
    return (
        <div className='about-container'>
            <h2>About this app:</h2>
            <div className='about-app'>
                This React application is a pandemic-inspired collaboration between
                three friends. We connected to RapidAPI's "Cocktail DB" database and
                API. It allows you to search for cocktails you can make, just tell us
                which alcohols and ingredients you have in your liquor cabinet. If
                you're 'Feeling Jiggy' we'll suggest 10 random drinks to make.
      </div>

            <h2>About us:</h2>
            <div className='developer-container'>
                <div className='developer-content'>
                    <div className='picture-container'>
                        <img className='profile-picture' src={Thanh} alt='Thanh' />
                    </div>
                    <div className='bio'>
                        <h2>Thanh Nguyen</h2>
                        <p>
                            Hello, My name is Thanh. My friends and I created this application
                            to practice our skills as developers. We are very enthusiastic to
                            learn and explore the technological world.
            </p>
                        <div className='about-icons'>
                            <a
                                href='https://github.com/TN-space'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='GitHub'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/tnguyens'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='LinkedIn'
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href='https://tn-space.github.io/'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='Porfolio'
                            >
                                <BsPersonLinesFill />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='developer-content'>
                    <div className='picture-container'>
                        <img className='profile-picture' src={Dan} alt='Dan' />
                    </div>
                    <div className='bio'>
                        <h2>Daniel Powers</h2>
                        <p>
                            A people person with a passion for tech, this lifelong New
                            Englander is new to the Bay Area and ready to contribute to your
                            team's projects!
            </p>
                        <div className='about-icons'>
                            <a
                                href='https://github.com/Danpowers24'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='GitHub'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/danpowers610'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='LinkedIn'
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href='https://danpowers24.github.io'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='Porfolio'
                            >
                                <BsPersonLinesFill />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='developer-content'>
                    <div className='picture-container'>
                        <img className='profile-picture' src={Ross} alt='Ross' />
                    </div>
                    <div className='bio'>
                        <h2>Ross Northrup</h2>
                        <p>
                            A super-cool Software Engineer excited to learn new languages and
                            build projects with like-minded programmers.
              <br />
                            <GrLike />
              's iced-coffee, pizza, dogs, comedy, podcasts, craft beers
            </p>
                        <div className='about-icons'>
                            <a
                                href='https://github.com/northross'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='GitHub'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/rossnorthrup'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='LinkedIn'
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href='https://northross.github.io'
                                target='_blank'
                                rel="noopener noreferrer"
                                title='Porfolio'
                            >
                                <BsPersonLinesFill />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;