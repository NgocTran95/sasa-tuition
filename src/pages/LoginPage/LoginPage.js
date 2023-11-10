import classNames from "classnames/bind";
import { useState } from "react";
import {
  IconButton,
  InputAdornment,
  Input,
  InputLabel,
  FormControl,
  Box,
  TextField,
  ButtonBase,
} from "@mui/material";
import { Lock, Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

import { auth } from "../../firebase/config";
import styles from "./LoginPage.module.scss";

const cx = classNames.bind(styles);
function LoginPage() {
  const [isShowPassWord, setIsShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState({ error: false, msg: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginByEmail = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.message);
      if (error.code === "auth/invalid-login-credentials") {
        setErrorLogin({
          error: true,
          msg: "Thông tin đăng nhập không chính xác. Vui lòng thử lại!",
        });
      }
    });
  };
  return (
    <div className={cx("container")}>
      <h3 className={cx("title")}>Đăng nhập</h3>
      {errorLogin.error && (
        <p className={cx("error-signin-msg")}>{errorLogin.msg}</p>
      )}
      <form
        className={cx("form")}
        onSubmit={handleSubmit(handleLoginByEmail)}
        id="login-form"
      >
        <Box
          sx={{ display: "flex", alignItems: "flex-end" }}
          className={cx("form-control")}
        >
          <Email
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            className={cx("form-control-icon")}
          />
          <TextField
            id="email"
            type="email"
            label="Email"
            variant="standard"
            fullWidth
            {...register("email", { required: "Bạn chưa nhập email" })}
            error={!!errors.email}
            onFocus={() => setErrorLogin({ error: false, msg: "" })}
          />
          {<p className={cx("error-msg")}>{errors.email?.message}</p>}
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "flex-end" }}
          className={cx("form-control")}
        >
          <Lock
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            className={cx("form-control-icon")}
          />
          <FormControl fullWidth>
            <InputLabel htmlFor="password" sx={{ ml: -1.8, my: 0.5 }}>
              Password
            </InputLabel>
            <Input
              id="password"
              type={isShowPassWord ? "text" : "password"}
              {...register("password", { required: "Bạn chưa nhập mật khẩu" })}
              error={!!errors.password}
              onFocus={() => setErrorLogin({ error: false, msg: "" })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setIsShowPassword((prev) => !prev)}
                  >
                    {isShowPassWord ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {<p className={cx("error-msg")}>{errors.password?.message}</p>}
        </Box>
        <ButtonBase
          type="submit"
          form="login-form"
          className={cx("login-btn")}
          onClick={handleSubmit(handleLoginByEmail)}
        >
          Đăng nhập
        </ButtonBase>
      </form>
    </div>
  );
}

export default LoginPage;
