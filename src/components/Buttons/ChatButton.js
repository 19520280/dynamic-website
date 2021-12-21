import { Button, IconButton } from "@mui/material";

import ForumIcon from "@mui/icons-material/Forum";
import React from "react";

const ChatButton = () => {
  return (
    <Button
      variant="contained"
      startIcon={<ForumIcon />}
      sx={{
        position: "fixed",
        bottom: "0",
        right: "16px",
        zIndex: 999999,
      }}
    >
      Chat
    </Button>
  );
};

export default ChatButton;
