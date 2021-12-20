import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const SiderAvatar = () => {
  const { userData } = useContext(AuthContext);

  return (
    <ListItem alignItems="flex-center">
      <ListItemAvatar>
          <Avatar alt={userData.accountName} src={userData.avatarImage} sx={{ width: 60, height: 60}} />
      </ListItemAvatar>
      <ListItemText
        primary={userData.accountName}
        secondary={`Đã tham gia ${userData.timeHasJoined}`}
        style={{paddingLeft: "15px"}}
      />
    </ListItem>
  );
};

export default SiderAvatar;
