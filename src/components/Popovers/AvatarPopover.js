import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/context";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  bindHover,
  bindMenu,
  usePopupState,
} from "material-ui-popup-state/hooks";
import { showAvatarPopover } from "./../../redux/actions/index";
import { shadowColor, SystemColor } from "../../color";
import { useMediaQuery, useTheme } from "@mui/material";

export default function AvatarPopover() {
  const history = useHistory();
  const { userData, logout } = React.useContext(AuthContext);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoMenu",
  });

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
        <IconButton
          onClick={() => history.push("/Ca-nhan/Tai-khoan/Ho-so")}
          size="small"
          sx={{ ml: 2 }}
          {...bindHover(popupState)}
        >
          <Avatar sx={{ width: 28, height: 28 }} src={userData.avatarImage} />
        </IconButton>
      </Box>
      {isMobile ? null : <HoverMenu
        id="mouse-over-popover"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            boxShadow: shadowColor,
            mt: 1.5,

            padding: "12px 16px 12px 16px",
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
        {...bindMenu(popupState)}
      >
        <MenuItem onClick={() => history.push("/Ca-nhan/Tai-khoan/Ho-so")}>
          Hồ sơ tài khoản
        </MenuItem>
        <MenuItem onClick={() => history.push("/Ca-nhan/Don-mua")}>
          Đơn mua
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => logout()}>Đăng xuất</MenuItem>
      </HoverMenu>}
    </React.Fragment>
  );
}
