import classNames from "classnames/bind";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

import styles from "./StudentPage.module.scss";
import EnterStudentForm from './EnterStudentForm';
import SelectClassForm from '../../components/SelectClassForm';
import StudentList from "../../components/StudentList/StudentList";
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

function StudentPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={cx("container")}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Nhập mới" {...a11yProps(0)} sx={{ fontSize: 14}}/>
          <Tab label="Cập nhật" {...a11yProps(1)} sx={{ fontSize: 14}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EnterStudentForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SelectClassForm />
        <StudentList />
      </CustomTabPanel>
    </div>
  );
}

export default StudentPage;
