import React from "react";
import {
  Box,
  Tooltip,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Fade,
  Grow,
} from "@mui/material";

import HeaderBar from "../components/HeaderBar";

export default function Home() {
  const [scrollTop, setScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cards = [
    {
      image:
        "https://images.pexels.com/photos/244395/pexels-photo-244395.jpeg?auto=compress&cs=tinysrgb&w=400",
      image_alt: "man cutting onions",
      title: "For Chefs",
      content:
        "Onions can be used in food. They are delicious and make you cry when cutting them. I am sure they cry too when you cut them",
      button: "Request onions",
      size: 1,
    },
    {
      image:
        "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400",
      image_alt: "white onions",
      title: "For Eating",
      content:
        "You can also eat them, raw or cooked. It does not matter, this is not judging space. White onions are not my favorite, they are boring. Red onions are cool",
      button: "Join for onions",
      size: 1,
    },
    {
      image:
        "https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=1000",
      image_alt: "red onions",
      title: "For Looking At",
      content:
        "Heck yeah these are red onions oh yeah baby woo I love red onions",
      button: "Enroll for onions",
      size: 2,
    },
  ];

  return (
    <Box>
      <HeaderBar />
      <Box
        width="100%"
        backgroundColor="#1a1a1a"
        padding={{ xs: 2, md: 16 }}
        paddingTop={{ xs: 16 }}
        paddingBottom={{ xs: 16 }}
        textAlign="center"
      >
        <Tooltip title={"Onions are forever"}>
          <Box
            sx={{ width: "100%" }}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Fade in={true} timeout={1000}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  maxWidth: 900,
                }}
              >
                The #1 onion distribution & sharing platform
              </Typography>
            </Fade>
          </Box>
        </Tooltip>
        <Tooltip title={"Do not resist"}>
          <Box
            sx={{ width: "100%" }}
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            <Fade in={true} timeout={2000}>
              <Typography variant="h6" sx={{ maxWidth: 950, color: "#aaaaaa" }}>
                BackTheHox provides you with as many onions as you need and more
                than you want. Embrace the onion wherever you are,{" "}
                <span style={{ color: "#fff" }}>whenever you want</span>
              </Typography>
            </Fade>
          </Box>
        </Tooltip>
      </Box>
      <Fade in={scrollTop < 50} timeout={700}>
        <center>
          <Typography
            sx={{
              display: "static",
              padding: 2,
              marginTop: 20,
              fontFamily: "monospace",
              color: "#777",
            }}
          >
            👇Scroll Down👇
          </Typography>
        </center>
      </Fade>
      <Box
        justifyContent="center"
        alignItems="center"
        width="100%"
        display="flex"
      >
        <Box width="80%" padding={{ xs: 2, md: 16 }}>
          <Grid container spacing={8} columns={2}>
            {cards.map((card, idx) => {
              return (
                <Grow key={idx} in={scrollTop > (idx + 1) * 50}>
                  <Grid item md={card.size}>
                    <Card>
                      <CardMedia
                        sx={{
                          height: 220,
                        }}
                        image={card.image}
                        title={card.image_alt}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h4"
                          component="div"
                          textAlign="center"
                          sx={{
                            fontFamily: "monospace",
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          textAlign="center"
                          sx={{
                            fontFamily: "monospace",
                          }}
                        >
                          {card.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">{card.button} &gt;</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grow>
              );
            })}
          </Grid>
          <Typography
            textAlign="center"
            variant="h4"
            padding={8}
            sx={{
              fontFamily: "monospace",
            }}
          >
            Our Sponsors
          </Typography>
          <Typography
            textAlign="center"
            variant="body2"
            padding={2}
            sx={{
              fontFamily: "monospace",
            }}
          >
            idk man just onions
          </Typography>
          <hr style={{ borderColor: "#777" }} />
        </Box>
      </Box>
      <Box
        display="flex"
        sx={{
          backgroundColor: "#1a1a1a",
          minHeight: 200,
          padding: 12,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "monospace", color: "#aaaaaa", width: "100%" }}
        >
          🧅BACKTHEHOX
        </Typography>
        <Typography
          variant="body"
          sx={{
            fontFamily: "monospace",
            color: "#aaaaaa",
            textAlign: "right",
          }}
        >
          Created with love by{" "}
          <a href="https://gladiusso.com" target="_blank" rel="noreferrer">
            V3ntus
          </a>
          <br />
          Were you looking for <a href="https://hackthebox.com/">
            HackTheBox
          </a>{" "}
          instead?
        </Typography>
      </Box>
    </Box>
  );
}
