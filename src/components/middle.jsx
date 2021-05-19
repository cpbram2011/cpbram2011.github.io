import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default class middleSection extends Component {
    render() {
        return (
            <>
         
         <div id="home" >
          <div>
            <h1>Chris Bram</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
            <img src="../images/me.jpg" alt="" srcset=""/>
        </div>
        <div id="skills" >
          <h1>Technical Skills</h1>
          <div>
              <img src="../images/aws.PNG"/>
              <img src="../images/css.PNG"/>
              <img src="../images/git.PNG"/>
              <img src="../images/github.PNG"/>
              <img src="../images/heroku.PNG"/>
          </div>
          <div>
              <img src="../images/html.PNG"/>
              <img src="../images/js.PNG"/>
              <img src="../images/mongoDB.PNG"/>
              <img src="../images/node.PNG"/>
              <img src="../images/postgresql.PNG"/>
          </div>
          <div>
              <img src="../images/rails.PNG"/>
              <img src="../images/react.PNG"/>
              <img src="../images/redux.PNG"/>
              <img src="../images/ruby.PNG"/>
              <img src="../images/webpack.PNG"/>
          </div>
              {/* <img src="../images/" alt="" srcset=".PNG"/> */}
          </div>
        <div id="projects">
          <h1>Projects</h1>
          <div>
            <section className="statify">
              <img src="../images/statify.PNG" alt="" srcset=""/>
              <h2>Statify</h2>
              <h3>View music stats on data from your listening history on Spotify</h3>
              <h3>JavaScript, React/Redux, Express, Heroku, HTML, CSS</h3>
              <span>
                <Button variant="outlined" style={{'color': 'white', 'border-color': 'white'}}>
                  <a href="https://statifymusic.herokuapp.com/" target="_blank">
                    live site
                  </a>
                </Button>
                <Button variant="contained" color='primary'>
                <a href="https://github.com/cpbram2011/statify" target="_blank">
                  github repo
                </a>
                </Button>
              </span>
            </section>
            <section className="contrafact">
              <img src="../images/contrafact.PNG" alt="" srcset=""/>
              <h2>Contrafact</h2>
              <h3>A SoundCloud inspired app for discovering and listening to new music</h3>
              <h3>JavaScript, React/Redux, Express, Heroku, HTML, CSS</h3>
              <span>
                <Button variant="outlined" style={{'color': 'white', 'border-color': 'white'}}>
                <a href="http://contrafact.herokuapp.com/" target="_blank">
                  live site
                </a> 
                </Button>
                <Button variant="contained" color='primary'>
                <a href="https://github.com/cpbram2011/contrafact" target="_blank">

                  github repo
                </a>
                </Button>
              </span>
            </section>

            <section className="hammeron">
              <img src="../images/hammeron.PNG" alt="" srcset=""/>
              <h2>Hammeron</h2>
              <h3>A real-time polyphonic synthesizer powered by Tone.js</h3>
              <h3>Javascript, Tone.js, Webpack, Node.js, HTML, SCSS</h3>
              <span>
                <Button variant="outlined" style={{'color': 'white', 'border-color': 'white'}}>
                <a href="https://github.com/cpbram2011/hammeron" target="_blank">
                  live site
                </a>
                </Button>
                <Button variant="contained" color='primary'>
                <a href="https://github.com/cpbram2011/hammeron" target="_blank">
                  github repo
                </a>
                </Button>
              </span>
            </section>


          </div>
        </div>
        <div id="contact" style={{height: 500}}>
          <h1>Contact</h1>
          <div>

          <h2>Email</h2>
          <p><a href="mailto:cpbram2011@gmail.com">cpbram2011@gmail.com</a></p>
          <h2>Phone</h2>
            <p>507.319.0972</p>
          <h2>Social</h2>
          <span>
            <a href="https://www.linkedin.com/in/chris-bram-522a661b9/" target="_blank" class="icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/cpbram2011" target='_blank' class="icon">
              <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
            </a>

          </span>
            <Button variant="outlined" id='btn' style={{'color': 'white', 'border-color': 'white'}}>
            <a href="https://docs.google.com/document/d/e/2PACX-1vTc2euwL026WH7swBODeC5CtK1QBE9vXQERo5AKxw4Xdmk8Pd8qezusf_74V9do00DiAXi42UDz2Tei/pub" target='_blank' >
              Résumé
            </a>
            </Button>
          </div>

        </div>
        </>
        )
    }
}