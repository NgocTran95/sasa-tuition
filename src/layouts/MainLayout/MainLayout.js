import classNames from "classnames/bind";

import styles from "./MainLayout.module.scss";
import Header from "../../components/Header";
import { Avatar } from "@mui/material";

const cx = classNames.bind(styles);
function MainLayout({ children }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <div className={cx("main-layout")}>
      <Header />
      <div className={cx("content")}>
        <div className={cx("top-bar")}>
          <span className={cx('hello')}>Xin chào Sa Sa</span>
          <Avatar {...stringAvatar("Hồ Sa")} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
