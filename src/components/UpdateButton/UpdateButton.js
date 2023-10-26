import { Button } from "@mui/material";

function UpdateButton({ onClick, content }) {
  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      sx={{
        minHeight: "50px",
        width: "100%",
        marginTop: "10px",
        fontSize: "1.5rem",
      }}
      onClick={onClick}
    >
      {content || 'Cập nhật'}
    </Button>
  );
}

export default UpdateButton;
