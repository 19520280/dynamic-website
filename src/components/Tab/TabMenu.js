import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

export default function TabMenu({menuItems}) {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext indicatorColor="primary" value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            defaultValue={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab value="1" label="TẤT CẢ" />
            {menuItems.map((item) => (
              <Tab value={item.value} label={item.text} />
            ))}
          </Tabs>
        </Box>
        <TabPanel value="1"></TabPanel>
        {menuItems.map((item) => (
          <TabPanel value={item.value}></TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
