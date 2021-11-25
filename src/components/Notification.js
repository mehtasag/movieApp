import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Offering from "./Offering";
import Updates from "./Updates";
import styled from "styled-components";

function TabPanel(props) {
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
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Notification() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Notifcations>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 2, borderColor: "black" }}>
          <Tabs
            style={{ background: "black !important" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              style={{ color: "black", fontSize: "14px", fontWeight: "800" }}
              label="Updates"
              {...a11yProps(0)}
            />
            <Tab
              style={{ color: "black", fontSize: "14px", fontWeight: "800" }}
              label="Offerings"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Updates />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Offering />
        </TabPanel>
      </Box>
    </Notifcations>
  );
}

const Notifcations = styled.div`
  min-height: 84.3vh;

  color: white;
`;
export default Notification;
