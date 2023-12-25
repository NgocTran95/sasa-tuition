import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppProvider";
import {
  Modal,
  Box,
  Typography,
  Button,
  Autocomplete,
  TextField,
  IconButton,
  Input,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
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
  maxHeight: "90vh",
  overflow: "auto",
  p: 4,
};

const paymentOptions = [{ label: "Chuyển khoản" }, { label: "Tiền mặt" }];

const defaultEditStates = {
  isPayDateEdit: false,
  isStartDateEdit: false,
  isEndDateEdit: false,
  isAmountEdit: false,
  isMethodEdit: false,
};

function EditInvoiceModal() {
  const {
    editInvoiceModal,
    setEditInvoiceModal,
    editInvoice,
    setEditInvoice,
    updateInvoiceStudent,
    updateInvoiceYear,
  } = useContext(AppContext);
  // Edit states
  const [editStates, setEditStates] = useState({
    ...defaultEditStates,
  });

  const toggleEditStates = (state) => {
    if (editStates[state]) {
      setEditStates({ ...editStates, [state]: false });
    } else {
      setEditStates({ ...editStates, [state]: true });
    }
  };
  // Execute edit invoice
  const [editValues, setEditValues] = useState({});

  useEffect(() => {
    setEditValues({ ...editInvoice });
  }, [editInvoice]);

  const updateInvoiceField = (field, value) => {
    setEditValues({ ...editValues, [field]: value });
  };

  const updateInvoice = async () => {
    await updateDoc(doc(db, "invoices", editInvoice?.invoiceId), {
      ...editValues,
    }).finally(() => {
      setEditInvoiceModal(false);
      setEditStates(defaultEditStates);
      toast.success("Đã cập nhật thành công");
    });
  };
  return (
    <Modal
      open={editInvoiceModal}
      onClose={() => {
        setEditInvoiceModal(false);
        setEditInvoice(null);
        setEditStates(defaultEditStates);
      }}
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
          Thông tin học sinh
        </Typography>
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Tên:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {updateInvoiceStudent?.name}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Lớp:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {updateInvoiceStudent?.class}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Tháng:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {editInvoice &&
              getMiddleMonth(editInvoice.startDate, editInvoice.endDate)}
            /{updateInvoiceYear}
          </Typography>
        </Box>
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
          Thông tin chỉnh sửa
        </Typography>
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Ngày nộp:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {editInvoice && formatPaymentDate(editInvoice?.paymentDate)}
          </Typography>
          <IconButton
            sx={{ display: "inline-block" }}
            onClick={() => toggleEditStates("isPayDateEdit")}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </Box>
        {editStates.isPayDateEdit && (
          <Box sx={{ display: "flex", gap: "20px", mt: 2, mb: 2 }}>
            <Input
              type="date"
              sx={{ fontSize: "1.4rem", width: "100%" }}
              defaultValue={editInvoice?.paymentDate}
              onChange={(e) =>
                updateInvoiceField("paymentDate", e.target.value)
              }
            />
          </Box>
        )}
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Ngày bắt đầu:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {editInvoice && formatPaymentDate(editInvoice?.startDate)}
          </Typography>
          <IconButton
            sx={{ display: "inline-block" }}
            onClick={() => toggleEditStates("isStartDateEdit")}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </Box>
        {editStates.isStartDateEdit && (
          <Box sx={{ display: "flex", gap: "20px", mt: 2, mb: 2 }}>
            <Input
              type="date"
              sx={{ fontSize: "1.4rem", width: "100%" }}
              defaultValue={editInvoice?.startDate}
              onChange={(e) => updateInvoiceField("startDate", e.target.value)}
            />
          </Box>
        )}
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Ngày kết thúc:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {editInvoice && formatPaymentDate(editInvoice?.endDate)}
          </Typography>
          <IconButton
            sx={{ display: "inline-block" }}
            onClick={() => toggleEditStates("isEndDateEdit")}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </Box>
        {editStates.isEndDateEdit && (
          <Box sx={{ display: "flex", gap: "20px", mt: 2, mb: 2 }}>
            <Input
              type="date"
              sx={{ fontSize: "1.4rem", width: "100%" }}
              defaultValue={editInvoice?.endDate}
              onChange={(e) => updateInvoiceField("endDate", e.target.value)}
            />
          </Box>
        )}
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Số tiền:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {editInvoice && formatPaymentDate(editInvoice?.amount)}
          </Typography>
          <IconButton
            sx={{ display: "inline-block" }}
            onClick={() => toggleEditStates("isAmountEdit")}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </Box>
        {editStates.isAmountEdit && (
          <Box sx={{ display: "flex", gap: "20px", mt: 2, mb: 2 }}>
            <Input
              type="number"
              sx={{ fontSize: "1.4rem", width: "100%" }}
              defaultValue={editInvoice?.amount}
              onChange={(e) => updateInvoiceField("amount", e.target.value)}
            />
          </Box>
        )}
        <Box>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "35%" }}
          >
            Thanh toán:
          </Typography>
          <Typography
            sx={{ display: "inline-block", fontSize: "1.4rem", width: "50%" }}
          >
            {editInvoice && formatPaymentDate(editInvoice?.method)}
          </Typography>
          <IconButton
            sx={{ display: "inline-block" }}
            onClick={() => toggleEditStates("isMethodEdit")}
          >
            <FontAwesomeIcon icon={faPencil} />
          </IconButton>
        </Box>
        {editStates.isMethodEdit && (
          <Box sx={{ display: "flex", gap: "20px", mt: 2, mb: 2 }}>
            <Autocomplete
              options={paymentOptions}
              defaultValue={editInvoice?.method}
              isOptionEqualToValue={(option, value) =>
                option.value === value.value
              }
              onChange={(e, value) => updateInvoiceField("method", value.label)}
              sx={{ fontSize: "1.4rem", width: "100%" }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        )}
        <Button
          variant="contained"
          color="success"
          onClick={updateInvoice}
          sx={{ width: "100%", minHeight: "5rem", mt: 2, fontSize: "1.4rem" }}
        >
          OK
        </Button>
      </Box>
    </Modal>
  );
}

export default EditInvoiceModal;
