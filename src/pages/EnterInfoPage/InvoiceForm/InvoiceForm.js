import classNames from "classnames/bind";
import { TextField, Autocomplete, FormControl, Button } from "@mui/material";

import styles from "./InvoiceForm.module.scss";

const classOptions = [{ label: 6 }, { label: 7 }, { label: 8 }, { label: 9 }];
const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];

const cx = classNames.bind(styles);
function InvoiceForm() {
  return (
    <form className={cx("form")}>
      <h2 className={cx("title")}>Điền thông tin học phí</h2>
      <h3 className={cx("input-label")}>Họ và tên: </h3>
      <FormControl margin="dense" fullWidth>
        <TextField
          id="name"
          type="text"
          fullWidth
          inputProps={{ style: { fontSize: "1.5rem" } }}
        />
      </FormControl>
      <h3 className={cx("input-label")}>Lớp: </h3>
      <FormControl margin="dense" fullWidth>
        <Autocomplete
          clearOnEscape
          id="class"
          options={classOptions}
          renderInput={(params) => <TextField {...params} />}
          fullWidth
        />
      </FormControl>
      <h3 className={cx("input-label")}>Ngày nộp: </h3>
      <FormControl margin="dense" fullWidth>
        <TextField
          id="tuition-payment-time"
          type="date"
          fullWidth
          inputProps={{ style: { fontSize: "1.5rem" } }}
        />
      </FormControl>
      <h3 className={cx("input-label")}>Thời gian: </h3>
      <FormControl
        margin="dense"
        fullWidth
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className={cx("tuition-time-part")}>
          <h4>Từ: </h4>
          <TextField
            id="tuition-time-start"
            type="date"
            fullWidth
            inputProps={{ style: { fontSize: "1.5rem" } }}
          />
        </div>
        <div className={cx("tuition-time-part")}>
          <h4>Đến: </h4>
          <TextField
            id="tuition-time-end"
            type="date"
            fullWidth
            inputProps={{ style: { fontSize: "1.5rem" } }}
          />
        </div>
      </FormControl>
      <h3 className={cx("input-label")}>Học phí: </h3>
      <FormControl margin="dense" fullWidth>
        <TextField
          id="tuition-fee"
          type="number"
          fullWidth
          inputProps={{ style: { fontSize: "1.5rem" } }}
        />
        <span>{"(VNĐ)"}</span>
      </FormControl>
      <h3 className={cx("input-label")}>Phương thức thanh toán: </h3>
      <FormControl fullWidth margin="dense">
        <Autocomplete
          clearOnEscape
          id="payment"
          options={paymentOptions}
          renderInput={(params) => <TextField {...params} />}
          fullWidth
        />
      </FormControl>
      <Button
        variant="contained"
        size="large"
        sx={{
          minHeight: "50px",
          width: "100%",
          marginTop: "10px",
          fontSize: "1.5rem",
        }}
      >
        Cập nhật
      </Button>
    </form>
  );
}

export default InvoiceForm;
