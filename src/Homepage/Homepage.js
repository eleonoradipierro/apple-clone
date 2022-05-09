import "./Homepage.scss";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import unicefImg from "../images/unicef_logo_dark__ejvlglygb3ee_large_2x.png";
import iphoneseImg from "../images/logo_hero_iphonese__dtb7zrygggeq_largetall_2x.png";
import ipadAirImg from "../images/hero_logo_ipadair__em8hublxa0om_largetall_2x.png";
import wwdc22Img from "../images/wwdc22_logo__f39kr8derwya_large_2x.png";
import fitnessImg from "../images/fitness_plus_logo__6k5gczpl7oyu_large.png";
import watchImg from "../images/promo_logo_watch_lte__emrof7zzkriq_small_2x.png";
import tvImg from "../images/logo_light__cfvl40z2nzau_large_2x.png";
import shiningGirls from "../images/promo_logo_shining_girls__cqmv34ixg4wi_large_2x.png";

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

      <div className="ipadAirSection ipadAirSection--background">
        <div>
          <img src={ipadAirImg} className="ipadAirSection__image" />
        </div>
        <h4>Light. Bright. Full of might</h4>
        <div className="linkContainer">
          <a href="">
            Learn more <span>&gt;</span>
          </a>
          <a href="">
            Buy<span>&gt;</span>
          </a>
        </div>
      </div>

      <div className="gridItems">
        <div className="wwdc22Section wwdc22Section--background">
          <div>
            <img src={wwdc22Img} className="wwdc22Section__image" />
          </div>
          <h4>
            The Worldwide Developers Conference is coming. Join us online 6-10
            June.
          </h4>
          <div className="linkContainer">
            <a href="">
              Learn more <span>&gt;</span>
            </a>
          </div>
        </div>

        <div className="watchSection watchSection--background">
          <div>
            <img src={watchImg} className="watchSection__image" />
          </div>
          <h4>It's out largest display yet.</h4>
          <div className="linkContainer">
            <a href="">
              Learn more <span>&gt;</span>
            </a>
            <a href="">
              Buy<span>&gt;</span>
            </a>
          </div>
        </div>

        <div className="imacSection imacSection--background">
          <h1>Studio Display</h1>
          <h4>A sight to be bold.</h4>
          <div className="linkContainer">
            <a href="">
              Learn more <span>&gt;</span>
            </a>
            <a href="">
              Buy<span>&gt;</span>
            </a>
          </div>
        </div>

        <div className="macSection macSection--background">
          <h1>Mac Studio</h1>
          <h4>Empower station.</h4>
          <div className="linkContainer">
            <a href="">
              Learn more <span>&gt;</span>
            </a>
            <a href="">
              Buy<span>&gt;</span>
            </a>
          </div>
        </div>

        <div className="fitnessSection fitnessSection--background">
          <div>
            <img src={fitnessImg} className="fitnessSection__image" />
          </div>
          <h4>It's out largest display yet.</h4>
          <div className="linkContainer">
            <a href="">
              Learn more <span>&gt;</span>
            </a>
            <a href="">
              Shop Apple Watch<span>&gt;</span>
            </a>
          </div>
        </div>

        <div className="tvSection tvSection--background">
          <div>
            <img src={tvImg} className="tvSection__image" />
          </div>
          <div>
            <img src={shiningGirls} className="tvSection__shiningGirls" />
          </div>
          <h4> Realiti is a matter of perspective</h4>
          <div className="whitelinkContainer">
            <a href="">
              Stream now <span>&gt;</span>
            </a>
          </div>
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
