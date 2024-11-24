import "./Footer.css";
import appStoreBadge from "../../assets/app-store-badges.png";
import footerLogo from "../../assets/footer-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="company-info">
          <img src={footerLogo} alt="Logo" />
          <img src={appStoreBadge} alt="app store" />
          <p>Company # 490039-445, Registered with House of companies.</p>
        </div>
        <div className="mf-other-info">
          <div className="mfoi-first">
            <h5>Get Exclusive Deals in your Inbox</h5>
            <div className="mfoif-subscribe">
              <input type="text" />
              <button>Subscribe</button>
            </div>
            <p>we wont spam, read our email policy</p>
            <div className="mfoif-icons">
              <FaFacebook />
              <AiFillInstagram />
              <AiFillTikTok />
              <FaSnapchat />
            </div>
          </div>
          <div className="mfoi-links">
            <h5>Legal Pages</h5>
            <div>
              <a href="#">Terms and conditions</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
              <a href="#">Modern Slavery Statement</a>
            </div>
          </div>
          <div className="mfoi-links">
            <h5>Important Links</h5>
            <div>
              <a href="#">Get help</a>
              <a href="#">Add your restaurant</a>
              <a href="#">Sign up to deliver</a>
              <a href="#">Create a business account</a>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="sf-links">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Pricing</p>
          <p>Do not sell or share my personal information</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
