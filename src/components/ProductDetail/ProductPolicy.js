import * as React from "react";
import { List, ListItemIcon, ListItemText, Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PolicyIcon from "@mui/icons-material/Policy";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
export default function ProductPolicy() {
  return (
    <List sx={{ width: "100%" }}>
      <Box sx={{ display: "flex" }}>
        <ListItemIcon sx={{ marginTop: 1, marginLeft: 1 }}>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <h4>
              Giao hàng miễn phí
              <HelpOutlineIcon sx={{ width: 15, height: 15 }} />
            </h4>
          }
          secondary={
            <h5>
              Áp dụng cho đơn hàng có tổng giá trị từ hơn đ500.000
              <br />
              Thời gian giao hàng từ 8 - 20 ngày
            </h5>
          }
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <ListItemIcon sx={{ marginTop: 1, marginLeft: 1 }}>
          <CreditScoreIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <h4>
              Thanh toán COD <HelpOutlineIcon sx={{ width: 15, height: 15 }} />
            </h4>
          }
          secondary={<h5>Không áp dụng cho sản phẩm này</h5>}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <ListItemIcon sx={{ marginTop: 1, marginLeft: 1 }}>
          <PolicyIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <h4>
              Chính sách trả hàng{" "}
              <HelpOutlineIcon sx={{ width: 15, height: 15 }} />
            </h4>
          }
          secondary={<h5>Không áp dụng cho sản phẩm này</h5>}
        />
      </Box>
    </List>
  );
}
