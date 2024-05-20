import React from 'react';
import './About.css'; // import your CSS file

const About: React.FC = () => {
    return (
        <div className='para'>
            <h1 className="title">About KisanSetu</h1>
            <p className="intro">About Kisan Setu</p>
            <p className="subtitle">Bridging the Gap Between Farmers and Buyers</p>
            <p className="description">Welcome to Kisan Setu, your reliable partner in transforming agricultural trade. Our mission is to empower farmers by providing a seamless platform where they can classify their crops and connect directly with buyers, ensuring they receive the Minimum Support Price (MSP) and fair market value for their produce.</p>
            <h3 className="vision-title">Our Vision</h3>
            <p className="vision-description">At Kisan Setu, we envision a thriving agricultural ecosystem where farmers are empowered with the tools and knowledge to get the best value for their hard work. We aim to bridge the gap between rural farmers and urban markets, ensuring transparency, fairness, and efficiency in the agricultural supply chain.</p>
            <h3 className="offer-title">What We Offer</h3>
            <h4 className="offer-subtitle">For Farmers</h4>
            <ul className="offer-list">
                <li>Crop Classification: Our advanced system allows farmers to classify their crops based on quality, type, and other essential parameters. This helps in presenting their produce in a standardized manner, making it easier for buyers to assess and purchase.</li>
                <li>Guaranteed MSP: We ensure that farmers get at least the Minimum Support Price for their crops, protecting them from market fluctuations and middlemen exploitation.</li>
                <li>Direct Market Access: By connecting farmers directly with buyers, we eliminate intermediaries, ensuring better prices and timely payments.</li>
            </ul>
            <h4 className="offer-subtitle">For Buyers</h4>
            <ul className="offer-list">
                <li>Quality Assurance: Our platform provides detailed classifications and quality reports of crops, ensuring buyers can make informed purchasing decisions.</li>
                <li>Diverse Selection: Buyers have access to a wide variety of crops from different regions, ensuring they can find exactly what they need.</li>
                <li>Transparent Transactions: We maintain transparency in all transactions, ensuring fair trade practices and building trust between buyers and sellers.</li>
            </ul>
            <h3 className="how-it-works-title">How It Works</h3>
            <ol className="how-it-works-list">
                <li>Registration: Farmers and buyers register on our platform with their details.</li>
                <li>Crop Listing: Farmers list their crops with detailed classifications and quality parameters.</li>
                <li>Bidding and Purchase: Buyers browse the listings, place bids or purchase directly at the MSP or negotiated prices.</li>
                <li>Secure Payments: Transactions are secured and payments are processed efficiently, ensuring both parties are satisfied.</li>
            </ol>
            <h3 className="commitment-title">Our Commitment</h3>
            <p className="commitment-description">At Kisan Setu, we are committed to:</p>
            <ul className="commitment-list">
                <li>Empowering Farmers: Providing them with the knowledge and tools to maximize their earnings.</li>
                <li>Ensuring Fair Prices: Guaranteeing MSP and fair market value for crops.</li>
                <li>Facilitating Efficient Trade: Creating a seamless, transparent, and efficient platform for agricultural trade.</li>
            </ul>
            <h3 className="join-us-title">Join Us</h3>
            <p className="join-us-description">Become a part of Kisan Setu today and contribute to a fairer, more prosperous agricultural community. Whether you are a farmer looking to get the best value for your crops or a buyer seeking quality produce, Kisan Setu is your trusted partner in agricultural trade.</p>
            <h3 className="contact-us-title">Contact Us:</h3>
            <ul className="contact-us-list">
                <li>Email: support@kisansetu.com</li>
                <li>Phone: +91-123-456-7890</li>
                <li>Address: DTU, India</li>
            </ul>
        </div>
    );
}

export default About;