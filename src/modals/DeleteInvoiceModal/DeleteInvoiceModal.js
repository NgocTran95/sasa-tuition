import { useContext } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";

import { AppContext } from "../../context/AppProvider";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '40%',
  minWidth: 350,
  bgcolor: "background.paper",
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};
function DeleteStudentModal() {
  const { editInvoice, setDeleteInvoiceModal, deleteInvoiceModal } = useContext(AppContext);
  const handleClose = () => setDeleteInvoiceModal(false);
  const deleteInvoice = async () => {
    await deleteDoc(doc(db, 'invoices', editInvoice.invoiceId)).finally(() => {
      setDeleteInvoiceModal(false);
      toast.warning('Đã xóa hóa đơn thành công');
    })
  }
  return (
    <Modal
      open={deleteInvoiceModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontSize: "2rem" }}
        >
          Xóa hóa đơn
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, mb: 4, fontSize: "1.4rem" }}
        >
          Bạn thực sự muốn xóa hóa đơn này{" "}
        </Typography>
        <Button
          onClick={deleteInvoice}
          sx={{
            position: "absolute",
            right: "5%",
            bottom: "5%",
            minHeight: "40px",
            fontSize: "1.4rem",
          }}
          variant="contained"
          color="error"
        >
          Xác nhận
        </Button>
      </Box>
    </Modal>
  );
}

export default DeleteStudentModal;
