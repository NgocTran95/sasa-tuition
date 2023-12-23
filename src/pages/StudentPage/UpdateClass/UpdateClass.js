import {
  faArrowRight,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext, useMemo } from "react";
import { AppContext } from "../../../context/AppProvider";
import MassUpdateModal from "../../../modals/MassUpdateModal";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../ExportTuitionPage/ExportTuitionPage";

function UpdateClass() {
  const { students, setMassUpdateModal } = useContext(AppContext);
  const updateStudents = useMemo(
    () => students.filter((student) => student.class !== "Đã tốt nghiệp"),
    [students]
  );

  return (
    <Box>
      <TableContainer component={Paper} sx={{ mt: 2, maxHeight: "50vh" }}>
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <StyledTableCell
              sx={{ fontSize: "1.4rem", fontWeight: 500, padding: "8px" }}
              align="center"
            >
              Họ và Tên
            </StyledTableCell>
            <StyledTableCell
              sx={{ fontSize: "1.4rem", fontWeight: 500 }}
              align="center"
            >
              Lớp
            </StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell
              sx={{ fontSize: "1.4rem", fontWeight: 500 }}
              align="center"
            >
              Sau cập nhật
            </StyledTableCell>
          </TableHead>
          <TableBody>
            {updateStudents.map((student) => (
              <StyledTableRow
                key={student.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell sx={{ fontSize: "1.3rem", width: "50%" }}>
                  {student.name}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ fontSize: "1.3rem", width: "25%" }}
                  align="center"
                >
                  {student.class}
                </StyledTableCell>
                <StyledTableCell
                  sx={{ fontSize: "1.3rem", width: "10%" }}
                  align="center"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </StyledTableCell>
                <StyledTableCell
                  sx={{ fontSize: "1.3rem", width: "25%" }}
                  align="center"
                >
                  {student.class === 9 ? "Đã tốt nghiệp" : student.class + 1}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        sx={{
          fontSize: "1.4rem",
          color: "red",
          fontStyle: "italic",
          fontWeight: "500",
          mt: 3,
        }}
      >
        <FontAwesomeIcon icon={faTriangleExclamation} />
        {}
        Thông tin đã cập nhật hàng loạt sẽ không thể thay đổi. Vì vậy, hãy kiểm
        tra kỹ trước khi thực hiện cập nhật.
      </Typography>
      <Button
        variant="contained"
        color="error"
        sx={{
          minHeight: "5rem",
          mt: 3,
          fontSize: "1.4rem",
          alignSelf: "center",
        }}
        onClick={() => setMassUpdateModal(true)}
      >
        Cập nhật thông tin lớp toàn bộ học sinh
      </Button>
      <MassUpdateModal updateStudents={updateStudents} />
    </Box>
  );
}

export default UpdateClass;
