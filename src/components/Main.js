import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/menssuit.jpg'
import pic02 from '../images/code.jpg'
import pic03 from '../images/aboutIMG.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Experience</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3>Sharplink</h3>
          <h5>Front-End Developer</h5>
          <p>June 2018 - Current<br />Developing free-to-play fantasy and other sports gaming solutions. Working with the biggest names across professional sports leagues and media in the nation such as Turner Sports, Google, Facebook, NFL, NCAA, and NBA.</p>
          <h3>General Assembly</h3>
          <h5>Student</h5>
          <p>March 2018 - June 2018<br />Completed 3 month immersive program for web development</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Personal Projects</h3>
          <ul>
            <a href="https://dylan-jannetty.github.io/djsTicTacToe/" rel="noopener noreferrer" target="_blank"><li>TIC TAC TOE</li></a>
          </ul>
          <h3>Language/Frameworks/Libraries</h3>
          <ul>
            <li>NextJs</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>AngularJS</li>
            <li>Javascript</li>
            <li>Redux</li>
            <li>Gatsbyjs</li>
            <li>Scss</li>
            <li>CSS</li>
            <li>Styled-Components</li>
          </ul>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Me</h2>
          <img className="aboutIMG" src={pic03} alt="" />
          <p>After working in construction for 5 years I knew I needed change, in turn I brought my go getter, passionate, and determined mentality to web development. Providing clients with fully functional, high quality apps is what I strive to accomplish with every project given to me. I find that being able to create something with your hands is great, but being able to create something with your mind is nothing short of remarkable.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <div className="field name">
              <label htmlFor="name">
                Name <span>*</span>
              </label>
              <input type="text" name="name" id="name" required minLength={2} />
            </div>
            <div className="field email">
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                required
                pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*"
              />
            </div>
            <div className="field file">
              <label htmlFor="file">File</label>
              <input type="file" name="file" id="file" />
            </div>
            <div className="field message">
              <label htmlFor="message">
                Message <span>*</span>
              </label>
              <textarea name="message" id="message" rows="6" required minLength={6} />
            </div>
            <div className="field submit">
              <input type="submit" value="Send Message" />
              <input type="reset" value="Reset" />
            </div>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
          </form>



          <ul className="icons">
            <li><a href="https://twitter.com/jannettysays" target="_blank" rel="noopener noreferrer" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/jannetty" target="_blank" rel="noopener noreferrer" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="https://www.instagram.com/dylan_jannetty93/" rel="noopener noreferrer" target="_blank" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/Dylan-Jannetty" target="_blank" rel="noopener noreferrer" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
