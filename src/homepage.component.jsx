import React from 'react';
import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HEALING POTIONS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
                <div className="content">
                    <h1 className="title">POISONS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
                <div className="content">
                    <h1 className="title">MAGIC POTIONS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
                <div className="content">
                    <h1 className="title">SCROLLS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
                <div className="content">
                    <h1 className="title">WONDROUS ITEMS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;