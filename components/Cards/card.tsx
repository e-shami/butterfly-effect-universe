import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Image from "next/image";
import { Grid } from "@mui/material";
import { List, ListItem } from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";

export default function BioCard(props: any) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <React.Fragment>
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
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          >
            {props?.bio}
          </Typography>
          <Chip
            disabled={false}
            size="sm"
            variant="solid"
            onClick={() => setOpen(true)}
            sx={{
              textTransform: "uppercase",
              width: "90%",
              marginTop: "2%",
              borderRadius: "0 0 0 0",
              color: "#fff",
              backgroundColor: "#526092 !important",
              padding: "5px 25px 5px 25px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transitionDelay: "0.025s",
            }}
          >
            {"Learn More"}
          </Chip>
        </CardContent>
      </Card>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          position:'absolute',
          top:'15%',
          left:'5%',
          overflow:'scroll',
          height:'90%',
          display:'block'
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: "90vw",
            height: "90vh",
            borderRadius: "0",
            boxShadow: "lg",
            overflow: "scroll",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
              lg={3}
              xl={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                p: 3,
              }}
            >
              <Image
                src={props?.img}
                alt={props?.name}
                width={250}
                height={250}
                objectFit="contain"
              />
              <Typography
                component="h6"
                id="modal-title"
                textColor="inherit"
                fontWeight="lg"
                mt={1}
                sx={{
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                {props?.name}
              </Typography>
              <Typography
                mt={1}
                sx={{
                  textAlign: "center",
                  color: "#526092 !important",
                }}
              >
                {props?.bio}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={9}
              lg={9}
              xl={9}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                p: 3,
              }}
            >
              <Typography
                component="h6"
                id="modal-title"
                textColor="inherit"
                fontWeight="lg"
                mt={1}
                sx={{
                  textTransform: "uppercase",
                  color: "#526092 !important",
                  textAlign: "center",
                }}
              >
                About {props?.name}
              </Typography>
              <List>
                {props?.history?.map((item: any) => (
                  <ListItem
                    sx={{
                      textAlign: "justify",
                      display: "flex",
                      alignItems: "baseline",
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: "5px",
                        color: "#14b8a6",
                        marginRight: "5px",
                      }}
                    />
                    <Typography>{item}</Typography>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                pb: 1
              }}  
              >
                <Image src={'/assets/images/logo2.svg'} alt={"Butterfly Effect Logo"} width={30} height={30} objectFit="contain" />
              </Grid>
          </Grid>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
