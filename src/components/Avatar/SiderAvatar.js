import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const SiderAvatar = ({ avatarImage, accountName, timeHasJoined }) => {
  return (
    <ListItem alignItems="flex-center">
      <ListItemAvatar>
          <Avatar alt="Minh Đinh" src={avatarImage} sx={{ width: 60, height: 60}} />
      </ListItemAvatar>
      <ListItemText
        primary={accountName}
        secondary={`Đã tham gia ${timeHasJoined}`}
        style={{paddingLeft: "15px"}}
      />
    </ListItem>
  );
};

export default SiderAvatar;
