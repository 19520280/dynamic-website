import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, Grid, Slide, useMediaQuery, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  if (!isMobile) {
    return (
      <>
        <AppBar position="static" color="primary">
          <Container>
            <Toolbar>
              <Grid container>
                <Grid item xs={6} xl={6}>
                  <Typography variant="body1" color="inherit">
                    © 2021 Dynamic Store từ từ làm tiếp nha
                  </Typography>
                </Grid>
                <Grid item xs={6} xl={6}>
                  <Typography variant="body1" color="inherit">
                    Social
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </>
    );
  } else return (
    <>
      is Mobile Footer
    </>
  )
}
