import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFileCircleQuestion,
  faUserPlus,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/images/Logo.png";
import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Drawer } from "@mui/material";
import { useState } from "react";

const navOptions = [
  {
    id: 1,
    path: "/",
    icon: faFileCirclePlus,
    content: "Cập nhật học phí",
  },
  {
    id: 2,
    path: "/add-student",
    icon: faUserPlus,
    content: "Thông tin học sinh",
  },
  {
    id: 3,
    path: "/query",
    icon: faFileCircleQuestion,
    content: "Truy vấn học phí",
  },
];
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
        {navOptions.map((option) => (
          <li key={option.id}>
            <NavLink
              to={option.path}
              className={cx("nav-btn", pathname === option.path && "active")}
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
              <FontAwesomeIcon icon={option.icon} />
            </NavLink>
            {pathname === option.path && <div className={cx("filler")}></div>}
          </li>
        ))}
      </ul>
      <Drawer anchor={"left"} open={showMenu} onClose={closeMenu}>
        <div className={cx("side-menu")}>
          {navOptions.map((option) => (
            <NavLink to={option.path} key={option.id} className={cx("link")} onClick={closeMenu}>
              <FontAwesomeIcon icon={option.icon} />
              <span className={cx("link-name")}>{option.content}</span>
            </NavLink>
          ))}
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
