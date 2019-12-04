import React, { Component } from 'react';
import Navigation from './navigation';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github-white.svg';
import email from '../assets/email.svg';
import './contact.css'

class Contact extends Component{
  render(){
    return(
      <div>
        <Navigation />
        <div className="main">
          <h1>I Love Meeting New People</h1>
          <p className="txt">Well, I can be funny at times :) <br></br>
            Hit me up through <a href="mailto: kenaszogara@live.com">Email</a>, <a href="https://github.com/kenaszogara">GitHub</a>, phone(?) <br></br>
            or use <a href="https://linkedin.com/in/kenas-zogara-645a07191">LinkedIn</a> lol</p>
          <div>
            <a href="mailto: kenaszogara@live.com">
                <img className="icons"
                  src={email}
                  alt="email icons"
                />
            </a>
            <a href="https://github.com/kenaszogara">
              <img className="icons"
                src={github}
                alt="github icons"
              />
            </a>
            <a href="https://linkedin.com/in/kenas-zogara-645a07191">
              <img className="icons"
                src={linkedin}
                alt="linkedin icons"
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;