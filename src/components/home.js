import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from './navigation'
import Button from 'react-bootstrap/Button';
import './home.css'

class Home extends Component{

    state = {
        redirect: false
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    };

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/contact' />
        }
    }

    render(){
        return(
            <div className="bg">
                {this.renderRedirect()}
                <Navigation />
                <div className="main-div">
                    <p className="h1">Hi,</p>
                    <p className="h1">I'm Kenas Zogara</p>
                    <p className="p">Software Engineer / Web Developer / UI Designer</p>
                    <Button 
                        href="mailto: kenaszogara@live.com" 
                        size="lg"
                        onClick={this.setRedirect}
                    >
                        Hire Me!
                    </Button>
                </div>
            </div>
        )
    }
}

export default Home