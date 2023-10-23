import classNames from "classnames/bind";
import { useState } from "react";
import { TextField, Autocomplete, FormControl, Button } from "@mui/material";

import styles from "./InvoiceForm.module.scss";

const classOptions = [
  { label: "Lớp 6", value: 6 },
  { label: "Lớp 7", value: 7 },
  { label: "Lớp 8", value: 8 },
  { label: "Lớp 9", value: 9 },
];
const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];

const cx = classNames.bind(styles);
function InvoiceForm() {
  const [info, setInfo] = useState({
    name: "",
    class: 0,
    paymentDate: "",
    startTime: "",
    endTime: "",
    amount: 0,
    paymentMethod: "",
  });
  const updateInvoice = () => {
    console.log(info);
  };
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
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, name: e.target.value }))
          }
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
          isOptionEqualToValue={(option, value) => option.value === value.value}
          onChange={(e, value) =>
            setInfo((prev) => ({ ...prev, class: value.value }))
          }
        />
      </FormControl>
      <h3 className={cx("input-label")}>Ngày nộp: </h3>
      <FormControl margin="dense" fullWidth>
        <TextField
          id="tuition-payment-time"
          type="date"
          fullWidth
          inputProps={{ style: { fontSize: "1.5rem" } }}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, paymentDate: e.target.value }))
          }
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
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, startTime: e.target.value }))
            }
          />
        </div>
        <div className={cx("tuition-time-part")}>
          <h4>Đến: </h4>
          <TextField
            id="tuition-time-end"
            type="date"
            fullWidth
            inputProps={{ style: { fontSize: "1.5rem" } }}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, endTime: e.target.value }))
            }
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
        onClick={updateInvoice}
      >
        Cập nhật
      </Button>
    </form>
  );
}

export default InvoiceForm;
