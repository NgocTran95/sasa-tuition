import { useContext, useMemo } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

import { AppContext } from "../../context/AppProvider";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function DeleteStudentModal({ student }) {
  const { openModal, setOpenModal, invoices } = useContext(AppContext);
  const handleClose = () => setOpenModal(false);
  const deleteInvoices = useMemo(() => {
    return invoices.filter((invoice) => invoice.studentId === student?.id);
  }, [invoices, student]);
  const deleteStudent = async () => {
    await deleteDoc(doc(db, "students", student.id))
      .then(() => {
        deleteInvoices.forEach((invoice) =>
          deleteDoc(doc(db, "invoices", invoice.invoiceId))
        );
      })
      .finally(() => {
        setOpenModal(false);
        toast.warning(`Đã xóa ${student?.name} - Lớp ${student.class}`);
      });
  };

  return (
    <Modal
      open={openModal}
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
          Xóa học sinh
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontSize: "1.4rem" }}
        >
          Bạn thực sự muốn xóa{" "}
          <span>{student?.name + " - Lớp " + student?.class}</span>
        </Typography>
        <Typography
          id="modal-modal-subdescription"
          sx={{ mt: "10px", mb: "50px", fontSize: "1.4rem" }}
        >
          Nếu bạn xóa học sinh này, mọi thông tin hóa đơn cũng xóa theo.
        </Typography>
        <Button
          onClick={deleteStudent}
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
