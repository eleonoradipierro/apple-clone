import { useState } from "react";
import "./Footer.scss";

import submenu from "../api/submenu.json";

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

const MobileFooter = (props) => {
  const { allSubmenu } = props;
  return (
    <div className="footerMenuMobile">
      <ul className="footerMenuMobile__items footerMenuMobile__items--mobile">
        {allSubmenu.map((menu, i) => {
          return (
            <MenuItem key={i} title={menu.name}>
              <ul className="itemsMobile__detail">
                {menu.submenu.map((current, j) => {
                  return (
                    <li key={j}>
                      <a href="#top">{current}</a>
                    </li>
                  );
                })}
              </ul>
            </MenuItem>
          );
        })}
      </ul>
    </div>
  );
};

const DesktopFooter = (props) => {
  const { allSubmenu } = props;
  return (
    <div className="footerMenuDesktop">
      {allSubmenu.map((menu, i) => {
        return (
          <div key={i} className="footerMenuDesktop__items">
            <ul className="footerMenuDesktop__list">
              <li className="footerMenuDesktop__list__boldElem">{menu.name}</li>
              {menu.submenu.map((current, j) => {
                return (
                  <li key={j}>
                    <a href="#top">{current}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const Footer = () => {
  const creditsList = [
    "Privacy Policy",
    "Use of Cookies",
    "Terms of Use",
    "Sales and Refunds",
    "Legal",
    "Site Map",
  ];

  return (
    <footer>
      <div className="wrapper">
        <div className="footerContainer">
          <div className="footerTopElement">
            Apple TV+ is £4.99/month after free trial. One subscription per
            Family Sharing group. Offer valid for three months after eligible
            device activation. Plan automatically renews until cancelled.
            Restrictions and other <a href="#top">terms</a> apply.
          </div>

          <MobileFooter allSubmenu={submenu} />
          <DesktopFooter allSubmenu={submenu} />
        </div>

        <div>
          <div className="footerBottomElement footerElement--middle">
            More ways to shop:
            <a className="blueLink" href="#top">
              find an Apple Store
            </a>
            or
            <a className="blueLink" href="#top">
              other retailer
            </a>
            near you. Or call 0800 048 0408.
          </div>
        </div>

        <div className="footerCredits">
          <div className="footerCredits__items">
            <div>Copyright © 2022 Apple Inc. All rights reserved.</div>

            <div className="footerCredits__order">
              {creditsList.map((item, i) => {
                return (
                  <div key={i} className="footerCredits__order__details">
                    <a href="#top"> {item} </a>
                  </div>
                );
              })}
            </div>

            <div className="footerCredits__order__languageAlign">
              <a href="#top">United Kingdom</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
