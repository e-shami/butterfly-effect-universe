"use client";
import React, { useState, useEffect } from "react";
import "@styles/global.css";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, ImageList, ImageListItem } from "@mui/material";
import { useStyles } from "@styles/customStyledComponents";   


const ActionAreaCard = ({
  item,
}: {
  item: { img: string; title: string; description: string };
}) => {

  return(
    <Card
    sx={{
      maxWidth: 450,
      borderRadius: "0",
      borderWidth: "2.5px",
      borderStyle: "ridge",
      height: "100%",
      p: 1,
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        image={item.img}
        alt={item.title}
        sx={{
          "@media (max-width: 600px)": {
            height: "20vh",
          },
          "@media (min-width: 600px) and (max-width: 1024px)": {
            height: "30vh",
          },
          "@media (min-width: 1024px) and (max-width: 1440px)": {
            height: "40vh",
          },
          "@media (min-width: 1440px)": {
            height: "50vh",
          }
        }}
      />
    </CardActionArea>
  </Card>
  )
};

interface ItemData {
  img: string;
  title: string;
  description: string;
}

const itemData : ItemData[] = [
  {
    img: "/assets/images/gallery/image1.jpg",
    title: "1",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image2.jpg",
    title: "2",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image3.jpg",
    title: "3",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image4.jpg",
    title: "4",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image5.jpg",
    title: "5",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image6.jpg",
    title: "6",
    description: "Picture Description",
  },

  // Add other image details here
];

const ImageListWithCards = ({ itemData, columns,}: { itemData: ItemData[]; columns: number;}) => (
  <ImageList
    cols={columns}
    gap={columns == 3 ? 30 : 10}
    sx={{ maxWidth: "95%" , justifyContent: "center", alignItems: "center",  }}
  >
    {itemData.map((item) => (
      <ImageListItem key={item.img} >
        <ActionAreaCard item={item} />
      </ImageListItem>
    ))}
  </ImageList>
);

const Gallery = () => {
  const [columns, setColumns] = useState(3);
  const classes = useStyles();

  useEffect(() => {
    const updateColumns = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setColumns(3); // Desktop mode
      } else {
        setColumns(2);
      }
    };

    updateColumns();

    // Update columns on window resize
    window.addEventListener("resize", updateColumns);

    return () => {
      // Cleanup event listener
      window.removeEventListener("resize", updateColumns);
    };
  }, []);
  return (
    <Grid
      container
      sx={{
        position: "relative",
        justifyContent: "center",
        alignContent: "center",

        "@media (max-width: 600px)": {
          height: "fit-content",
        },
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: "flex",
          alignItems: "start",
          alignContent: "start",
          paddingX: "50px",
          height: "fit-content",

        }}

        className={classes.forText}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#526092 !important",
            textTransform: "uppercase",
            fontWeight: "400 !important",
            paddingBottom: "30px",
            textAlign: "center",
            width: "100%"
          }}
        >
          Project Gallery
        </Typography>
      </Grid>
      <ImageListWithCards itemData={itemData} columns={columns} />
    </Grid>
  );
};

export default Gallery;
