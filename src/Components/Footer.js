import React from "react";
import { AppState } from "../contexts/Context";
import "./foot.css";

const Footer = () => {
  const { setSidebar } = AppState();
  return (
    <div
      onClick={() => {
        setSidebar(false);
      }}
    >
      <footer className="footer">
        <div className="news-letter">
          <h2 style={{ color: "#ffffff" }} className="subscribe-text">
            Subscribe to Blog via Email
          </h2>
          <p style={{ color: "#ABABAB" }} className="address-text">
            Enter your email address to subscribe to this blog and receive
            notifications of new posts by email.
          </p>
          <div className="subscribe-form">
            <input
              className="subscribe-input"
              type="text"
              placeholder="     Enter email address"
            />
            <input className="subscribe-btn" type="button" value="Subscribe" />
          </div>
        </div>
        <div className="footer-link-section">
          <div className="information">
            <span>Information</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate Disclousure - ShoutMeLoud</li>
            </ul>
          </div>
          <div className="about">
            <span>About</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="navigate">
            <span>Navigate</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate Disclousure</li>
            </ul>
          </div>
          <div className="resources">
            <span>Resources</span>
            <ul>
              <li>Advertise</li>
              <li>Archives</li>
              <li>SiteMap</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Affiliate Disclousure</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer-below">
        Copyright © 2022 Abhishek Shukla | Created by Abhishek Shukla
      </div>
    </div>
  );
};

export default Footer;
