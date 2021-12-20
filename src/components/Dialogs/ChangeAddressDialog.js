import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { ChangeAddressDialogState$ } from "../../redux/selectors";
import MemberInfo from "./../PaymentBody/UserInfo/MemberInfo";
import ModalWithButton from "../Modal/ModalWithButton";
import React from "react";
import { hideChangeAddressDialog } from "../../redux/actions";

const ChangeAddressDialog = ({ data }) => {
  const dispatch = useDispatch();
  const open = useSelector(ChangeAddressDialogState$);

  const handleClose = React.useCallback(() => {
    dispatch(hideChangeAddressDialog());
  }, [dispatch]);

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
    <>
      <ModalWithButton
        open={open}
        handleClose={handleClose}
        header="Thay đổi địa chỉ"
        body={
          <>
            <DialogContent dividers>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="saving"
                    name="radio-buttons-group"
                  >
                    <Stack direction="column" spacing={2}>
                      {data.address.name.map((add, index) => (
                        <div>
                          <FormControlLabel
                            sx={{ marginBottom: 2 }}
                            key={index}
                            value="saving"
                            control={<Radio sx={{ marginRight: 1 }} />}
                            label={<MemberInfo data={data} address={add} />}
                          />
                          {index < data.address.name.length - 1 ? (
                            <Divider />
                          ) : null}
                        </div>
                      ))}
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "0px",
                  }}
                  //onClick={handleAddChangeAddressClick}
                >
                  <AddIcon />
                </Button>
                <Typography>Thêm mới địa chỉ</Typography>
              </Stack>
            </DialogActions>
            <Divider variant="light" />
          </>
        }
        btnText="Đồng ý"
        messageText="Chỉnh sửa thành công"
        severity="success"
        // state={stateSaveChangeAddress}
        // setState={setStateSaveChangeAddress}
      />
    </>
  );
};

export default ChangeAddressDialog;
