import classNames from "classnames/bind";

import styles from "./MainLayout.module.scss";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Logout } from "@mui/icons-material";
import { auth } from "../../firebase/config";

const cx = classNames.bind(styles);

function MainLayout({ children }) {
  const { admin } = useContext(AuthContext);
  const handleLogOut = () => {
    auth.signOut();
  };
  return (
    <div className={cx("main-layout")}>
      <Header />
      <div className={cx("content")}>
        <div className={cx("top-bar")}>
          <Button
            sx={{
              width: "120px",
              height: "60%",
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontWeight: 600,
              fontSize: "1.4rem",
              verticalAlign: "center",
            }}
            onClick={handleLogOut}
          >
            <Logout />
            <p>Log Out</p>
          </Button>
          <p>{admin.email}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
