import { DialogContent, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { AddCollectionDialogState$ } from "../../redux/selectors";
import ModalWithButton from "../Modal/ModalWithButton";
import React from "react";
import { hideAddCollectionDialog } from "../../redux/actions";

const AddCollectionDialog = () => {
  const dispatch = useDispatch();
  const open = useSelector(AddCollectionDialogState$);
  const handleClose = React.useCallback(() => {
    dispatch(hideAddCollectionDialog());
  }, [dispatch]);
  return (
    <ModalWithButton
      open={open}
      header="Thêm mới danh sách"
      body={
        <DialogContent dividers>
          <TextField label="Tên danh sách" sx={{width:"100%"}}></TextField>
        </DialogContent>
      }
      btnText="Thêm"
      typeMessage="success"
      messageText="Thêm mới thành công"
      handleClose={handleClose}
    />
  );
};

export default AddCollectionDialog;
