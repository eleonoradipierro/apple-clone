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
        <a className="unicef__link link-blue small-text" href="">
          <p>Donate to support families affected by the war in Ukraine</p>
      </a>
    </div>
    </div>
  );
};

const Body = () => {
  return (
    <div class="container-images">
      <div class="container-image-text">
        <div class="background-image-iphone13">
          <h2 class="super-large-text margin-align-text">iPhone 13 Pro</h2>
          <h3 class="large-text">Oh. So. Pro.</h3>
          <div class="link-container">
            <a class="link-blue medium-text" href="">
              Learn more
            </a>
            <a class="link-blue medium-text" href="">
              Buy
            </a>
          </div>
        </div>
      </div>

      <div class="container-image-text">
        <div class="background-image-iphonese">
          <h3 class="medium-text margin-align-text">The new</h3>
          <div>
            <img src={iphoneseImg} class="iphone-se-img" />
          </div>
          <h3 class="large-text">Love the power. Love the price.</h3>
          <div class="link-container">
            <a class="link-blue medium-text" href="">
              Learn more
            </a>
            <a class="link-blue medium-text" href="">
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
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
