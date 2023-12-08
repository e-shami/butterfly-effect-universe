import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "@styles/customStyledComponents";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const classes = useStyles();
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={classes.forText}>
      <Accordion
        sx={{
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "0",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="h6" sx={{ width: "100%", flexShrink: 0, color: "#526092 !important" }}>
            OUR VISION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            width: "95%",
            textAlign: "justify",
          }}>
            We aspire to create a future where every individual, especially
            children, is touched by the wonders of nature, regardless of their
            formal education status. We are dedicated to fostering ecological
            empathy and nurturing future leaders by providing transformative
            learning experiences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "0",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant="h6" sx={{ width: "100%", flexShrink: 0, color: "#526092 !important" }}>
            OUR MISSION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            width: "95%",
            textAlign: "justify",
          }}>
            To establish a network of butterfly conservatories serving as
            educational research centers, that transcend the conventional
            educational boundaries. Our commitment is to strategically expand
            these educational hubs to as many locations as possible, ensuring
            inclusive access and creating a sustainable foundation for a more
            enlightened and environmentally conscious world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "0",
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography variant="h6" sx={{ width: "100%", flexShrink: 0, color: "#526092 !important" }}>
            OUR EDUCATIONAL VISION
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            width: "95%",
            textAlign: "justify",
          }}>
            Emphasizes immersive learning, interdisciplinary education,
            democratized knowledge, and the strategic use of modern technology.
            The overarching objective is to ignite curiosity, nurture empathy,
            and empower individuals to take meaningful action in addressing
            climate challenges. Additionally, the initiative aims to create
            celebratory, dramatic, and theatrical spaces — each offering a
            unique perspective on butterflies and their ecological significance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "0",
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography variant="h6" sx={{ width: "100%", flexShrink: 0, color: "#526092 !important" }}>
            OUR ARCHITECTURAL VISION{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            width: "95%",
            textAlign: "justify",
          }}>
            Rooted in climate change responsive and sensitive design ethics,
            emphasizing passive design wherever practical. It integrates
            sustainable practices, prioritizing the use of native and repurposed
            materials, and adopts low-impact construction techniques. This
            holistic approach ensures a cohesive and environmentally conscious
            design philosophy aligned with the project objectives.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
