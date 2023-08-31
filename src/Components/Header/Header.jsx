import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../Asset/logo.png"
import Flag from "../../Asset/flag.png"
import Cart from "../../Asset/cart.png"
import User from "../../Asset/solar_user-linear.png"
import Icon_search from "../../Asset/iconamoon_search.png";
export default () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <header className="header">
        <img src={Logo} alt="Logo_image" className="Logo" />
        <nav className={isClicked ? "clicked" : "header__nav"}>
          {/* hamburger/menu bar */}
          <div
            className="header__nav-hamburger"
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className={isClicked ? "line line-1" : "line"}></div>
            <div className={isClicked ? "line line-2" : "line"}></div>
            <div className={isClicked ? "line line-3" : "line"}></div>
          </div>
          {/* end hamburger/menu bar */}

          <ul className="nav_links">
            <li className={isClicked ? "fade" : ""}>
              <Link to="/">
                <a>Store</a>
              </Link>
            </li>
            <li className={isClicked ? "fade" : ""}>
              <Link to="/">
                <a>About</a>
              </Link>
            </li>
            <li className={isClicked ? "fade" : ""}>
              <Link to="/">
                <a>Contact</a>
              </Link>
            </li>
            <li className={isClicked ? "fade" : ""}>
              <Link to="/">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/*search input*/}
        <div className="search_inp_div">
          <input type="text" placeholder="Search" className="search_inp" />

          <img src={Icon_search} alt="" className="search_icon" />
        </div>
        {/*end search input*/}
        {/*cart icons*/}
        <div className="select_cart_flag_div">
          <img src={Flag} alt="Flag" className="flag" />
          <img src={Cart} alt="cart" className="cart" />
          {/*profile icon div*/}
          <div className="select_profile_div">
            <select name="" id="select_input">
              <option value=""></option>
            </select>
            <img src={User} alt="user" className="user_icon" />
          </div>
          {/*profile icon div*/}
        </div>
        {/*end cart icons*/}
      </header>
    </>
  );
};
