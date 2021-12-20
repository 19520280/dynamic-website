import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { BuyMoreDialogState$ } from "../../redux/selectors";
import CheckCartLeftTable from "./../Tables/CheckCartLeftTable";
import ModalWithButton from "../Modal/ModalWithButton";
import React from "react";
import { hideBuyMoreDialog } from "../../redux/actions";

const sorts = ["Phổ biến", "Bán chạy", "Giá cao", "Giá thấp"];
const BuyMoreDialog = () => {
  const dispatch = useDispatch();
  const open = useSelector(BuyMoreDialogState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideBuyMoreDialog());
  }, [dispatch]);

  const [sort, setsort] = React.useState("Phổ biến");
  const handleChangesort = (event) => {
    setsort(event.target.value);
  };
  return (
    <ModalWithButton
      open={open}
      header="Mua thêm"
      body={
        <>
          <DialogContent >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-end"
              sx={{ width: "100%", marginBottom: 2 }}
            >
              <Typography color="secondary" fontWeight="medium">
                Sắp xếp
              </Typography>
              <FormControl sx={{ width: "120px" }} className="selection">
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  onChange={handleChangesort}
                  size="small"
                >
                  {sorts.map((sort, index) => (
                    <MenuItem key={index} value={sort}>
                      {sort}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Stack>
            <CheckCartLeftTable contentOnly />
          </DialogContent>
        </>
      }
      maxWidthDialog="none"
      btnText="Mua"
      messageText="Thêm vào giỏ hàng thành công"
      typeMessage="success"
      handleClose={handleClose}
    />
  );
};

export default BuyMoreDialog;
