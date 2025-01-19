import React from 'react';

function Footer() {
    return(
        <footer id="contact" className="footer">
          <div className="footer-content">
            <div className="contact-links">
              <hr></hr>
              <a href="mailto:lavondet@mit.edu" className="contact-link">
                <img src="/outlook.svg" alt="Email" className="contact-icon" />
              </a>
              <a href="https://www.linkedin.com/in/lavondet" target="_blank" className="contact-link">
                <img src="/linkedin.svg" alt="LinkedIn" className="contact-icon" />
              </a>
              <a href="https://github.com/lavondet" target="_blank" className="contact-link">
                <img src="/github.svg" alt="GitHub" className="contact-icon" />
              </a>
            </div>
          </div>
        </footer>
    );
}

export default Footer;
