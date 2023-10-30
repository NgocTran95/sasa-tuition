import { Button } from "@mui/material";

function UpdateButton({ onClick, content, ...props }) {
  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      onClick={onClick}
      {...props}
    >
      {content || 'Cập nhật'}
    </Button>
  );
}

export default UpdateButton;
