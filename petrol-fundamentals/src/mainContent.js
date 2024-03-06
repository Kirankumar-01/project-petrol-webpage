import React from 'react';
import {
  Typography,
  Grid,
  Container,
  Box,
  CardMedia
} from '@mui/material';


const images = {
  'new_and_emerging_concepts': './resources/newConcept.jpg',
  'history': './resources/history.jpg',
  'fundamentals_of_the_industry': './resources/fundamental.jpg',
  'crucial_formulas': './resources/formula.jpg',
};


const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Typography margin={10} variant="h2" component="h1" align="center" gutterBottom>
        Welcome to Petrol Fundamentals!
      </Typography>
      <Typography margin={10} variant="body1" component="p" align="center" mb={4}>
        We are dedicated to exploring the rich tapestry of the petroleum industry, from its historical roots to its cutting-edge advancements. Our mission is to provide a comprehensive resource hub for enthusiasts, professionals, and curious minds alike.
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            <CardMedia
              component="img"
              image={images['new_and_emerging_concepts']}
              alt="New and Emerging Concepts"
              sx={{ mb: 1 }}
            />
            <Typography textAlign={'center'} margin={10} variant="h5" component="h3">
              New and Emerging Concepts
            </Typography>
            <p>
              Stay at the forefront of the industry with our insights into the latest trends, technologies, and innovations shaping the future of petroleum exploration, production, and utilization.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            <CardMedia
              component="img"
              image={images['history']}
              alt="History of the Industry"
              sx={{ mb: 1 }}
            />
            <Typography textAlign={'center'} margin={10} variant="h5" component="h3">
              History of the Industry
            </Typography>
            <p>
              Journey through time as we delve into the fascinating history of the petroleum industry, tracing its evolution from ancient civilizations' early uses of natural oil to the modern global energy landscape.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            <CardMedia
              component="img"
              image={images['fundamentals_of_the_industry']}
              alt="Fundamentals of the Industry"
              sx={{ mb: 1 }}
            />
            <Typography textAlign={'center'} margin={10} variant="h5" component="h3">
              Fundamentals of the Industry
            </Typography>
            <p>
              Whether you're a novice or a seasoned professional, our platform offers in-depth coverage of the fundamental principles underpinning the petroleum sector, including exploration, drilling, refining, and distribution.
            </p>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'background.paper',
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            <CardMedia
              component="img"
              image={images['crucial_formulas']}
              alt="Crucial Formulas"
              sx={{ mb: 1, }}
            />
            <Typography textAlign={'center'} margin={10} variant="h5" component="h3">
              Crucial Formulas
            </Typography>
            <p>
              Unlock the essential equations and formulas essential for understanding key concepts in petroleum engineering, reservoir analysis, and more. Our curated collection of formulas simplifies complex calculations, empowering you to tackle challenges with confidence.
            </p>
          </Box>
        </Grid>
      </Grid>

      <Typography margin={10} variant="body1" component="p" align="center" mt={4}>
        Join us as we embark on a journey of discovery, education, and innovation in the dynamic world of petroleum. Together, let's explore the past, present, and future of this vital industry.
      </Typography>
    </Container>
  );
};

export default HomePage;
