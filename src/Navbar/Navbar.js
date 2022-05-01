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

import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul class="nav-container">
          <li className="bars">
            <span className="nav-btn">=</span>
          </li>
          <li>
            <a class="nav-btn">
              <img src={logoNav} />
            </a>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={storeNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={macNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={ipadNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={iphoneNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={watchNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={airpodsNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={tvhomeNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={onlyonappleNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={accessoriesNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img src={supportNav} />
            </button>
          </li>
          <li className="mobileHide">
            <button class="nav-btn">
              <img class="search-image" src={searchNav} />
            </button>
          </li>
          <li>
            <button class="nav-btn">
              <img src={bagNav} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
