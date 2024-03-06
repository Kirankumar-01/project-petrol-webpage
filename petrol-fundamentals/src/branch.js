import React from 'react';
import { Typography, Box, Divider, Grid, Container, Card, CardContent, CardMedia } from '@mui/material';

const images = {
    upstream: "./resources/upstream.jpeg",
    downstream: "./resources/downstream.jpg",
    midstream: './resources/midstream.jpg',
    regulatory: './resources/regulatory.jpg',
};

const branchData = [
    {
        title: 'Upstream Sector',
        content: (
            <p>
                <ul>
                    <li>The upstream sector focuses on identifying and extracting oil and natural gas from underground reservoirs.</li>
                    <li>Exploration: Identifying potential hydrocarbon reserves.</li>
                    <li>Drilling: Extracting crude oil and natural gas through wells.</li>
                    <li>Production: Managing the ongoing extraction of oil and gas.</li>
                </ul>
            </p>
        ),
        image: images.upstream,
    },
    {
        title: 'Midstream Sector',
        content: (
            <p>
                <ul>
                    <li>The midstream sector focuses on transporting, storing, and initially processing oil and natural gas.</li>
                    <li>Transportation: Moving oil and gas from production sites to refineries or distribution centers.</li>
                    <li>Storage: Holding oil and gas in tanks or underground facilities.</li>
                    <li>Processing: Removing impurities and separating components for further processing.</li>
                </ul>
            </p>
        ),
        image: images.midstream,
    },
    {
        title: 'Downstream Sector',
        content: (
            <p>
                <ul>
                    <li>Refining: Involves the refining of crude oil into various petroleum products such as gasoline, diesel, jet fuel, and lubricants through processes like distillation, cracking, and reforming.</li>
                    <li>Petrochemicals: Involves the production of chemicals and plastics derived from petroleum feedstocks in petrochemical plants.</li>
                    <li>Marketing and Distribution: Involves the distribution and marketing of petroleum products to consumers through retail outlets, wholesalers, and distributors.</li>
                </ul>
            </p>
        ),
        image: images.downstream,
    },
    // ... add similar objects for remaining branches with image paths
    {
        title: 'Regulatory and Environmental Management',
        content: (
            <p>
                <ul>
                    <li>This sector ensures compliance with regulations and minimizes the environmental impact of the industry.</li>
                    <li>Regulatory Compliance: Adhering to safety, environmental, and resource management regulations.</li>
                    <li>Environmental Management: Implementing practices to minimize pollution and protect the environment.</li>
                </ul>
            </p>
        ),
        image: images.regulatory,
    },
];

const Branch = () => {
    return (
        <Container maxWidth="lg">
                <Typography textAlign={'center'} padding={5} variant="h4" component="h2" sx={{ mb: 3 }}>
                    Main Branches of the Oil & Gas Industry
                </Typography>
            <Grid container spacing={3}>
                {branchData.map((branch) => (
                    <Grid item xs={12} key={branch.title}>
                        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={branch.image}
                                alt={branch.title}
                                // sx={{ height: 280 }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h3">
                                    {branch.title}
                                </Typography>
                                <Divider sx={{ mb: 1 }} />
                                <Typography variant="h6" component="h3">
                                    {branch.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
};

export default Branch;
