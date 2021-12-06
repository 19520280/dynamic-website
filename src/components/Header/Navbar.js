import * as React from "react";
import "./Header.css";
import { Box, Button, Stack, Menu, MenuItem, Link } from "@mui/material";
import { pages } from "../../dataSources/Pages";

function Navbar() {
  console.log(pages);
  return (
    <Box
      sx={{
        backgroundColor: "white",
      }}
      className="navbar"
    >
      <Stack direction="row" spacing={6}>
        {pages.map((page, index) => {

          return (
            <Link href={page.path} underline="none" variant="button">
              {page.title}
            </Link>
          );
        })}
      </Stack>
      {/* <Button variant="text">Text</Button>
        <Button variant="text" color="secondary">
          Text
        </Button>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button> */}
    </Box>
  );
}

export default Navbar;
