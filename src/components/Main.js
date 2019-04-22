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
          <h3>General Assembly</h3>
          <p>March 2018 - June 2018<br />Completed 3 month immersive program for web development</p>
          <h3>SportsHubTech</h3>
          <p>June 2018 - Current<br />Developing professional sports applications</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Personal Projects</h3>
          <ul>
            <a href="https://dylan-jannetty.github.io/djsTicTacToe/" rel="noopener noreferrer" target="_blank"><li>TIC TAC TOE</li></a>
            <a href="https://dylan-jannetty.github.io/softball-client/" rel="noopener noreferrer" target="_blank"><li>SOFTBALL LEAGUE MANAGER(still in development)</li></a>
          </ul>
          <h3>Language/Frameworks/Libraries</h3>
          <ul>
            <li>AngularJS</li>
            <li>React</li>
            <li>Javascript</li>
            <li>Redux</li>
            <li>Ruby On Rails</li>
            <li>Gatsbyjs</li>
            <li>Scss</li>
            <li>CSS</li>
            <li>HTML</li>
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
          
          <form method="POST" action="/no-cache=1" name="contact-form" data-netlify="true" data-netlify-honeypot="bot-field">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <div netlify-recaptcha="true"></div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
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
