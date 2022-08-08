import "../style/Homepage.css";

import React from 'react';
import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <div>

                <div className="homepage-background-image1">

                    <div className="background-image1">
                        <h1>Welcome to Prime Video</h1>
                        <p className="p">Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                       <Link to="/PaymentPage">
                            <button className="image1-btn">Start your 30-days free trail</button>
                       </Link> 
                        <p style={{ marginLeft: "30px", fontSize: "20px" }}>with select credit or debit cards</p>
                        <button className="image1-btn">Annual Prime at ₹1499</button>
                        <p style={{ marginLeft: "30px", fontSize: "20px" }}>With all electronic payment methods</p>
                    </div>

                </div>


                <div className="homepage-background-image2">
                    <div className="background-image2">
                        <h1>Blockbuster entertainment</h1>
                        <p className="p">Watch your favourite content across multiple devices! Anytime, anywhere.</p>
                        <button className="image2-btn">Monthly Prime at ₹179</button>
                        <p style={{ marginLeft: "30px", fontSize: "20px" }}>with select credit or debit cards</p>
                    </div>

                </div>


                <div className="homepage-background-image3">
                    <div className="background-image3">
                        <h1>Movie rentals on Prime Video</h1>
                        <p className="p">Early Access to new movies, before digital subscription</p>
                        <button className="image3-btn">Rent Now</button>

                    </div>
                </div>

                <div className="grid-part-left">

                    <div className="left-part">
                        <h1 style={{color : "black"}}>Your favorite channels all in one place</h1>
                        <p className=".p">With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
                        </p>
                    </div>


                    <div className="grid-part-right">


                        <div>
                            <img src=" https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src=" https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/ShortsTV-426X2944_V1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg" alt=""></img>
                        </div>
                        <div>
                            <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/Hayu_logo_for_MLP_Grid.jpg" alt=""></img>
                        </div>


                    </div>
                </div>

                <div className="homepage-background-image4">
                    <div className="image4-right">
                        <h1>Even better with Fire TV Stick</h1>
                        <p>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick
                            and stream on any HDTV. Press the voice button on the remote and say the
                            name of the title you want to watch to find it in seconds.</p>
                        <button className="image1-btn">Get Started</button>
                    </div>


                </div>


                <div className="homepage-background-image5">
                    <div className="background-image5">
                        <h1>Family Friendly</h1>
                        <p>With easy to use Parental Controls and a dedicated kids page,
                            enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows
                            like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                        <button className="image1-btn">Get Started</button>

                    </div>


                </div>


              
            </div>
        </>
    )
}
