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

export default function ProductPolicy() {
  return (
    <List sx={{ width: "100%", maxWidth: 450, bgcolor: "transparent" }}>
      <ListItem>
        <ListItemIcon>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText
          primary="Giao hàng miễn phí"
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
          primary="Thanh toán COD"
          secondary="Không áp dụng cho sản phẩm này"
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PolicyIcon />
        </ListItemIcon>
        <ListItemText
          primary="Chính sách trả hàng"
          secondary="Không áp dụng cho sản phẩm này"
        />
      </ListItem>
    </List>
  );
}
