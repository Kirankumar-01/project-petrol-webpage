import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const SideMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} variant='selectedMenu'>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Concept" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Branch" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
