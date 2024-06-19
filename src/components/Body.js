import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

import FadeInDiv from './FadeIn'

import { FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub    } from "react-icons/fa";
import { SiRedux, SiMui, SiChartdotjs, SiRubyonrails, SiWebpack, SiMongodb, SiExpress, SiHeroku        } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { DiRuby, DiPostgresql  } from "react-icons/di";
import face from './../images/me.jpg'
import github from './../images/github.svg'
import statifyMapped1 from './../images/statifymapped-1.png'
import mtm from './../images/MTM.png'
import hammeron1 from './../images/hammeron-1.png'
import linkedin from './../images/linkedin.svg'


const Body = ({refs}) => {
    const {homeRef, aboutRef, skillsRef, projectsRef, contactRef} = refs
    

    return (
        <div className='body'>

            <FadeInDiv>
                <div ref={homeRef} className='home'>
                    <div>
                        <h1>Chris Bram</h1>
                        <h2>Front End Developer</h2>
             
                    </div>
                    <img src={face} className='face'/>
                </div>

            </FadeInDiv>

            <FadeInDiv>
                <div ref={aboutRef} className='about'>
                    <h2>About</h2>
                    <div className='aboutContent'>
                        <FadeInDiv delay={100}>
                            <h3>
                                I'm Chris Bram, an impassioned software engineer committed to crafting elegant solutions to real-world problems. 
                            </h3>
                            <br/>
                        </FadeInDiv>
                        <FadeInDiv delay={150}>
                            <h3>
                                Driven by curiosity and a strong proficiency in modern web development, I thrive in many types of collaborative environments. Whether it's building scalable web applications, crafting intuitive user interfaces, or diving into the latest technologies, I'm always eager to tackle new challenges head-on
                                Beyond coding, I'm a lifelong learner, constantly expanding my skill set and staying tuned-in to emerging industry trends. When I'm not at my computer, you can find me experimenting with modern music theory concepts, testing out new coffee recipes, or losing myself in a good book.
                            </h3>
                            <br/>
                        </FadeInDiv>

                        <FadeInDiv delay={200}>
                            <h3>
                                Explore my portfolio to learn more about my skills and experience, and feel free to reach out - I'm always happy to chat about tech, projects, or anything in between!
                            </h3>
                        </FadeInDiv>
                    </div>
                </div>
            </FadeInDiv>


            <FadeInDiv>

            <div ref={skillsRef} className='skills'>
                <h2>Skills</h2>
                <div className='skills-box'>
                        <div className='skills-column'>
                            <FadeInDiv delay={100}><h3>Languages</h3></FadeInDiv>
                            <FadeInDiv delay={150}><span><RiJavascriptFill/> <h4>JavaScript</h4> </span></FadeInDiv>
                            <FadeInDiv delay={200}><span><BiLogoTypescript/> <h4>TypeScript</h4> </span></FadeInDiv>
                            <FadeInDiv delay={250}><span><FaHtml5/> <h4>HTML</h4> </span></FadeInDiv>
                            <FadeInDiv delay={300}><span><FaCss3Alt/> <h4>CSS</h4> </span></FadeInDiv>
                            <FadeInDiv delay={350}><span><DiRuby/> <h4>Ruby</h4> </span></FadeInDiv>
                            <FadeInDiv delay={400}><span><FaPython/> <h4>Python</h4> </span></FadeInDiv>
                        </div>
                        <div className='skills-column'>
                            <FadeInDiv delay={150}><h3>Tools & Platforms</h3></FadeInDiv>
                            <FadeInDiv delay={200}><span><FaGitAlt/> <h4>Git</h4> </span></FadeInDiv>
                            <FadeInDiv delay={250}><span><FaGithub/> <h4>Github</h4> </span></FadeInDiv>
                            <FadeInDiv delay={300}><span><SiHeroku/> <h4>Heroku</h4> </span></FadeInDiv>
                            <FadeInDiv delay={350}><span><DiPostgresql/> <h4>Postgresql</h4> </span></FadeInDiv>
                            <FadeInDiv delay={400}><span><SiWebpack/> <h4>Webpack</h4> </span></FadeInDiv>
                            <FadeInDiv delay={450}><span><SiMongodb/> <h4>MongoDB</h4> </span></FadeInDiv>

                        </div>

                        <div className='skills-column'>
                            <FadeInDiv delay={200}><h3>Libraries & Frameworks</h3></FadeInDiv>
                            <FadeInDiv delay={250}><span><FaReact/> <h4>React</h4> </span></FadeInDiv>
                            <FadeInDiv delay={300}><span><SiRedux/> <h4>Redux</h4> </span></FadeInDiv>
                            <FadeInDiv delay={350}><span><FaNodeJs/> <h4>Node</h4> </span></FadeInDiv>
                            <FadeInDiv delay={400}><span><SiExpress/> <h4>Express</h4> </span></FadeInDiv>
                            <FadeInDiv delay={450}><span><SiRubyonrails/> <h4>Rails</h4> </span></FadeInDiv>
                            <FadeInDiv delay={500}><span><SiMui/> <h4>Material UI</h4> </span></FadeInDiv>
                            <FadeInDiv delay={550}><span><SiChartdotjs/> <h4>Chart.js</h4> </span></FadeInDiv>

                        </div>
                </div>
            </div>
            </FadeInDiv>


            <FadeInDiv>

            <div ref={projectsRef} className='projects'>
                <h2>Projects</h2>
                <br/>
                <FadeInDiv delay={200}>
                    <div className='project-box'>
                        <img  class='project-pic' src={statifyMapped1} />
                        <div class='project-text'>
                            <h3>Statify Mapped</h3>
                            <h4>
                                A tool designed to provide data-driven insights into a user's music listening habits and preferences. 
                                Developed on the Spotify Api, this web app analyzes tracks contained in playlists and other relevant 
                                collections, plotting their key signature, tempo, and other musical qualities on dynamic graphs. Sort tracks 
                                based on audio features such 
                                as popularity, valence, and acousticness
                            </h4>
                            <div className='links-container'>
                                <a href='https://www.statifymapped.com/' target='_blank'>Live Site <FaExternalLinkAlt className='ext-link-icon' /></a>
                                <a href='https://github.com/cpbram2011/statifymapped' target='_blank'>Github Repo <FaExternalLinkAlt className='ext-link-icon' /></a>
                            </div>
                        </div>
                    </div>
                </FadeInDiv>
                <FadeInDiv delay={250}>
                <div className='project-box'>
                    <img  class='project-pic' src={mtm} />
                    <div class='project-text'>
                        <h3>Metrics that Matter® PDF Generator</h3>
                        <h4>
                        Built into CRMTM's cybersecurity analysis platform, this feature enables users to effortlessly convert 
                        essential cyber risk data and reports into professional PDF documents. Its user-friendly design and seamless integration 
                        enhance collaboration and simplify the process of sharing comprehensive cybersecurity insights
                        </h4>
                        <div className='links-container'>
                            <a href='https://drive.google.com/file/d/1Cl9thjvM4MGKJtAxDEMJFlHy0GtxQxRM/view?usp=sharing' target='_blank'>View Template <FaExternalLinkAlt className='ext-link-icon' /></a>
                            <a href='https://www.crmtm.net/' target='_blank'>crmtm.net<FaExternalLinkAlt className='ext-link-icon' /></a>
                        </div>
                    </div>
                </div>
                </FadeInDiv>

                <FadeInDiv delay={300}>
                <div className='project-box'>
                    <img  class='project-pic' src={hammeron1} />
                    <div class='project-text'>
                        <h3>HAMMERON</h3>
                        <h4>
                            An in-browser digital synthesizer, playable with a physical QWERTY keyboard. 
                            Features 4 note polyphony, various selectable waveforms, filter and 
                            resonance sliders, and sostenuto triggers. 
                        </h4>
                        <div className='links-container'>
                            <a href='https://cpbram2011.github.io/hammeron/' target='_blank'>Live Site <FaExternalLinkAlt className='ext-link-icon' /></a>
                            <a href='https://github.com/cpbram2011/hammeron' target='_blank'>Github Repo <FaExternalLinkAlt className='ext-link-icon' /></a>
                        </div>
                    </div>
                </div>
                </FadeInDiv>

            </div>           
            </FadeInDiv>




            <div ref={contactRef} className='contact'>
                <h2>Contact</h2>
                    <div className='contact-box'>
                        <h4>507.319.0972</h4>

                        <Link to='#' onClick={e => { window.location.href = "mailto:cpbram2011@gmail.com"; e.preventDefault() }}>
                            <h4 style={{cursor: 'pointer'}}>cpbram2011@gmail.com <FaExternalLinkAlt className='ext-link-icon' /></h4>
                        </Link>

                        <div className='links-container'>
                            <a href="https://github.com/cpbram2011" target="_blank">
                                <img width="40" height="40" src={github} />
                            </a>
                            <a href="https://www.linkedin.com/in/chris-bram/" target="_blank">
                                <img width="40" height="40" src={linkedin} />
                            </a>
                            <a className="resume" href="https://drive.google.com/file/d/1Avx8JGu7r63XMD73GjpEV_9pFN_Ot0OI/view?usp=sharing" target="_blank">
                                Résumé
                            </a>
                        </div>
                    </div>
                
                
                
            </div>
        </div>
    )
}

export default Body