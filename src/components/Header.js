import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Welcome</h1>
                <p>My Name is Dylan Jannetty, I'm a front-end web developer.<br/> Let me build you something beautiful</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#" onClick={() => {props.onOpenArticle('intro')}}>Experience</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="#" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
