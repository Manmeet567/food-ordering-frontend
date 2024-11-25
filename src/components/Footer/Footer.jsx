import "./Footer.css";
import appStoreBadge from "../../assets/app-store-badges.png";
import footerLogo from "../../assets/footer-logo.png";
import { Link } from "react-router-dom";
import facebook from "../../assets/Facebook.png";
import instagram from '../../assets/Instagram.png';
import tiktok from '../../assets/TikTok.png';
import snapchat from '../../assets/Snapchat.png';

function Footer() {
  return (
    <div className="footer">
      <div className="main-footer">
        <div className="company-info">
          <Link to="/"><img src={footerLogo} alt="Logo" /></Link>
          <img src={appStoreBadge} alt="app store" />
          <p>Company # 490039-445, Registered with House of companies.</p>
        </div>
        <div className="mf-other-info">
          <div className="mfoi-first">
            <h4>Get Exclusive Deals in your Inbox</h4>
            <div className="mfoif-subscribe">
              <input type="text" placeholder="youremail@gmail.com"/>
              <button>Subscribe</button>
            </div>
            <p>we wont spam, read our email policy</p>
            <div className="mfoif-icons">
              <img src={facebook} alt="facebook" className="f-icon" />
              <img src={instagram} alt="instagram" className="f-icon" />
              <img src={tiktok} alt="tiktok" className="f-icon" />
              <img src={snapchat} alt="snapchat" className="f-icon" />
            </div>
          </div>
          <div className="mfoi-links">
            <h4>Legal Pages</h4>
            <div>
              <a href="#">Terms and conditions</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
              <a href="#">Modern Slavery Statement</a>
            </div>
          </div>
          <div className="mfoi-links">
            <h4>Important Links</h4>
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
