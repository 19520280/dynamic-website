import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
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
import { SystemColor } from "../../color";

export default function AvatarPopover() {
  const history = useHistory();
  const { userData, logout } = React.useContext(AuthContext);

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
          <Avatar size="small" src={userData.avatarImage} />
        </IconButton>
      </Box>
      <HoverMenu
        id="mouse-over-popover"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        {...bindMenu(popupState)}
        sx={{
          "& .css-1q9g37b-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
            {
              padding: "12px 16px 12px 16px",
              borderRadius: "4px",
              border: "1px solid",
              borderColor: SystemColor.gray,
            },
        }}
      >
        <MenuItem onClick={() => history.push("/Ca-nhan/Tai-khoan/Ho-so")}>
          Hồ sơ tài khoản
        </MenuItem>
        <MenuItem onClick={() => history.push("/Ca-nhan/Don-mua")}>
          Đơn mua
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => logout()}>Đăng xuất</MenuItem>
      </HoverMenu>
    </React.Fragment>
  );
}
