import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFileCircleQuestion,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/Logo.png";
import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";

const cx = classNames.bind(styles);
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <header className={cx("header")}>
      <div className={cx("header-bar")}>
        <div className={cx("logo")}>
          <img src={logo} alt="logo" />
        </div>
        <Button className={cx("menu-btn")} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
      <div className={cx("devider")}></div>
      <ul className={cx("navigation")}>
        <li>
          <NavLink
            to={"/"}
            className={cx("nav-btn", pathname === "/" && "active")}
            style={({ isActive }) => {
              return {
                color: isActive
                  ? "var(--primary-color)"
                  : "var(--background-color)",
                backgroundColor: isActive
                  ? "var(--background-color)"
                  : "var(--primary-color)",
              };
            }}
          >
            <FontAwesomeIcon icon={faFileCirclePlus} />
          </NavLink>
          {pathname === "/" && <div className={cx("filler")}></div>}
        </li>
        <li>
          <NavLink
            to={"/export"}
            className={cx("nav-btn", pathname === "/export" && "active")}
            style={({ isActive }) => {
              return {
                color: isActive
                  ? "var(--primary-color)"
                  : "var(--background-color)",
                backgroundColor: isActive
                  ? "var(--background-color)"
                  : "var(--primary-color)",
              };
            }}
          >
            <FontAwesomeIcon icon={faFileCircleQuestion} />
          </NavLink>
          {pathname === "/export" && <div className={cx("filler")}></div>}
        </li>
      </ul>
      <Drawer anchor={"left"} open={showMenu} onClose={closeMenu}>
        <div className={cx("side-menu")}>
          <NavLink to={"/"} className={cx("link")} onClick={closeMenu}>
            <FontAwesomeIcon icon={faFileCirclePlus} />
            <span className={cx("link-name")}>Cập nhật học phí</span>
          </NavLink>
          <NavLink to={"/export"} className={cx("link")} onClick={closeMenu}>
            <FontAwesomeIcon icon={faFileCircleQuestion} />
            <span className={cx("link-name")}>Tra cứu học phí</span>
          </NavLink>
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
