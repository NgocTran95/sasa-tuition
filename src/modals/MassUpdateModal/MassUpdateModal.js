import { Modal, Box, Typography, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { doc, updateDoc } from "firebase/firestore";
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

function MassUpdateModal({ updateStudents }) {
  const { massUpdateModal, setMassUpdateModal } = useContext(AppContext);
  const classMassUpdate = () => {
    updateStudents.forEach(async (student) => {
      const updateClass =
        student.class === 9 ? "Đã tốt nghiệp" : student.class + 1;
        await updateDoc(doc(db, "students", student.id), {
          class: updateClass,
        });
    });
    toast.success("Cập nhật lớp hàng loạt thành công");
  };
  return (
    <Modal
      open={massUpdateModal}
      onClose={() => setMassUpdateModal(false)}
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
          Cập nhật thông tin lớp hàng loạt
        </Typography>
        <Typography
          id="modal-modal-subdescription"
          sx={{ mt: "10px", mb: "50px", fontSize: "1.4rem" }}
        >
          Hãy chắc chắn rằng bạn muốn cập nhật. Dữ liệu sẽ không được hoàn tác.
        </Typography>
        <Button
          onClick={() => {
            classMassUpdate();
            setMassUpdateModal(false)
          }}
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

export default MassUpdateModal;
