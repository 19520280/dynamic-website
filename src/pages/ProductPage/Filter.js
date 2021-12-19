import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import FilterListIcon from "@mui/icons-material/FilterList";
import Checkbox from "@mui/material/Checkbox";
import ColorButton from "../../components/Buttons/ColorButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import {
  Grid,
  Box,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
  Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import SizeButton from "../../components/Buttons/SizeButton";
import { makeStyles } from "@material-ui/core";
import { SystemColor, BgColor } from "../../color";
import { ImportantDevices } from "@mui/icons-material";

const useStyle = makeStyles({
  subHeader: {
    margin: "0px",
    padding: " 12px 0px 12px 0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "38px",
    color: BgColor.main,
    backgroundColor: BgColor.mainBg,
  },
  listItemText: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "31px",
    padding: "0px 0px 4px",
    width: "191px",
    color: BgColor.main,
  },
  listButton: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "center",
    color: BgColor.main,
    padding: "12px 0px 12px 0px",
    margin: "0px 12px 12px 0px",
  },
  listColor: { width: "20px", height: "20px" },
  listMaterial: {
    padding: "0px 0px 0px 0px",
    margin: "0px -10px -10px 0px",
    fontSize: "0.8 rem"
  },
  divider: {
    padding: "0px 16px 16px 0px",
  },
  filter: {
    width: "60%",
  }
});

const Filter = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyle();
  const history = useHistory();
  const [checked, setChecked] = React.useState([0]);

  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const menuItems = [
    { text: "Áo thun", path: "/Ao/Ao-thun", type: "Ao" },
    { text: "Áo khoác", path: "/Ao/Ao-khoac", type: "Ao" },
    { text: "Sơ mi", path: "/Ao/So-mi", type: "Ao" },
    { text: "Áo trùm đầu", path: "/Ao/Ao-trum-dau", type: "Ao" },
    { text: "Áo tay dài", path: "/Ao/Ao-tay-dai", type: "Ao" },
    { text: "Quần dài", path: "/Quan/Quan-dai", type: "Quan" },
    { text: "Quần ngắn", path: "/Quan/Quan-ngan", type: "Quan" },
    { text: "Ba lô", path: "/Phu-kien/Ba-lo", type: "Phu-kien" },
    { text: "Túi", path: "/Phu-kien/Tui", type: "Phu-kien" },
    { text: "Ví", path: "/Phu-kien/Vi", type: "Phu-kien" },
    { text: "Nón", path: "/Phu-kien/Non", type: "Phu-kien" },
  ];
  const menuSizes = ["XS", "S", "M", "L", "XL", "FS"];

  const colorItems = [
    "#000000",
    "#F5F5DC",
    "#006964",
    "#DDBE78",
    "#0E2366",
    "#72532F",
    "#588732",
    "#6633CC",
    "#FF80AA",
    "#FFCC00",
    "#FE6702",
    "#C10013",
  ];

  const [selected, setSelected] = React.useState(colorItems);
  const [selectedsize, setSelectedSize] = React.useState(menuSizes);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // const indexSelected = colorItems.color.indexOf(selected);
  const materialItems = [
    { text: "Cotton", id: "cotton" },
    { text: "Kaki", id: "kaki" },
    { text: "Denim", id: "denim" },
    { text: "Da", id: "da" },
    { text: "Lanh", id: "lanh" },
  ];
  const styleItems = [
    { text: "Urban", id: "urban" },
    { text: "Luxury", id: "luxury" },
    { text: "Chic", id: "chic" },
    { text: "Hype", id: "Hype" },
  ];
  const body = (
    <Box style={{ background: "BgColor.mainBg" }}>
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>
            DANH MỤC SẢN PHẨM
          </ListSubheader>
        }
      >
        {menuItems.map((item) => (
          <ListItem
            style={{ padding: "0px" }}
            button
            key={item.text}
            onClick={() => history.push(item.path)}
          >
            <ListItemText
              style={{
                display: item.type == pathnames[0] ? "block" : "none",
              }}
              primary={item.text}
              className={classes.listItemText}
            />
          </ListItem>
        ))}
      </List>
      <Divider className={classes.divider} />
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>
            KÍCH THƯỚC
          </ListSubheader>
        }
      >
        <Grid
          container
          rowSpacing={1.5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {menuSizes.map((item, index) => (
            <Grid item key={index}>
              <SizeButton
                size={item}
                selected={selectedsize}
                setSelected={setSelectedSize}
                only={false}
              ></SizeButton>
            </Grid>
          ))}
        </Grid>
      </List>
      <Divider className={classes.divider} />
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>MÀU SẮC</ListSubheader>
        }
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          {colorItems.map((color, index) => (
            <Grid item key={index}>
              <ColorButton
                color={color}
                selected={selected}
                setSelected={setSelected}
                only={false}
              />
            </Grid>
          ))}
        </Grid>
      </List>
      <Divider className={classes.divider} />
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>CHẤT LIỆU</ListSubheader>
        }
      >
        {materialItems.map((value) => (
          <ListItemButton
            className={classes.listMaterial}
            role={undefined}
            onClick={handleToggle(value.id)}
            dense
          >
            <ListItemIcon>
              <Checkbox
                style={{ margin: "12px 12px 12px", padding: "0px" }}
                checked={checked.indexOf(value.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": value.id }}
              />
            </ListItemIcon>
            <ListItemText
              style={{ margin: "0px", padding: "0px" }}
              id={value.id}
              primary={<Typography type="body2" style={{ color: 'primary', fontSize:"0.8 rem" }}>{value.text}</Typography>}
            ></ListItemText>
          </ListItemButton>
        ))}
      </List>
      <Divider className={classes.divider} />{" "}
      <List
        subheader={
          <ListSubheader className={classes.subHeader}>
            PHONG CÁCH
          </ListSubheader>
        }
      >
        {styleItems.map((value) => (
          <ListItemButton
            className={classes.listMaterial}
            role={undefined}
            onClick={handleToggle(value.id)}
            dense
          >
            <ListItemIcon>
              <Checkbox
                style={{ margin: "12px 12px 12px", padding: "0px" }}
                checked={checked.indexOf(value.id) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": value.id }}
              />
            </ListItemIcon>
            <ListItemText
              style={{ margin: "0px", padding: "0px" }}
              id={value.id}
              disableTypography
              primary={<Typography type="body2" style={{ color: 'primary', fontSize:"0.8 rem" }}>{value.text}</Typography>}
            ></ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  const CustomStack = (content) => {
    if (isMobile) {
      return (
        <>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenMenu}
          >
            <FilterListIcon />
          </IconButton>
          <Paper>
          <SwipeableDrawer
            style={{ color: BgColor.mainBg}}
            anchor="left"
            className={classes.filter}
            open={openMenu}
            onClose={handleOpenMenu}
            onOpen={handleOpenMenu}
            docked={true} 

          >
            <Paper style={{ background: BgColor.mainBg }}>
              <Box padding={3}>
                {content}
              </Box>
            </Paper>
          </SwipeableDrawer>
          </Paper>
          
        </>
      );
    } else {
      return content;
    }
  };

  return <Box>{CustomStack(body)}</Box>;
};

export default Filter;
