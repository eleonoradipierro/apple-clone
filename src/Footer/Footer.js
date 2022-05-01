import { useState } from "react";
import "./Footer.scss";

const MenuItem = (props) => {
  const { title, children } = props;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <li
        style={{ borderBottom: showMenu && "none" }}
        onClick={() => setShowMenu(!showMenu)}
      >
        <p
          style={{
            color: showMenu && "black",
          }}
        >
          {title}
        </p>
        {showMenu ? <span>x</span> : <span>+</span>}
      </li>
      {showMenu && <>{children}</>}
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footerContainer">
          <div className="footerTopElement">
            Apple TV+ is £4.99/month after free trial. One subscription per
            Family Sharing group. Offer valid for three months after eligible
            device activation. Plan automatically renews until cancelled.
            Restrictions and other <a href="">terms</a> apply.
          </div>

          <div className="footerMenuMobile">
            <ul className="footerMenuMobile__items footerMenuMobile__items--mobile">
              <MenuItem title="Shop and Learn">
                <ul className="itemsMobile__detail">
                  <li>
                    <a href="">Store</a>
                  </li>
                  <li>
                    <a href="">Mac</a>
                  </li>
                  <li>
                    <a href="">iPad</a>
                  </li>
                  <li>
                    <a href="">iPhone</a>
                  </li>
                  <li>
                    <a href="">Watch</a>
                  </li>
                  <li>
                    <a href="">TV & Home</a>
                  </li>
                  <li>
                    <a href="">iPod touch</a>
                  </li>
                  <li>
                    <a href="">AirTag</a>
                  </li>
                  <li>
                    <a href="">Accessories</a>
                  </li>
                  <li>
                    <a href="">Gift Cards</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="Services">
                <ul className="items__detail">
                  <li>
                    <a href="">Apple Music</a>
                  </li>
                  <li>
                    <a href="">Apple TV +</a>
                  </li>
                  <li>
                    <a href="">Apple Fitness+</a>
                  </li>
                  <li>
                    <a href="">Apple News+</a>
                  </li>
                  <li>
                    <a href="">Apple Arcade</a>
                  </li>
                  <li>
                    <a href="">iCloud</a>
                  </li>
                  <li>
                    <a href="">Apple One</a>
                  </li>
                  <li>
                    <a href="">Apple Pay</a>
                  </li>
                  <li>
                    <a href="">Apple Books</a>
                  </li>
                  <li>
                    <a href="">Apple Podcasts</a>
                  </li>
                  <li>
                    <a href="">App Store</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="Account">
                <ul className="items__detail">
                  <li>
                    <a href="">Manage Your Apple ID</a>
                  </li>
                  <li>
                    <a href="">Apple Store Account</a>
                  </li>
                  <li>
                    <a href="">iCloud.com</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="Apple Store">
                <ul className="items__detail">
                  <li>
                    <a href="">Find a Store</a>
                  </li>
                  <li>
                    <a href="">Genius Bar</a>
                  </li>
                  <li>
                    <a href="">Today at Apple</a>
                  </li>
                  <li>
                    <a href="">Apple Summer Camp</a>
                  </li>
                  <li>
                    <a href=""> Apple Store App</a>
                  </li>
                  <li>
                    <a href="">Refurbished and Clearance</a>
                  </li>
                  <li>
                    <a href="">Financing</a>
                  </li>
                  <li>
                    <a href="">Apple Trade In</a>
                  </li>
                  <li>
                    <a href="">Order Status</a>
                  </li>
                  <li>
                    <a href="">Shopping Help</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="For Business">
                <ul className="items__detail">
                  <li>
                    <a href="">Apple and Business</a>
                  </li>
                  <li>
                    <a href="">Shop for Business</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="For Education">
                <ul className="items__detail">
                  <li>
                    <a href="">Apple and Education</a>
                  </li>
                  <li>
                    <a href="">Shop for University</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="For Healthcare">
                <ul className="items__detail">
                  <li>
                    <a href="">Apple in Healthcare</a>
                  </li>
                  <li>
                    <a href="">Health on Apple Watch</a>
                  </li>
                  <li>
                    <a href="">Health Records on iPhone</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title=" Apple Values">
                <ul className="items__detail">
                  <li>
                    <a href="">Accessibility</a>
                  </li>
                  <li>
                    <a href="">Environment</a>
                  </li>
                  <li>
                    <a href="">Privacy</a>
                  </li>
                  <li>
                    <a href="">Supplier Responsibility</a>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem title="About Apple">
                <ul className="items__detail">
                  <li>
                    <a href="">Newsroom</a>
                  </li>
                  <li>
                    <a href="">Apple Leadership</a>
                  </li>
                  <li>
                    <a href="">Career Opportunities</a>
                  </li>
                  <li>
                    <a href="">Warranty</a>
                  </li>
                  <li>
                    <a href="">Investors</a>
                  </li>
                  <li>
                    <a href="">Ethics & Compliance</a>
                  </li>
                  <li>
                    <a href="">Events</a>
                  </li>
                  <li>
                    <a href="">European Job Creation</a>
                  </li>
                  <li>
                    <a href="">Contact Apple</a>
                  </li>
                </ul>
              </MenuItem>
            </ul>
          </div>

          <div className="footerMenuDesktop">
            <div className="footerMenuDesktop__items">
              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  Shop and Learn
                </li>
                <li>
                  <a href="">Store</a>
                </li>
                <li>
                  <a href="">Mac</a>
                </li>
                <li>
                  <a href="">iPad</a>
                </li>
                <li>
                  <a href="">iPhone</a>
                </li>
                <li>
                  <a href="">Watch</a>
                </li>
                <li>
                  <a href="">TV & Home</a>
                </li>
                <li>
                  <a href="">iPod touch</a>
                </li>
                <li>
                  <a href="">AirTag</a>
                </li>
                <li>
                  <a href="">Accessories</a>
                </li>
                <li>
                  <a href="">Gift Cards</a>
                </li>
              </ul>
            </div>

            <div className="footerMenuDesktop__items">
              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">Services</li>
                <li>
                  <a href="">Apple Music</a>
                </li>
                <li>
                  <a href="">Apple TV +</a>
                </li>
                <li>
                  <a href="">Apple Fitness+</a>
                </li>
                <li>
                  <a href="">Apple News+</a>
                </li>
                <li>
                  <a href="">Apple Arcade</a>
                </li>
                <li>
                  <a href="">iCloud</a>
                </li>
                <li>
                  <a href="">Apple One</a>
                </li>
                <li>
                  <a href="">Apple Pay</a>
                </li>
                <li>
                  <a href="">Apple Books</a>
                </li>
                <li>
                  <a href="">Apple Podcasts</a>
                </li>
                <li>
                  <a href="">App Store</a>
                </li>
              </ul>

              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">Account</li>
                <li>
                  <a href="">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="">Apple Store Account</a>
                </li>
                <li>
                  <a href="">iCloud.com</a>
                </li>
              </ul>
            </div>

            <div className="footerMenuDesktop__items">
              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  Apple Store
                </li>
                <li>
                  <a href="">Find a Store</a>
                </li>
                <li>
                  <a href="">Genius Bar</a>
                </li>
                <li>
                  <a href="">Today at Apple</a>
                </li>
                <li>
                  <a href="">Apple Summer Camp</a>
                </li>
                <li>
                  <a href=""> Apple Store App</a>
                </li>
                <li>
                  <a href="">Refurbished and Clearance</a>
                </li>
                <li>
                  <a href="">Financing</a>
                </li>
                <li>
                  <a href="">Apple Trade In</a>
                </li>
                <li>
                  <a href="">Order Status</a>
                </li>
                <li>
                  <a href="">Shopping Help</a>
                </li>
              </ul>
            </div>

            <div className="footerMenuDesktop__items">
              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  For Business
                </li>
                <li>
                  <a href="">Apple and Business</a>
                </li>
                <li>
                  <a href="">Shop for Business</a>
                </li>
              </ul>

              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  For Education
                </li>
                <li>
                  <a href="">Apple and Education</a>
                </li>
                <li>
                  <a href="">Shop for University</a>
                </li>
              </ul>

              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  For Healthcare
                </li>
                <li>
                  <a href="">Apple in Healthcare</a>
                </li>
                <li>
                  <a href="">Health on Apple Watch</a>
                </li>
                <li>
                  <a href="">Health Records on iPhone</a>
                </li>
              </ul>
            </div>

            <div className="footerMenuDesktop__items">
              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  Apple Values
                </li>
                <li>
                  <a href="">Accessibility</a>
                </li>
                <li>
                  <a href="">Environment</a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Supplier Responsibility</a>
                </li>
              </ul>

              <ul className="footerMenuDesktop__list">
                <li className="footerMenuDesktop__list__boldElem">
                  About People
                </li>
                <li>
                  <a href="">Newsroom</a>
                </li>
                <li>
                  <a href="">Apple Leadership</a>
                </li>
                <li>
                  <a href="">Career Opportunities</a>
                </li>
                <li>
                  <a href="">Warranty</a>
                </li>
                <li>
                  <a href="">Investors</a>
                </li>
                <li>
                  <a href="">Ethics & Compliance</a>
                </li>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">European Job Creation</a>
                </li>
                <li>
                  <a href="">Contact Apple</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="footerBottomElement footerElement--middle">
            More ways to shop:
            <a className="blueLink" href="">
              find an Apple Store
            </a>
            or
            <a className="blueLink" href="">
              other retailer
            </a>
            near you. Or call 0800 048 0408.
          </div>
        </div>

        <div>
          <div className="footerCredits">
            <div className="footerCredits__items">
              <div>Copyright © 2022 Apple Inc. All rights reserved.</div>

              <div className="footerCredits__order">
                <div className="footerCredits__order__details">
                  <a href=""> Privacy Policy </a>
                </div>
                <div className="footerCredits__order__details">
                  <a href="">Use of Cookies</a>
                </div>
                <div className="footerCredits__order__details">
                  <a href="">Terms of Use</a>
                </div>
                <div className="footerCredits__order__details">
                  <a href="">Sales and Refunds</a>
                </div>
                <div className="footerCredits__order__details">
                  <a href="">Legal</a>
                </div>
                <div className="footerCredits__order__details">
                  <a href="">Site Map</a>
                </div>
              </div>

              <div className="footerCredits__order__languageAlign">
                <a href="">United Kingdom</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
