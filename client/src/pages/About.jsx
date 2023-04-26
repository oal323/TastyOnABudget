import React from 'react'
import BannerImage from "../assets/morefood.png";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${BannerImage})` }}
            ></div>
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
            </div>
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${BannerImage})` }}
            ></div>
        </div>
    )
}

export default About
