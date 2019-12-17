import React, { Component } from 'react';
import Navigation from './navigation'
import github from '../assets/github.svg';
import paper from '../assets/paper.svg';
import './about.css';

class About extends Component{
  render(){
    return(
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="box-content">
                  <p className="title">EDUCATION</p>
                  <div className="box">
                    <p className="content">
                      I'm 22yo, graduated from <a href="https://www.iphschools.sch.id/">IPH Highschool</a> in 2016 and currently pursuing my Bachelor of Software Engineering in <a href="https://www.tku.edu.tw/">Tamkang University</a>(fourth year)
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box-content">
                  <p className="title">ME</p>
                  <div className="box">
                    <p className="content">
                      As a student I am trained to "study how things work by myself", <br></br> I am highly self-motivated and self-taught programmer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box-content">
                  <p className="title">MOTIVES</p>
                  <div className="box">
                    <p className="content">
                      And hey, I still have plenty of room to grow! With the more projects to come, I'm sure I will be a master at one or two of the coding-family-branch(smiley face)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="box-content">
                  <p className="title">PROJECTS</p>
                  <div className="box">
                    <div className="content-img">
                      <img
                        src={github}
                        alt="github icon logo"
                        className="image"
                      />
                    </div>
                    <div className="content-link">
                      <a className="link" href="https://github.com/kenaszogara">GitHub.com/KenasZogara</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box-content">
                  <p className="not-visible">text</p>
                  <div className="box">
                    <div className="content-img">
                      <img
                        src={paper}
                        alt="github icon logo"
                        className="image"
                      />
                    </div>
                    <div className="content-link">
                      <a className="link" href="https://vpinstitute.org/wp-content/uploads/2019/10/GTM2019_paper_36.pdf">Global Tech Mining Conference 2019</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="box-content">
                  <p className="title">SERVICES</p>
                  <div className="box">
                    <div className="content-img">
                      WEB DEV
                    </div>
                    <div className="content-link">
                      <p>both front-end <br></br> or back-end</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box-content">
                  <p className="not-visible">text</p>
                  <div className="box">
                    <div className="content-img">
                      DESKTOP APP
                    </div>
                    <div className="content-link">
                      <p>with Java <br></br> plus SQL integration</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="box-content">
                  <p className="not-visible">text</p>
                  <div className="box">
                    <div className="content-img">
                      UI / UX DESIGN
                    </div>
                    <div className="content-link">
                      <p>website pages <br></br>
                      mobile app <br></br>
                      desktop app</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About