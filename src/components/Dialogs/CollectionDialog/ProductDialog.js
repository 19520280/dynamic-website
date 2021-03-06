import "./CollectionDialog.css";

import {
  Box,
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

import { BtnColor } from "../../../color";
import { Circle } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import MessageModal from "../../Modal/MessageModal";
import ModalWithButton from "../../Modal/ModalWithButton";
import { ProductDialogState$ } from "../../../redux/selectors";
import React from "react";
import { SystemColor } from "../../../color";
import { hideProductDialog } from "../../../redux/actions";

const imgMonarchButterflys11 =
  require("../../../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;

const ProductDialog = () => {
  const dispatch = useDispatch();
  const [stateSaveCollection, setStateSaveCollection] = React.useState(false);
  const [state, setState] = React.useState(true);
  const open = useSelector(ProductDialogState$);
  const listColor = ["#FFF", "#4581f6", "#01a08e"];
  const handleSaveCollectionClick = React.useCallback(() => {
    setStateSaveCollection(true);
  }, [dispatch]);
  React.useEffect(() => {
    if (state == false) {
      setState(true);
      dispatch(hideProductDialog());
    }
  }, [dispatch, state]);

  const handleClose = React.useCallback(() => {
    dispatch(hideProductDialog());
  }, [dispatch]);

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
          <img src={image} />
          {image ? (
            <Stack direction="column">
              <Typography color="primary" fontSize="1rem">
                {title}
              </Typography>
              <Stack direction="column" spacing={0.5}>
                <Box sx={{ width: "60px" }}>
                  <Typography color="secondary" fontSize="0.875rem">
                    Size: M
                  </Typography>
                </Box>
                <Box sx={{ width: "auto", paddingRight: "10px" }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography color="secondary" fontSize="0.875rem">
                      Màu sắc:
                    </Typography>
                    {listColor.map((item) => (
                      <Circle
                        style={{
                          border: "1px solid",
                          borderColor: SystemColor.gray,
                          color: item,
                          minWidth: "0px",
                          padding: "0px",
                          borderRadius: "50%",
                        }}
                        fontSize="smaller"
                      />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Stack>
          ) : null}
        </Stack>
        {image ? <Checkbox /> : null}
      </Stack>
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
    <ModalWithButton
      header="Thêm sản phẩm"
      open={open}
      handleClose={handleClose}
      body={
        <>
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
          </DialogActions>
        </>
      }
      btnText="Thêm"
      messageText="Thêm mới thành công"
      severity="success"
      state={stateSaveCollection}
      setState={setStateSaveCollection}
    />
  );
};

export default ProductDialog;
