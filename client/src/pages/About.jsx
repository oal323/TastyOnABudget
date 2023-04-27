import React from 'react'
import BannerImage from "../assets/morefood.png";
import "../styles/About.css";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, Box, Grid, Typography, CardContent, ToggleButtonGroup, ToggleButton, FormHelperText } from '@mui/material';



function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${BannerImage})` }}
            >

            </div>

            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p>
                    Welcome to <b> Buy Potato Bake Potato </b> your one-stop shop for all your meal-planning needs!
                </p>
                <p>
                    Our mission is to help busy individuals and families make meal planning easier,
                    healthier, and more enjoyable. We believe that meal planning is an essential part
                    of a healthy lifestyle, but we know that it can be overwhelming and time-consuming.
                    That's why we created <b> Buy Potato Bake Potato </b> to take the stress out of meal planning
                    and make it simple, fun, and convenient.

                </p>
                <p>
                    Our website offers a wide range of features and resources to help you plan your meals with ease. Whether you're looking for healthy recipes, meal-planning tools, or expert advice, we've got you covered.

                </p>
                <p>
                    Here are some of the features you'll find on our website:


                </p>
                <p>
                    1. Recipe Database - Our recipe database contains thousands of delicious and nutritious recipes that are easy to prepare and perfect for busy schedules.

                </p>
                <p>
                    2.Meal Planning Tools - Our meal planning tools allow you to create personalized meal plans that meet your specific dietary needs and preferences.

                </p>
                <p>
                    3.  Shopping List Generator - Our shopping list generator makes grocery shopping a breeze by automatically generating a shopping list based on your meal plan.

                </p>
                <p>
                    4. Expert Advice - Our team of nutritionists and dietitians are here to provide you with expert advice and support to help you achieve your health and wellness goals.

                </p>
                <p>
                    At <b> Buy Potato Bake Potato </b>, we believe that meal planning should be a fun and enjoyable experience. That's why we've created a community of like-minded individuals who share their experiences, tips, and advice on our website and social media channels.

                </p>
                <p>
                    Join our community today and start your journey to healthier and happier meal planning!

                </p>

                <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Frequently Asked Questions

                    </Typography>
                    <Box

                        sx={{ padding: '20px', display: 'flex', flexWrap: 'wrap', }}

                    >


                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Is it Free?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Buy Potato Bake Potato is a web app and free meal planning tool that helps you to plan your meals and build shopping lists. It's available for free on the web (desktop and mobile). Ideal for busy people and families to plan their weekly meals and eat healthier.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>How to make a meal plan?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    To make a weekly menu plan:
                                </Typography>
                                <Typography>
                                    1. Compose a list of recipes from Eatwell101 or any website you like on the web. Make sure to ask your family what they like so you can build your meal plan with confidence.
                                </Typography>
                                <Typography>
                                    2. Sort by proteins: Chicken, beef, fish, eggs, etc - Or adapt depending on your dietary preferences. This helps having a solid base for each meal.

                                </Typography>
                                <Typography>
                                    3. Add each recipe to every days of the week on the meal planner. You can add several recipes for the same day.

                                </Typography>
                                <Typography>
                                    4.Make your grocery list (Eatwell101's Meal Planner helps you do that!). Take into account what you already have in your pantry or fridge.

                                </Typography>
                                <Typography>
                                    5. Shop, cook, eat!

                                </Typography>
                                <Typography>
                                    6. Repeat: Create a new meal plan. Our Menu Planner allows you to keep your weekly meal plan in printable or PDF format. This way you can make multiple meal plans.

                                </Typography>
                                <Typography>
                                    7.  Rotate: Alternate your meal plans and make adjustments for the next weeks.

                                </Typography>
                            </AccordionDetails>
                        </Accordion>


                    </Box>
                </Grid>


            </div>

        </div>
    )
}

export default About
