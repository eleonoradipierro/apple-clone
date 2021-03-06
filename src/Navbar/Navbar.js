import "./Navbar.scss";

import logoNav from "../images/globalnav_apple_image__b5er5ngrzxqq_large.svg";
import storeNav from "../images/globalnav_links_store_image__c7jy08initqq_large.svg";
import macNav from "../images/globalnav_links_mac_image__dazlko3t9a6a_large.svg";
import ipadNav from "../images/globalnav_links_ipad_image__fw9qyj9lloi2_large.svg";
import iphoneNav from "../images/globalnav_links_iphone_image__ko7x4isga4ia_large.svg";
import watchNav from "../images/globalnav_links_watch_image__gkoblojrlsqe_large.svg";
import airpodsNav from "../images/globalnav_links_airpods_image__f969s84ivmaa_large.svg";
import tvhomeNav from "../images/globalnav_links_tvhome_image__zb2ewyxbi6ae_large.svg";
import onlyonappleNav from "../images/globalnav_links_onlyonapple_image__c4t8k97tougm_large.svg";
import accessoriesNav from "../images/globalnav_links_accessories_image__edj0wqmfwxyu_large.svg";
import supportNav from "../images/globalnav_links_support_image__bw9kctll7u3m_large.svg";
import searchNav from "../images/globalnav_search_image__cbllq1gkias2_large.svg";
import bagNav from "../images/globalnav_bag_image__yzte50i47ciu_large.svg";

const NavButton = (props) => {
  const { srcImg, listClass, imageClass, name } = props;
  return (
    <li className={listClass}>
      <a href="#top" className="navBtn">
        <img alt={name} src={srcImg} className={imageClass} />
      </a>
    </li>
  );
};

const Navbar = () => {
  const mobileHideElements = [
    {
      id: 0,
      img: storeNav,
      name: "store",
    },
    {
      id: 1,
      img: macNav,
      name: "mac",
    },
    {
      id: 2,
      img: ipadNav,
      name: "ipad",
    },
    {
      id: 3,
      img: iphoneNav,
      name: "iphone",
    },
    {
      id: 4,
      img: watchNav,
      name: "watch",
    },
    {
      id: 5,
      img: airpodsNav,
      name: "airpods",
    },
    {
      id: 6,
      img: tvhomeNav,
      name: "tvhome",
    },
    {
      id: 7,
      img: onlyonappleNav,
      name: "only-on-apple",
    },
    {
      id: 8,
      img: accessoriesNav,
      name: "accessories",
    },
    {
      id: 9,
      img: supportNav,
      name: "support",
    },
  ];
  return (
    <>
      <nav>
        <ul className="navContainer">
          <li className="burgerMenu">
            <span className="burgerMenu__btn">=</span>
          </li>

          <NavButton srcImg={logoNav} name="logo" />

          {mobileHideElements.map((current) => {
            return (
              <NavButton
                key={current.id}
                srcImg={current.img}
                listClass="mobileHide"
                name={current.name}
              />
            );
          })}

          <NavButton
            srcImg={searchNav}
            listClass="mobileHide"
            imageClass="searchImage"
          />
          <NavButton srcImg={bagNav} />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
