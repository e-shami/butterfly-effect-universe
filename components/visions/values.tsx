import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function InsetDividers() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '35vw',
        bgcolor: 'none',
      }}
    >
      <ListItem>
        <ListItemText primary="Empathy" secondary="Unsee the seen and re-see through a lens of humility" />
      </ListItem>
      <Divider component="li" />
      
      <ListItem>
        <ListItemText primary="Co-Supportive Vision" secondary="Understand the silent dialect of Earth & its voiceless inhabitants" />
      </ListItem>
      <Divider component="li" />
      
      <ListItem>
        <ListItemText primary="Sustainability" secondary="Weave ancient wisdom into modern practices" />
      </ListItem>
      <Divider component="li" />
      
      <ListItem>
        <ListItemText primary="Fluid Education" secondary="Non-prescriptive, Non-linear,  Inclusive Education" />
      </ListItem>
    </List>
  );
};

export function InsetDividers2() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: '35vw',
        bgcolor: 'none',
      }}
    >
      <ListItem>
        <ListItemText primary="Embodied Empowerment" secondary="Metamorphosis of thought leaders to prepare for future" />
      </ListItem>
      <Divider component="li" />
      
      <ListItem>
        <ListItemText primary="Resilience" secondary="Cultivate the capacity to endure and adapt" />
      </ListItem>
      <Divider component="li" />
      
      <ListItem>
        <ListItemText primary="Patience" secondary="Value the wisdom in nurturing & embracing fragility" />
      </ListItem>
      <Divider component="li" />
      
      <ListItem>
        <ListItemText primary="Excellence" secondary="Break free from the shackles of mediocrity" />
      </ListItem>
    </List>
  );
}