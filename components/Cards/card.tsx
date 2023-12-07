import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

export default function BioCard(props: any) {
  const [displayBio, setDisplayBio] = React.useState(false);

  const handleBio = () => {
    setDisplayBio(!displayBio);
  };
  return (
    <Card
      color="neutral"
      invertedColors={false}
      orientation="vertical"
      variant="outlined"
      size="sm"
      sx={{
        display: "flex",
        width: 320,
        maxWidth: "100%",
        boxShadow: "lg",
        height: "",
        borderRadius: "0",
        flexGrow: 1,

        "@media (max-width: 600px)": {
          height: "fit-content",
        },
      }}
    >
      <CardContent
        sx={{
          alignItems: "center",
          textAlign: "center",
          "& .css-9ae35a-JoyAvatar-img": {
            objectPosition: "top",
          },
        }}
      >
        <Avatar
          src={props?.img}
          alt={props?.name}
          sx={{ "--Avatar-size": "10rem", objectFit: "contain" }}
        />
        <Chip
          size="sm"
          variant="solid"
          color="neutral"
          sx={{
            mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
            textTransform: "uppercase",
          }}
        >
          {props?.position}
        </Chip>
        <Typography
          level="title-lg"
          sx={{
            textTransform: "uppercase",
          }}
        >
          {props?.name}
        </Typography>
        <Typography
          level="body-sm"
          sx={{
            maxWidth: "24ch",
            // display 2 line if displayBio is false
            display: displayBio ? "block" : "-webkit-box",
            WebkitLineClamp: displayBio ? 0 : 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {props?.bio}
        </Typography>
        <Button
          onClick={handleBio}
          sx={{
            textTransform: "uppercase",
            width: "90%",
            marginBottom: "1%",
            marginTop: "2%",
            borderRadius: "0 0 0 0",
            textAlign: "left",
            color: "#fff",
            backgroundColor: "#526092 !important",
            padding: "5px 25px 5px 25px",
            cursor: "pointer",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transitionDelay: "0.025s",

            "&:hover": {
              backgroundColor: "#14b8a6 !important",
              color: "#fff",
            },
          }}
        >
          {displayBio ? "See Less" : "See More"}
        </Button>
      </CardContent>
    </Card>
  );
}
