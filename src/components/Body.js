import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub    } from "react-icons/fa";
import { SiRedux, SiMui, SiChartdotjs, SiRubyonrails, SiWebpack, SiMongodb, SiExpress, SiHeroku        } from "react-icons/si";

import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { DiRuby, DiPostgresql  } from "react-icons/di";

import FadeInDiv from './FadeIn'
import face from './../images/me.jpg'

import github from './../images/github.svg'
import statifyMapped1 from './../images/statifymapped-1.png'
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
                        <h2>Full Stack Developer</h2>
             
                    </div>
                    <img src={face} className='face'/>
                </div>

            </FadeInDiv>

            <FadeInDiv>
                <div ref={aboutRef} className='about'>
                    <h2>About</h2>
                    <div className='aboutContent'>
                        <h4>
                            Thank you for visiting my portfolio! I'm Chris Bram, an impassioned software engineer committed to crafting elegant solutions to real-world problems. 
                        </h4>
                        <h4>
                            Driven by curiosity and a strong proficiency in modern web development, I thrive in many types of collaborative environments. Whether it's building scalable web applications, crafting intuitive user interfaces, or diving into the latest technologies, I'm always eager to tackle new challenges head-on.
                        </h4>
                        <h4>
                            Beyond coding, I'm a lifelong learner, constantly expanding my skill set and staying tuned-in to emerging industry trends. When I'm not at my computer, you can find me experimenting with modern music theory concepts, testing out new coffee recipes, or losing myself in a good book.
                        </h4>
                        <h4>
                            Explore my portfolio to learn more about my skills and experience, and feel free to reach out - I'm always happy to chat about tech, projects, or anything in between!
                        </h4>
                    </div>
                </div>
            </FadeInDiv>


            <FadeInDiv>

            <div ref={skillsRef} className='skills'>
                <h2>Skills</h2>
                <div className='skills-box'>
                    <div className='skills-column'>
                        <h3>Languages</h3>
                        <span><RiJavascriptFill/> <h4>JavaScript</h4> </span>
                        <span><BiLogoTypescript/> <h4>TypeScript</h4> </span>
                        <span><FaHtml5/> <h4>HTML</h4> </span>
                        <span><FaCss3Alt/> <h4>CSS</h4> </span>
                        <span><DiRuby/> <h4>Ruby</h4> </span>

                        <span><FaPython/> <h4>Python</h4> </span>
                    </div>
                    <div className='skills-column'>
                        <h3>Libraries & Frameworks</h3>
                        <span><FaReact/> <h4>React</h4> </span>
                        <span><SiRedux/> <h4>Redux</h4> </span>
                        <span><FaNodeJs/> <h4>Node</h4> </span>
                        <span><SiExpress/> <h4>Express</h4> </span>
                        <span><SiRubyonrails/> <h4>Rails</h4> </span>
                        <span><SiMui/> <h4>Material UI</h4> </span>
                        <span><SiChartdotjs/> <h4>Chart.js</h4> </span>

                    </div>
                    <div className='skills-column'>
                        <h3>Tools & Platforms</h3>
                        <span><FaGitAlt/> <h4>Git</h4> </span>
                        <span><FaGithub/> <h4>Github</h4> </span>
                        <span><SiHeroku/> <h4>Heroku</h4> </span>
                        <span><DiPostgresql/> <h4>Postgresql</h4> </span>
                        <span><SiWebpack/> <h4>Webpack</h4> </span>
                        <span><SiMongodb/> <h4>MongoDB</h4> </span>

                    </div>
                </div>
            </div>
            </FadeInDiv>


            <FadeInDiv>

            <div ref={projectsRef} className='projects'>
                <h2>Projects</h2>
                <br/>
                <div className='project-box'>
                    <img  class='project-pic' src={statifyMapped1} />
                    <div class='project-text'>
                        <h3>Statify Mapped</h3>
                        <h4>
                            A tool designed to provide data-driven insights into a user's music listening habits and preferences. 
                            Built on the Spotify Api, this web app analyzes tracks contained in playlists and other relevant 
                            collections, plotting their musical qualities, such as key signature and tempo, on dynamic graphs. Sort tracks 
                            based on audio features such 
                            as popularity, valence, and acousticness
                        </h4>
                    </div>
                </div>

                <div className='project-box'>
                    <img  class='project-pic' src={hammeron1} />
                    <div class='project-text'>
                        <h3>HAMMERON</h3>
                        <h4>
                            A tool designed to provide data-driven insights into a user's music listening habits and preferences. 
                            Built on the Spotify Api, this web app analyzes tracks contained in playlists and other relevant 
                            collections, plotting their musical qualities, such as key signature and tempo, on dynamic graphs. Sort tracks 
                            based on audio features such 
                            as popularity, valence, and acousticness
                        </h4>
                    </div>
                </div>
            </div>           
            </FadeInDiv>




            <div ref={contactRef} className='contact'>
                <h2>Contact</h2>
                    <h4>507.319.0972</h4>
                    <Link style={{textDecoration: 'unset'}} to='#' onClick={e => { window.location.href = "mailto:cpbram2011@gmail.com"; e.preventDefault() }}>
                        <h4>cpbram2011@gmail.com <FaExternalLinkAlt className='ext-link' /></h4>
                    </Link>


                    <div className='links-container'>
                        <a href="https://github.com/cpbram2011" target="_blank">
                            <img width="40" height="40" src={github} />
                        </a>
                        <a href="https://www.linkedin.com/in/chris-bram/" target="_blank">
                            <img width="40" height="40" src={linkedin} />
                        </a>
                        <a className="resume" href="https://docs.google.com/document/d/1B1ILsY_5Mf_t-glzwC53nfE37HUErYaf4XYDs7kgkw4/edit" target="_blank">
                            Résumé
                        </a>
                    </div>
                
                
                
            </div>
        </div>
    )
}

export default Body