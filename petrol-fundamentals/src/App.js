// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SideMenu from './sidemenu';
// import { AppBar, Toolbar, IconButton, Typography, Grid } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import Concept from './concept';
// import Branch from './branch';

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <Router>
//       <div>
//         <Grid container width={"100%"}>
//           <AppBar position="static">
//             <Toolbar>
//               <Grid>
//                 <IconButton edge="start" color="inherit" onClick={handleMenuToggle}>
//                   <MenuIcon />
//                 </IconButton>
//               </Grid>
//               <Grid>
//                 <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', width: '180vh' }} textAlign={'center'} variant="h4">Petrol Fundamentals</Typography>
//               </Grid>
//             </Toolbar>
//           </AppBar>
//           <SideMenu open={menuOpen} onClose={handleMenuToggle} />
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/branch" element={<Branch />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </Grid>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People'; // Example icon for About Us
import Branch from './branch';
import HomePage from './mainContent';
import About from './about';
// import Contact from './contact';
import Concept from './concept';

const content = {
  home: <HomePage />,
  branch: <Branch />,
  concept: <Concept />,
  about: <About />,
};

function App() {
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuItemClick = (page) => {
    setCurrentPage(page);
    setOpen(false); // Close drawer after selection
  };

  return (
    <div>
      <AppBar position="static" sx={{ zIndex: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8vh',
            width: '180vh'
          }}
            textAlign={'center'}
            variant="h4">
            Petrol Fundamentals
          </Typography>

        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent" // Set variant to "permanent" for always open
        open={true} // Set open to true (redundant with variant="permanent")
        sx={{
          backgroundColor: 'background.paper',
          display: { xs: 'none', md: 'block' },
          zIndex: 1, // Set lower z-index for Drawer
          position: 'absolute',
          top: '100%', // Position below the AppBar heigh
        }}
      >
        <List>
          <ListItem button key="Home" selected={currentPage === 'home'} onClick={() => handleMenuItemClick('home')}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="Branch" selected={currentPage === 'branch'} onClick={() => handleMenuItemClick('branch')}>
            <ListItemIcon>
              <PeopleIcon />  {/* Example icon for About Us */}
            </ListItemIcon>
            <ListItemText primary="Branch" />
          </ListItem>
          <ListItem button key="Concept" selected={currentPage === 'concept'} onClick={() => handleMenuItemClick('concept')}>
            <ListItemIcon>
              <PeopleIcon />  {/* Example icon for About Us */}
            </ListItemIcon>
            <ListItemText primary="Concepts" />
          </ListItem>
          <ListItem button key="About" selected={currentPage === 'about'} onClick={() => handleMenuItemClick('about')}>
            <ListItemIcon>
              <PeopleIcon />  {/* Example icon for About Us */}
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          {/* Add more menu items here following the same structure */}
        </List>
      </Drawer>
      <main style={{ paddingLeft: open ? 240 : 0 }}>
        {currentPage === 'home' && content.home}
        {currentPage === 'branch' && content.branch}
        {currentPage === 'concept' && content.concept}
        {currentPage === 'about' && content.about}
      </main>
    </div>
  );
}

export default App;
