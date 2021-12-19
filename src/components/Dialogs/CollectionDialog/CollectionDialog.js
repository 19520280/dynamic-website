import "./CollectionDialog.css";

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { BtnColor } from "../../../color";
import CloseIcon from "@mui/icons-material/Close";
import { CollectionDialogState$ } from "../../../redux/selectors";
import MessageModal from "../../Modal/MessageModal";
import ModalWithButton from "../../Modal/ModalWithButton";
import React from "react";
import { SystemColor } from "../../../color";
import { hideCollectionDialog } from "../../../redux/actions";

const imgMonarchButterflys11 =
  require("../../../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;

const CollectionDialog = () => {
  const dispatch = useDispatch();
  const [stateAddCollection, setStateAddCollection] = React.useState(false);
  const [stateSaveCollection, setStateSaveCollection] = React.useState(false);
  const [state, setState] = React.useState(true);
  const open = useSelector(CollectionDialogState$);
  const handleSaveCollectionClick = React.useCallback(() => {
    setStateSaveCollection(true);
  }, [dispatch]);
  React.useEffect(() => {
    if (state == false) {
      setState(true);
      dispatch(hideCollectionDialog());
    }
  }, [dispatch, state]);

  const handleClose = React.useCallback(() => {
    dispatch(hideCollectionDialog());
  }, [dispatch]);
  const handleAddCollectionClick = () => {
    setStateAddCollection(true);
  };
  const listField = ["Tên danh sách yêu thích"];
  const collectionItem = (image, title) => (
    <div className="collection-item">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={0}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {image ? (
            <img src={image} />
          ) : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "0px",
              }}
              onClick={handleAddCollectionClick}
            >
              <AddIcon />
            </Button>
          )}
          {title ? (
            <div>
              {" "}
              <Typography color="primary"> {title} </Typography>{" "}
              <Typography color="secondary" fontSize="0.9rem">
                {" "}
                5 sản phẩm{" "}
              </Typography>{" "}
            </div>
          ) : (
            <Typography>Thêm mới danh sách</Typography>
          )}
        </Stack>
        {image ? <Checkbox /> : null}
      </Stack>
      <ModalWithButton
        state={stateAddCollection}
        setState={setStateAddCollection}
        listField={listField}
        header="Thêm danh sách yêu thích"
        btnText="Thêm mới"
        messageText="Thêm mới thành công"
        typeMessage="success"
      />
    </div>
  );

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{ maxHeight: "80%" }}
    >
      <DialogTitle id="scroll-dialog-title">
        Thêm vào danh sách
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <Stack direction="column" spacing={2}>
            {[...new Array(10)].map(() =>
              collectionItem(imgMonarchButterflys11, "Áo")
            )}
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        {collectionItem(null, null)}
        <Divider variant="light" />
      </DialogActions>
      <DialogActions>
        <Button onClick={handleSaveCollectionClick}>Lưu</Button>
      </DialogActions>
      <MessageModal
        state={stateSaveCollection}
        setState={setStateSaveCollection}
        setStateParent={setState}
        text="Lưu thành công"
        severity="success"
        closeAfterSecond={true}
      />
    </Dialog>
  );
};

export default CollectionDialog;
