import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
  Box,
  Fade,
  Slide
} from "@mui/material";
import React from "react";

export default function HeaderBar() {
  const pages = ["Onion Products", "Onion Pricing", "Onion Blog"];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Slide direction="right" in={true} timeout={1000} mountOnEnter unmountOnExit>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontFamily: "monospace",
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              🧅BACKTHEHOX
            </Typography>
          </Slide>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((element, idx) => {
              return (
                <Fade in={true} timeout={(idx + 1) * 500} key={idx}>
                  <Button
                    variant="text"
                    size="large"
                    disableElevation
                    sx={{
                      fontWeight: 700,
                      color: "#aaaaaa",
                    }}
                  >
                    {element}
                  </Button>
                </Fade>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
