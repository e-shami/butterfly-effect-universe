"use client";
import React, { useState, useEffect } from "react";
import "@styles/global.css";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, ImageList, ImageListItem } from "@mui/material";

const ActionAreaCard = ({
  item,
}: {
  item: { img: string; title: string; description: string };
}) => (
  <Card
    sx={{
      maxWidth: 435,
      borderRadius: "8px",
      borderBlockColor: "rgb(94, 234, 212)",
      borderWidth: "2.5px",
      borderStyle: "ridge",
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        width="140"
        height="140"
        image={item.img}
        alt={item.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{
            fontFamily: "Roboto",
            fontWeight: "Medium",
            color: "#526092",
          }}
        >
          {item.title}
        </Typography>
        <Typography variant="body2" color="rgba(82, 96, 146, 0.6)">
          {item.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

interface ItemData {
  img: string;
  title: string;
  description: string;
}

const itemData : ItemData[] = [
  {
    img: "/assets/images/gallery/image1.png",
    title: "Picture Title",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image2.jpg",
    title: "Picture Title",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image3.png",
    title: "Picture Title",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image4.png",
    title: "Picture Title",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image5.jpg",
    title: "Picture Title",
    description: "Picture Description",
  },
  {
    img: "/assets/images/gallery/image1.png",
    title: "Picture Title",
    description: "Picture Description",
  },

  // Add other image details here
];

const ImageListWithCards = ({ itemData, columns }: { itemData: ItemData[]; columns: number }) => (
  <ImageList
    variant="masonry"
    cols={columns}
    gap={columns == 3 ? 30 : 10}
    sx={{ maxWidth: "95%" }}
  >
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <ActionAreaCard item={item} />
      </ImageListItem>
    ))}
  </ImageList>
);

// Your itemData array with image details

// Use the ImageListWithCards component

const Gallery = () => {
  const [columns, setColumns] = useState(3);

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

          "@media (min-width:1024px)": {
            // marginTop: "10rem",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#526092",
            textAlign: "center",
            fontSize: 38,
            fontWeight: 600,
            textTransform: "capitalize",
            marginBottom: "2rem",
            alignSelf: "flex-start",
            display: "flex",
            padding: "30px",
            flexDirection: "column",
            width: "100%",

            "@media (max-width: 600px)": {
              fontSize: 28,
              marginBottom: "0",
              position: "relative",
            },
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
