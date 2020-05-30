import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
              <div className="header"></div>
              <div className="contactBox">
                <h1>Contactez-moi</h1>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Paris</span>
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt"></i>
                    <CopyToClipboard text="0778251831">
                      <span
                          className="clickInput"
                          onClick={() => { alert('Téléphone copié !');}}>07 78 25 18 31</span>
                    </CopyToClipboard>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    <CopyToClipboard text="faridjadda750@gmail.com">
                      <span
                          className="clickInput"
                          onClick={() => { alert('E-mail copié !');}}>Faridjadda750@gmail.com</span>
                    </CopyToClipboard>
                  </li>
                </ul>
            </div>
              <div className="socialNetwork">

                <ul>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <h4>LinkedIn</h4>
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/FDjadda" target="_blank" rel="noopener noreferrer">
                    <h4>Twitter</h4>
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/401_errors_/" target="_blank" rel="noopener noreferrer">
                    <h4>Instagram</h4>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://gitlab.com/dashboard/projects" target="_blank" rel="noopener noreferrer">
                    <h4>GitLab</h4>
                    <i className="fab fa-gitlab"></i>
                  </a>
                </ul>
              </div>
          </div>
        </div>
    );
};

export default Contact;
