import * as actions from "../../redux/actions/index";

import { Button, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/system";
import ConfirmModal from "../Modal/ConfirmModal";
import CountTypography from "../Typographys/CountTypography";
import MessageModal from "../Modal/MessageModal";
import ModalWithButtonState from "../Modal/ModalWithButtonState";
import { OrderStatusState$ } from "../../redux/selectors";
import OrdersCaseTypography from "../Typographys/OrdersCaseTypography";
import PaymentCartLeftTable from "../Tables/PaymentCartLeftTable";
import { useHistory } from "react-router-dom";

export default function OrderStatus({ status }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState(2);

  const [Status, setStatus] = useState(false);
  const [StatusConfirm, setStatusConfirm] = useState(false);
  const [StatusReceived, setStatusReceived] = useState(false);
  const [StatusReason, setStatusReason] = useState(false);
  const [StatusRating, setStatusRating] = useState(false);

  const onClick = () => {
    setStatus(true);
  };

  const rating = (
    <Stack direction="column" padding="10px 0px 16px" spacing={2}>
      <Stack direction="row" justifyContent="center">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Typography>
          {value < 3
            ? "Không hài lòng"
            : value == 3
            ? "Bình thường"
            : value > 3
            ? "Rất thích"
            : null}
        </Typography>
      </Stack>
    </Stack>
  );

  const handleClickContact = () => {
    history.push("/Lien-he");
  };
  const handleClickDetail = () => {
    history.push("/Ca-nhan/Don-mua/Chi-tiet");
  };
  const handleClickCancle = () => {
    setStatusConfirm(true);
  };
  const handleClickReceived = () => {
    setStatusReceived(true);
  };
  const handleClickBuy = () => {
    history.push("/Gio-hang");
  };

  const handleClickReason = () => {
    setStatusReason(true);
  };
  const handleClickRating = () => {
    setStatusRating(true);
  };

  const Success = (
    <>
      <Stack direction="row" spacing={1}>
        <Button onClick={handleClickBuy} variant="contained">
          MUA LẠI
        </Button>
        <Button
          disabled={status == "ĐÃ HỦY" ? true : Status}
          onClick={handleClickContact}
          variant="outlined"
        >
          LIÊN HỆ
        </Button>
        <Button onClick={handleClickRating} variant="outlined">
          ĐÁNH GIÁ
        </Button>
      </Stack>
    </>
  );

  const Cancel = (
    <>
      <Stack direction="row" spacing={1}>
        <Button onClick={handleClickBuy} variant="contained">
          MUA LẠI
        </Button>
        <Button onClick={handleClickContact} variant="outlined">
          LIÊN HỆ
        </Button>
        <Button onClick={handleClickReason} variant="outlined">
          CHI TIẾT LÝ DO
        </Button>
      </Stack>
    </>
  );

  const Shipping = (
    <>
      <Stack direction="row" spacing={1}>
        <Button onClick={handleClickReceived} variant="contained">
          ĐÃ NHẬN
        </Button>
        <Button
          disabled={status == "ĐÃ HỦY" ? true : Status}
          onClick={handleClickContact}
          variant="outlined"
        >
          LIÊN HỆ
        </Button>
        <Button onClick={handleClickDetail} variant="outlined">
          CHI TIẾT ĐƠN HÀNG
        </Button>
      </Stack>
    </>
  );

  const Waiting = (
    <>
      <Stack direction="row" spacing={1}>
        <Button onClick={handleClickContact} variant="contained">
          LIÊN HỆ
        </Button>
        <Button onClick={handleClickDetail} variant="outlined">
          CHI TIẾT ĐƠN HÀNG
        </Button>
        <Button
          disabled={
            status == "ĐÃ HỦY" || status == "ĐANG GIAO" || status == "ĐÃ GIAO"
              ? true
              : Status
          }
          onClick={handleClickCancle}
          variant="outlined"
        >
          HỦY
        </Button>
      </Stack>
    </>
  );
  const body = (
    <Typography>
      <p>Khách hàng không nhận</p>
    </Typography>
  );

  return (
    <Grid
      sx={{ paddingTop: "12px", cursor: "pointer" }}
    >
      <Box
        sx={{
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "4px",
          backgroundColor: "#fff",
          borderColor: "#BEBEBE",
        }}
      >
        <Grid item container justifyContent="flex-end">
          <OrdersCaseTypography
            text={status == "TẤT CẢ" ? "ĐÃ GIAO" : status ? status : ""}
          />
        </Grid>
        <PaymentCartLeftTable color="transparent" />
        <Grid
          style={{ paddingTop: "12px" }}
          item
          container
          justifyContent="flex-end"
        >
          <CountTypography text={"Tổng cộng: 350,000 VNĐ"} />
        </Grid>
        <Grid
          style={{ paddingBottom: "24px" }}
          item
          container
          justifyContent="flex-end"
        >
          {status == "TẤT CẢ" || status == null || status == "ĐÃ GIAO"
            ? Success
            : status == "CHỜ LẤY HÀNG" || status == "CHỜ XÁC NHẬN"
            ? Waiting
            : status == "ĐANG GIAO"
            ? Shipping
            : status == "ĐÃ HỦY"
            ? Cancel
            : null}
        </Grid>
      </Box>

      <ConfirmModal
        state={StatusConfirm}
        setState={setStatusConfirm}
        header="Xác nhận hủy đơn?"
        messageText="Hủy đơn thành công"
      />
      <MessageModal
        state={StatusReceived}
        setState={setStatusReceived}
        text="Nhận hàng thành công"
        closeAfterSecond
      />
      <ModalWithButtonState
        state={StatusReason}
        setState={setStatusReason}
        header={"Chi tiết hủy đơn"}
        btnText="OK"
        custombody={body}
      />

      <ModalWithButtonState
        state={StatusRating}
        setState={setStatusRating}
        header={"Đánh giá đơn hàng"}
        btnText="ĐÁNH GIÁ"
        custombody={rating}
        messageText={"Đánh giá thành công"}
      />
    </Grid>
  );
}
