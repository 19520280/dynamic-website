import * as React from "react";
import {
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import PolicyIcon from "@mui/icons-material/Policy";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
export default function ProductPolicy() {
  return (
    <List sx={{ width: "100%", maxWidth: 450, bgcolor: "transparent" }}>
      <ListItem>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText
          primary={<label>Giao hàng miễn phí <HelpOutlineIcon sx = {{width:15, height:15}}/> </label>}
          secondary={
            <label>
              Áp dụng cho đơn hàng có tổng giá trị từ hơn đ500.000
              <br />
              Thời gian giao hàng từ 8 - 20 ngày
            </label>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CreditScoreIcon />
        </ListItemIcon>
        <ListItemText
          primary={<label>Thanh toán COD <HelpOutlineIcon sx = {{width:15, height:15}}/> </label>}
          secondary="Không áp dụng cho sản phẩm này"
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PolicyIcon />
        </ListItemIcon>
        <ListItemText
          primary={<label>Chính sách trả hàng <HelpOutlineIcon sx = {{width:15, height:15}}/> </label>}
          secondary="Không áp dụng cho sản phẩm này"
        />
      </ListItem>
    </List>
  );
}
