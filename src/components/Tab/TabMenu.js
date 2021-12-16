import React from "react";
import * as actions from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { OrderStatusState$ } from "../../redux/selectors";

import { Box, Tab, Tabs } from "@mui/material";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

export default function TabMenu({ menuItems }) {
  const [value, setValue] = React.useState("1");
  const Status = useSelector(OrderStatusState$);

  const dispatch = useDispatch();
  const setOrderStatus = React.useCallback(
    (value) => {
      dispatch(actions.setOrderStatus(value));
    },
    [dispatch]
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const text = menuItems.find((data) => data.value == newValue);
    console.log(text)
    setOrderStatus(text != undefined ? text.text : "TẤT CẢ");
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
        <TabPanel style={{ padding: "12px" }} value="1"></TabPanel>
        {menuItems.map((item) => (
          <TabPanel style={{ padding: "12px" }} value={item.value}></TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
