import {
  Collapse,
  Container,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import SiderAvatar from "../Avatar/SiderAvatar";
import { accountMenuItems } from "../../dataSources/Account";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import * as actions from "../../redux/actions/index";
import { AccountMenuState$ } from "../../redux/selectors/index";

const menuItems = accountMenuItems;

const useStyle = makeStyles({
  selectedMenuItem: {
    margin: "0px",
    padding: "0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "38px",
    color: "#303537",
    backgroundColor: "transparent",
  },
  listMenuItem: {
    margin: "0px",
    padding: "0px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "38px",
    color: "#5E6669",
    backgroundColor: "transparent",
  },
  selectedSubmenuItem: {
    padding: "0px",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "31px",
    color: "#303537",
    backgroundColor: "transparent",
  },
  listSubmenuItem: {
    padding: "0px",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "31px",
    color: "#5E6669",
    backgroundColor: "transparent",
  },
});

const AccountSider = ({ avatarImage, accountName, timeHasJoined }) => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const history = useHistory();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  //#region state menu expand
  useEffect(() => {
    if (pathnames[1] === "Tai-khoan") {
      dispatch(actions.expandMenu());
    } else {
      dispatch(actions.collapseMenu());
    }
  }, [dispatch]);

  const AccountMenu = useSelector(AccountMenuState$);

  const [isExpanded, setIsExpanded] = useState(AccountMenu.isExpanded);

  // const handleCollapse = useCallback((path) => {
  //   history.push(path);
  //   setIsExpanded(false)
  // })

  useEffect(() => {
    setIsExpanded(AccountMenu.isExpanded);
  }, [AccountMenu]);
  //#endregion

  return (
    <List>
      <SiderAvatar
        avatarImage={avatarImage}
        accountName={accountName}
        timeHasJoined={timeHasJoined}
      />

      <Divider style={{ padding: "0px 5px" }} variant="middle"></Divider>

      {menuItems.map((item) => (
        <Container style={{ padding: "0px", backgroundColor: "transparent" }}>
          <ListItemButton
            key={item.key}
            onClick={() =>
              item.key !== "Tai-khoan" && item.key !== "Dang-xuat"
                ? history.push(item.path)
                : item.key === "Tai-khoan"
                ? dispatch(actions.expandMenu())
                : null
            }
          >
            {pathnames[1] === item.key ? (
              <ListSubheader className={classes.selectedMenuItem}>
                {item.text}
              </ListSubheader>
            ) : (
              <ListSubheader className={classes.listMenuItem}>
                {item.text}
              </ListSubheader>
            )}
          </ListItemButton>
          {item.key === "Tai-khoan" ? (
            <Collapse in={isExpanded} unmountOnExit>
              {item.submenuItems.map((submenu) => (
                <List disablePadding>
                  <Container
                    style={{ paddingLeft: "30px", backgroundColor: "#FCFCFC" }}
                  >
                    <ListItemButton
                      key={submenu.key}
                      onClick={() => history.push(submenu.path)}
                    >
                      {pathnames[2] === submenu.key ? (
                        <ListSubheader className={classes.selectedSubmenuItem}>
                          {submenu.text}
                        </ListSubheader>
                      ) : (
                        <ListItemText
                          className={classes.listSubmenuItem}
                          primary={submenu.text}
                        />
                      )}
                    </ListItemButton>
                  </Container>
                </List>
              ))}
            </Collapse>
          ) : null}
        </Container>
      ))}
    </List>
  );
};

export default AccountSider;
