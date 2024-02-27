import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import face from './../images/me.jpg'
import css from './../images/css.PNG'
import git from './../images/git.PNG'
import html from './../images/html.PNG'
import js from './../images/js.PNG'
import mongo from './../images/mongoDB.PNG'
import node from './../images/node.PNG'
import postgresql from './../images/postgresql.PNG'
import rails from './../images/rails.PNG'
import reactimg from './../images/react.PNG'
import redux from './../images/redux.PNG'
import webpack from './../images/webpack.PNG'
import ruby from './../images/ruby.PNG'
import github from './../images/github.PNG'
import linkedin from './../images/linkedin.jpg'


const Body = ({refs}) => {
    const {homeRef, aboutRef, skillsRef, projectsRef, contactRef} = refs
    

    return (
        <div className='body'>


            <div ref={homeRef} className='home'>
                <div>
                    <h1>Chris Bram</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                <img src={face} className='face'/>
            </div>


            <div ref={aboutRef} className='about'>
                <h2>About</h2>
                <div className='aboutContent'>
                    <h3>
                        Thank you for visiting my portfolio! I'm Chris Bram, an impassioned software engineer committed to crafting elegant solutions to real-world problems. 
                    </h3>
                    <h3>
                        Driven by curiosity and a strong proficiency in modern web development, I thrive in many types of collaborative environments. Whether it's building scalable web applications, crafting intuitive user interfaces, or diving into the latest technologies, I'm always eager to tackle new challenges head-on.
                    </h3>
                    <h3>
                        Beyond coding, I'm a lifelong learner, constantly expanding my skill set and staying tuned-in to emerging industry trends. When I'm not at my computer, you can find me experimenting with modern music theory concepts, testing out new coffee recipes, or losing myself in a good book.
                    </h3>
                    <h3>
                        Explore my portfolio to learn more about my skills and experience, and feel free to reach out - I'm always happy to chat about tech, projects, or anything in between!
                    </h3>
                </div>
            </div>



            <div ref={skillsRef} className='skills'>
                <h2>Skills</h2>
                <div className='skillsBox'>
                    <img src={css} />
                    <img src={html} />
                    <img src={git} />
                    <img src={js} />
                    <img src={mongo} />
                    <img src={node} />
                    <img src={postgresql} />
                    <img src={ruby} />
                    <img src={rails} />
                    <img src={reactimg} />
                    <img src={redux} />
                    <img src={webpack} />
                </div>
            </div>



            {/* <div ref={projectsRef} className='projects'>
                projects
            </div> */}



            <div ref={contactRef} className='contact'>
                <h2>Contact</h2>
                <div className='indent1'>
                    <h3>Email</h3>
                    <div className='indent1'>
                        <Link to='#' onClick={e => {
                            window.location.href = "mailto:cpbram2011@gmail.com";
                            e.preventDefault()
                        }}>
                            cpbram2011@gmail.com
                        </Link>
                    </div>

                    <h3>Phone</h3>
                    <div className='indent1'>
                        <h4>507.319.0972</h4>
                    </div>

                    <h3>Social</h3>
                    <div className='indent1'>
                        <a href="https://github.com/cpbram2011" target="_blank">Github</a>
                        <a href="https://www.linkedin.com/in/chris-bram/" target="_blank">LinkedIn</a>
                    </div>
                </div>
                
                
                
                <a className="resume" href="https://docs.google.com/document/d/1B1ILsY_5Mf_t-glzwC53nfE37HUErYaf4XYDs7kgkw4/edit" target="_blank">
                    Résumé
                </a>
            </div>
        </div>
    )
}

export default Body