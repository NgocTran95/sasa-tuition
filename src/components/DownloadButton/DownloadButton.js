import classNames from "classnames/bind";
import { Button } from "@mui/material";
import * as htmlToImage from "html-to-image";

import styles from "./DownloadButton.module.scss";

const cx = classNames.bind(styles);
function DownloadButton( { domEl }) {
  const downloadImage = async() => {
    const downloadUrl = await htmlToImage.toPng(domEl.current);
    const link = document.createElement('a');
    link.download = 'invoice.png';
    link.href = downloadUrl;
    link.click();
  }
  return (
    <div className={cx("container")}>
      <Button
        variant="contained"
        color="success"
        className={cx("download-btn")}
        onClick={downloadImage}
      >
        Tải về
      </Button>
    </div>
  );
}

export default DownloadButton;
