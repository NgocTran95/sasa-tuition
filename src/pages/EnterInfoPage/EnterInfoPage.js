import classNames from "classnames/bind";
import { Tab, Tabs, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useContext, useState } from "react";

import styles from "./EnterInfoPage.module.scss";
import InvoiceForm from "./InvoiceForm";
import InvoiceDisplay from "./InvoiceDisplay";
import InvoiceTable from "./InvoiceTable";
import SelectStudentForm from "../../components/SelectStudentForm";
import { AppContext } from "../../context/AppProvider";

const cx = classNames.bind(styles);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function EnterInfoPage() {
  const [value, setValue] = useState(0);
  const { setUpdateInvoiceStudent, setUpdateInvoiceYear } =
    useContext(AppContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Nhập mới" {...a11yProps(0)} sx={{ fontSize: 14 }} />
          <Tab label="Cập nhật" {...a11yProps(1)} sx={{ fontSize: 14 }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className={cx("add-invoices")}>
          <InvoiceForm />
          <InvoiceDisplay />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className={cx("update-invoices")}>
          <SelectStudentForm
            setStudent={setUpdateInvoiceStudent}
            setYear={setUpdateInvoiceYear}
          />
          <InvoiceTable />
        </div>
      </CustomTabPanel>
    </>
  );
}

export default EnterInfoPage;
