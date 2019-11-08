import React, {Component} from 'react';
import ScrollToTop from 'react-scroll-up';
import './home.css'
import goUpNarrrowImage from '../baseline-arrow_upward-24px.svg';

class Home extends Component{
    render(){
        return(
            <div className="home-page">
                <ScrollToTop showUnder={500}> 
                    <span>
                        <img src={goUpNarrrowImage} />
                    </span>
                </ScrollToTop>
                <div className="intro">
                    <div className="content">
                        <h1 className="title">Hello, I'm Kenas</h1>
                        <p className="text">
                            I write codes
                        </p>
                    </div>
                </div>
                <div className="education">
                    <div className="content">
                        <h1 className="title">Education</h1>
                        <p className="text">
                            I graduated from <a className="a" href="https://www.iphschools.sch.id/">IPH Highschool</a> in 2016,
                            <br></br>
                            Now I'm pursuing my Bachelor of Software Engineering in <a className="a" href="https://www.tku.edu.tw/">Tamkang University</a>, Taiwan 
                            and currently taking my final year.
                        </p>
                    </div>
                </div>
                <div className="experience">
                    <div className="content">
                        <h1 className="title">Experience</h1>
                        <p className="text">
                            So far I've been doing personal and group projects, whereas I learned bunch of stuff about code devs
                            such as, creating a Point-of-Sale System using JavaFX,
                            creating a simple Todos-Webapp using Apache, MySQL and PHP script,
                            and in my spare time, designing a skeleton JavaFX UIs for desktop application. 
                            <br></br>
                            <br></br>
                            Also I took part in doing a research paper about Machine Learning,
                            and how it can help us to detect fallacy in political news articles.
                        </p>
                    </div>
                </div>
                <div className="projects">
                    <div className="content">
                        <h1 className="title">Projects</h1>
                        <p className="text">
                            My recent project is about <a className="a" href="https://github.com/kenaszogara/fake-news-detection-app-tku">Machine Learning</a>,
                            previously mention above, 
                            It's a team project, 
                            and currently we are working on publishing the paper to the <a className="a" href="http://www.gtmconference.org/">GTM Conference 2019</a>
                        </p>
                            
                    </div>
                </div>
                <div className="contacts">
                    <div className="content">
                        <h1 className="title">Contact me</h1>
                        <p className="text">
                            I'm open to conversation and love to connect with new people, 
                                you can reach me through my <a className="a" href="mailto: kenaszogara@live.com">email</a>, <a className="a" href="https://github.com/kenaszogara">github</a> and <a className="a" href="https://www.linkedin.com/in/kenas-zogara-645a07191/">linkedin</a>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home