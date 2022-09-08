import React from "react";
import Navbar from "./Component/Navbar";
import Services from "./Component/Services";

function App() {
  return (
    <div className="main-container">
      <div className="server-image"></div>
      <div className="page-top-container">
        <Navbar />
        <div className="page-top">
          <div className="page-top--left-text">
            <div className="left-text-content">
              <label>WE BUILD GREAT SOFTWARE</label>
              <label>
                Custom web and mobile application development done right.
              </label>
              <label>
                Trusted software development: delivered intelligently, designed
                to unlock growth.
              </label>
            </div>
            <div className="meet-expert">
              <button>MEET EXPERT</button>
            </div>
          </div>
          <div className="page-top--right-image">
            <div className="image-tools"></div>
            <div className="image-api"></div>
            <div className="image-code"></div>
          </div>
        </div>
      </div>
      <div className="page-middle-container">
        <div className="page-middle-text">
          <label>Let&sbquo;s build something great</label>
          <label>
            EXRYGEN is delivering Intelligent, cost-effective, custom software
            solutions for companies.
          </label>
        </div>
        <Services />
      </div>
      <div className="page-latter-container">
        <div className="page-latter-middle-card">
          <div className="page-latter-middle-header">
            <label>WHAT SOME OF OUR CLIENTS SAY</label>
          </div>
          <div className="page-letter-details-card">
            <div className="page-letter-details">
              <div className="avatar"></div>
              <label>
                We liked what they had done for other clients; they were
                confident that everything we wanted was &lsquo;doable&rsquo;;
                and they would be using the latest Microsoft technologies which
                felt very futureproof. Read more.
              </label>
              <p>
                Georgie Stone, Global Manager of Product Asset Management, ABC
                Company
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-detail">
            <div className="footer-logo"></div>
            <div className="footer-logo-2"></div>
          </div>
          <div className="copy-right">
            <div>Copyrights © 2021 All Rights Reserved EXRYGEN LIMITED</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
