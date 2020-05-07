import React from 'react';
import "./Footer.css";



const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>TRAVELTIP</h4>
                        <ul className="list-unstyled">
                            <p>Find your perfect vacation with TravelTip. Book easy and quick and let your dreams come true</p>
                        </ul>
                        <div className="social-media">
                            <a href="" className="social-icon"> <i className="fa fa-facebook"/></a>
                            <a href="" className="social-icon"> <i className="fa fa-twitter"/></a>
                            <a href="" className="social-icon"> <i className="fa fa-instagram"/></a>
                        </div>
                    </div>
                    <div className="col">
                        <h4>Information</h4>
                        <ul className="list-unstyled">
                            <li><a href="">About</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Privacy and Policy</a></li>
                            <li><a href="">Terms and Conditions</a></li>
                            <li><a href="">FAQ</a></li>

                        </ul>
                    </div>
                    <div className="col">
                        <h4>Contact</h4>
                        <ul className="list-unstyled">
                            <li>Heidelberglaan 15<br/>3584 CS, Utrecht <br/>The Netherlands</li>
                            <li><a href="" className="social-icon"> <i className="fa fa-phone"/>  030-73645362283</a></li>
                            <li><a href="" className="social-icon"> <i className="fa fa-envelope"/>  info@chno.nl</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="line"/>
                <div className="row2">
                    <p className="col sm">
                       &copy;{new Date().getFullYear()} TRAVELTIP | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>

    )
}


export default Footer;