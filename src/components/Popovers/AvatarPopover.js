import * as React from "react";

import { AuthContext } from "../../context/context";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import ConfirmModal from "../Modal/ConfirmModal";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { shadowColor } from "./../../color";
import { useHistory } from "react-router-dom";

export default function AvatarPopover() {
  const history = useHistory();
  const { userData, logout } = React.useContext(AuthContext);

  const [child, setChild] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title={userData ? userData.accountName : "Tài khoản"}>
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar size="small" src={userData.avatarImage} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            boxShadow: shadowColor,
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => history.push("/Ca-nhan/Tai-khoan/Ho-so")}>
          Hồ sơ tài khoản
        </MenuItem>
        <MenuItem onClick={() => history.push("/Ca-nhan/Don-mua")}>
          Đơn mua
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setChild(true)}>Đăng xuất</MenuItem>
      </Menu>
      <ConfirmModal
        header="Bạn có muốn đăng xuất?"
        state={child}
        setState={setChild}
        action={logout}
        messageText="Đăng xuất thành công"
        typeMessage="success"
      />
    </React.Fragment>
  );
}
