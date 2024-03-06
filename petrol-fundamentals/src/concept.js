import React, { useState } from 'react';
import {
    Typography,
    Menu,
    MenuItem,
    IconButton,
    Divider,
    Grid,
    Container,
    Box,
    //   AddIcon
} from '@mui/material';

const conceptsData = [
    {
        title: 'Reservoir Characterization',
        content: (
            <p>
                Understanding the characteristics of subsurface reservoirs where hydrocarbons are trapped is essential. This includes knowledge of reservoir rock properties (porosity, permeability), fluid properties (viscosity, density), fluid behaviour, and reservoir geometry.
                <ul>
                    <li> Porosity: Porosity refers to the percentage of pore space within a rock formation. It indicates the volume of void spaces in the rock that can contain fluids, such as oil, gas, or water.</li>
                    <li>permeability: Permeability is a measure of a rock's ability to transmit fluids through its pore spaces. It quantifies the ease with which fluids can flow through the rock formation.</li>
                    <li>Fluid Properties (Viscosity, Density):
                        Viscosity is a measure of a fluid's resistance to flow. It describes how easily a fluid can deform or flow under an applied force composition.
                        Density is the mass per unit volume of a substance. In the context of petroleum engineering, density is important for characterizing fluids such as oil, gas, and water..</li>
                    <li>Fluid Behaviour:
                        Fluid behaviour refers to how fluids behave under different pressure and temperature conditions within a reservoir. This includes understanding phase behaviour (e.g., vapor-liquid equilibrium), fluid flow characteristics (e.g., laminar or turbulent flow), and fluid properties (e.g., viscosity, density) at reservoir conditions..</li>
                    <li>Reservoir Geometry:
                        Reservoir geometry refers to the spatial arrangement and shape of the reservoir rock formation that contains hydrocarbons. This includes dimensions such as reservoir thickness, length, width, and geometry of structural features (e.g., faults, folds).</li>
                </ul>
            </p>

        )
    },
    {
        title: 'Fluid Flow in Porous Media',
        content: (
            <p>
                Fluid flow in porous media is fundamental to petroleum engineering. Concepts such as Darcy's law, fluid mobility, multiphase flow behaviour, and pressure transient analysis are essential for predicting and optimizing fluid production from reservoirs.                {/* ... detailed content for reservoir characterization */}
                <ul>
                    <li>Darcy's Law
                        is a fundamental concept in fluid flow through porous media, widely used in petroleum engineering. It states that the rate of fluid flow through a porous medium is directly proportional to the pressure gradient and inversely proportional to the fluid viscosity and the medium's permeability.
                        Darcy's law is essential for analysing fluid flow in reservoir rocks and designing efficient production strategies.</li>
                    <li>Fluid Mobility</li>
                    <li>Fluid mobility is a measure of the ease with which a fluid can flow through a porous medium under the influence of a pressure gradient. It is the ratio of fluid permeability to fluid viscosity and is a critical parameter in reservoir engineering. Fluid mobility determines the relative ease of fluid movement within a reservoir and plays a crucial role in optimizing production rates and recovery strategies.</li>
                    <li>Multiphase Flow Behavior</li>
                    <li>Multiphase flow behavior refers to the simultaneous flow of two or more phases (e.g., oil, gas, water) through porous media. In petroleum engineering, multiphase flow behavior is common in reservoirs where hydrocarbons and water coexist. Understanding multiphase flow behavior is crucial for predicting fluid distribution, identifying production challenges (such as water coning or gas breakthrough), and optimizing production strategies to maximize hydrocarbon recovery.</li>
                    <li>Pressure Transient Analysis</li>
                    <li>Pressure transient analysis is a technique used to interpret pressure data collected during well testing or production operations to evaluate reservoir properties and performance. By analyzing pressure responses to changes in production or injection rates, pressure transient analysis provides valuable insights into reservoir characteristics such as permeability, skin factor, reservoir boundaries, and reservoir connectivity. It helps petroleum engineers make informed decisions regarding well performance, reservoir management, and production optimization.</li>
                    <li>Investment analysis</li>
                </ul>

            </p>
        )
    },
    {
        title: 'Well Construction and Completion',
        content: (
            <p>
                Well construction and completion involve various processes and techniques to drill and prepare wells for production. Key concepts include drilling methods, casing design, cementing, perforation, hydraulic fracturing, and wellbore integrity.                {/* ... detailed content for reservoir characterization */}
            </p>
        )
    },
    {
        title: 'Reservoir Simulation',
        content: (
            <p>
                Reservoir simulation is a crucial tool for modeling and predicting reservoir behaviour under different operating conditions. Understanding reservoir simulation concepts such as grid modeling, fluid flow equations, and history matching is essential for reservoir management and optimization.                {/* ... detailed content for reservoir characterization */}
            </p>
        )
    },
    {
        title: 'Enhanced Oil Recovery (EOR)',
        content: (
            <p>
                Enhanced oil recovery techniques are used to increase the amount of oil recovered from reservoirs beyond primary and secondary production methods. Concepts such as water flooding, gas injection (CO2, natural gas), thermal methods, and chemical injection are essential for maximizing oil recovery.            </p>
        )
    },
    {
        title: 'Drilling and Well Control',
        content: (
            <p>
                Drilling and well control concepts are crucial for safe and efficient drilling operations. This includes knowledge of drilling rig components, drilling fluid properties, well control techniques, blowout prevention, and well control equipment.            </p>
        )
    },
    {
        title: 'Health, Safety, and Environment (HSE) Management:',
        content: (
            <p>
                HSE management is integral to the petroleum industry to ensure safe and environmentally responsible operations. Concepts such as risk assessment, hazard identification, safety protocols, environmental impact assessment, and regulatory compliance are essential for HSE management.            </p>
        )
    },
    {
        title: 'Petroleum Refining',
        content: (
            <p>
                Petroleum refining involves converting crude oil into various refined products such as gasoline, diesel, jet fuel, and petrochemicals. Essential concepts include refinery processes (distillation, catalytic cracking, reforming), product specifications, refining economics, and environmental regulations.            </p>
        )
    },
    {
        title: 'Pipeline Transportation:',
        content: (
            <p>
                Pipeline transportation is a key method for transporting crude oil, natural gas, and refined products from production sites to refineries and distribution centres. Concepts such as pipeline design, pipeline integrity, corrosion control, and pipeline safety regulations are essential for pipeline transportation.
            </p>
        )
    },
    {
        title: 'Energy Economics and Market Dynamics',
        content: (
            <p>
                Understanding energy economics and market dynamics is crucial for decision-making in the petroleum industry. Concepts such as:
                <ul>
                    <li>Supply and demand dynamics</li>
                    <li>Price volatility</li>
                    <li>Energy policy</li>
                    <li>Geopolitical factors</li>
                    <li>Investment analysis</li>
                </ul>
            </p>
        )
    },
];

const Concept = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event, title) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container maxWidth="lg">
            <Typography textAlign={'center'} margin={10} variant="h4" component="h2">
                Most Essential Concepts
            </Typography>
            <Grid container spacing={3}>
                {conceptsData.map((concept) => (
                    <Grid item xs={12} key={concept.title}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'background.paper',
                                boxShadow: 1,
                                borderRadius: 2,
                                p: 2,
                                mb: 10,
                            }}
                        >
                            <Typography variant="h5" component="h3" mb={3}>
                                {concept.title}
                            </Typography>
                            <Typography variant="h6" component="h3" mb={3}>
                                {concept.content}
                            </Typography>
                            <Divider />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Concept;
