import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import {
  Modal,
  Box,
  Typography,
  Button,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { getMiddleMonth, formatPaymentDate } from "../../utilities";
import { db } from "../../firebase/config";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  minWidth: 350,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];

function EditInvoiceModal() {
  const {
    editInvoiceModal,
    setEditInvoiceModal,
    editInvoice,
    updateInvoiceStudent,
    updateInvoiceYear,
  } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const updateInvoice = async (data) => {
    await updateDoc(doc(db, "invoices", editInvoice?.invoiceId), {
      ...data,
    }).finally(() => {
      setEditInvoiceModal(false);
      toast.success("Đã cập nhật thành công");
    });
  };
  return (
    <Modal
      open={editInvoiceModal}
      onClose={() => setEditInvoiceModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontSize: "1.8rem" }}
        >
          Chỉnh sửa thông tin hóa đơn
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            mb: 2,
            fontSize: "1.6rem",
            fontWeight: "500",
            color: "red",
          }}
        >
          Thông tin hóa đơn
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Tên: {updateInvoiceStudent?.name}
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Năm học: {updateInvoiceYear}
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Tháng:{" "}
          {editInvoice &&
            getMiddleMonth(editInvoice.startDate, editInvoice.endDate)}
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Ngày nộp: {editInvoice && formatPaymentDate(editInvoice.paymentDate)}
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Bắt đầu: {editInvoice && formatPaymentDate(editInvoice.startDate)}
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Kết thúc: {editInvoice && formatPaymentDate(editInvoice.endDate)}
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          Số tiền: {editInvoice?.amount} VNĐ
        </Typography>
        <Typography
          sx={{ display: "inline-block", width: "50%", fontSize: "1.4rem" }}
        >
          PTTT: {editInvoice?.method}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 2,
            mb: 2,
            fontSize: "1.6rem",
            fontWeight: "500",
            color: "red",
          }}
        >
          Thông tin chỉnh sửa
        </Typography>
        <form onSubmit={handleSubmit(updateInvoice)}>
          <Box sx={{ mt: 1, mb: 1, fontSize: 14 }}>
            <label htmlFor="paymentDate">Ngày nộp: </label>
            <TextField
              type="date"
              id="paymentDate"
              name="paymentDate"
              inputProps={{ style: { fontSize: 14 } }}
              fullWidth
              {...register("paymentDate", {
                required: "Bạn chưa nhập ngày nộp học phí",
              })}
            />
            {errors.paymentDate && errors.paymentDate.type === "required" && (
              <Typography sx={{ color: "red" }}>
                {errors.paymentDate.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 1, mb: 1, fontSize: 14 }}>
            <label htmlFor="startDate">Ngày bắt đầu: </label>
            <TextField
              type="date"
              id="startDate"
              name="startDate"
              inputProps={{ style: { fontSize: 14 } }}
              fullWidth
              {...register("startDate", {
                required: "Bạn chưa nhập ngày bắt đầu học",
              })}
            />
            {errors.startDate && errors.startDate.type === "required" && (
              <Typography sx={{ color: "red" }}>
                {errors.startDate.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 1, mb: 1, fontSize: 14 }}>
            <label htmlFor="endDate">Ngày kết thúc: </label>
            <TextField
              type="date"
              id="endDate"
              name="endDate"
              inputProps={{ style: { fontSize: 14 } }}
              fullWidth
              {...register("endDate", {
                required: "Bạn chưa nhập ngày kết thúc học",
              })}
            />
            {errors.endDate && errors.endDate.type === "required" && (
              <Typography sx={{ color: "red" }}>
                {errors.endDate.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 1, mb: 1, fontSize: 14 }}>
            <label htmlFor="amount">Số tiền: </label>
            <TextField
              type="number"
              id="amount"
              name="amount"
              inputProps={{ style: { fontSize: 14 } }}
              fullWidth
              {...register("amount", {
                required: "Bạn chưa nhập số tiền học phí",
              })}
            />
            {errors.amount && errors.amount.type === "required" && (
              <Typography sx={{ color: "red" }}>
                {errors.amount.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 1, mb: 1, fontSize: 14 }}>
            <label htmlFor="method">Phương thức thanh toán: </label>
            <Autocomplete
              name="method"
              id="method"
              options={paymentOptions}
              onSelect={() => setError("method", null)}
              isOptionEqualToValue={(option, value) =>
                option.label === value.label
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  inputProps={{ ...params.inputProps, style: { fontSize: 14 } }}
                  {...register("method", {
                    required: "Bạn chưa nhập phương thức thanh toán",
                  })}
                />
              )}
            />
            {errors.method && errors.method.type === "required" && (
              <Typography sx={{ color: "red" }}>
                {errors.method.message}
              </Typography>
            )}
          </Box>
        </form>
        <Button
          sx={{
            mt: 1,
            width: "100%",
            minHeight: "40px",
            fontSize: "1.4rem",
          }}
          variant="contained"
          color="primary"
          onClick={handleSubmit(updateInvoice)}
        >
          Xác nhận
        </Button>
      </Box>
    </Modal>
  );
}

export default EditInvoiceModal;
