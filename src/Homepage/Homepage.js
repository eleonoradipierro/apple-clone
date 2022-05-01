import "./Homepage.scss";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import unicefImg from "../images/unicef_logo_dark__ejvlglygb3ee_large_2x.png";
import iphoneseImg from "../images/logo_hero_iphonese__dtb7zrygggeq_largetall_2x.png";

const UnicefBlock = () => {
  return (
    <div className="unicefSection">
      <div className="unicef">
        <img className="unicef__image" src={unicefImg} />
        <a className="unicef__link unicef__link-blue" href="">
          <p>Donate to support families affected by the war in Ukraine</p>
        </a>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <section className="imageSection">
      <div className="iphone13Section iphone13Section--background">
        <h1>iPhone 13 Pro</h1>
        <h3>Oh. So. Pro.</h3>
        <div className="linkContainer">
          <a href="">
            Learn more <span>&gt;</span>
          </a>

          <a href="">
            Buy<span>&gt;</span>
          </a>
        </div>
      </div>

      <div className="iphoneseSection iphoneseSection--background">
        <h4>The new</h4>
        <div>
          <img src={iphoneseImg} className="iphoneseSection__image" />
        </div>
        <h3>Love the power. Love the price.</h3>
        <div className="linkContainer">
          <a href="">
            Learn more <span>&gt;</span>
          </a>
          <a href="">
            Buy<span>&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Homepage = () => {
  return (
    <>
      <Navbar />
      <UnicefBlock />
      <Body />
      <Footer />
    </>
  );
};

export default Homepage;
