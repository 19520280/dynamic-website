import "./CollectionDialog.css";

import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import AddCollectionDialog from "../AddCollectionDialog";
import AddIcon from "@mui/icons-material/Add";
import { CollectionDialogState$ } from "../../../redux/selectors";
import ModalWithButton from "../../Modal/ModalWithButton";
import React from "react";
import { hideCollectionDialog } from "../../../redux/actions";
import { showAddCollectionDialog } from "./../../../redux/actions/index";

const imgMonarchButterflys11 =
  require("../../../assets/images/products/monarch-butterfly-t-shirt-white/white01.jpg").default;

const CollectionDialog = () => {
  const dispatch = useDispatch();
  const [stateSaveCollection, setStateSaveCollection] = React.useState(false);
  const open = useSelector(CollectionDialogState$);

  const handleClose = React.useCallback(() => {
    dispatch(hideCollectionDialog());
  }, [dispatch]);

  const handleAddCollectionClick = () => {
    dispatch(showAddCollectionDialog());
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

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
              <Typography color="primary"> {title} </Typography>
              <Typography color="secondary" fontSize="0.9rem">
                5 sản phẩm
              </Typography>
            </div>
          ) : (
            <Typography>Thêm mới danh sách</Typography>
          )}
        </Stack>
        {image ? <Checkbox /> : null}
      </Stack>
    </div>
  );

  return (
    <>
      <AddCollectionDialog />
      <ModalWithButton
        open={open}
        handleClose={handleClose}
        header="Thêm vào danh sách"
        body={
          <>
            <DialogContent dividers>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <Stack direction="column" spacing={2}>
                  {[...new Array(6)].map((_, index) => (
                    <>
                      {collectionItem(imgMonarchButterflys11, "Áo")}
                      {index < 5 ? <Divider /> : null}
                    </>
                  ))}
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
          </>
        }
        btnText="Lưu"
        messageText="Lưu thành công"
        severity="success"
        state={stateSaveCollection}
        setState={setStateSaveCollection}
      />
    </>
  );
};

export default CollectionDialog;
