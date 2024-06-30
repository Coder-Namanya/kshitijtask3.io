import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MySVG from './money.svg';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Expense Accountant</h1>
        <h2>Master Your Finances: Track, Manage, Succeed!</h2>
        <p>The Expense Tracker web app offers users a streamlined way to manage finances effectively. With its intuitive interface and responsive design, users can effortlessly track expenses, edit details, and categorize expenditures for better financial insight. The app ensures data security through local storage management and provides real-time calculations of total expenses, promoting budget control and informed decision-making. By simplifying expense tracking and offering customizable features like category filters, the app empowers users to maintain financial clarity, save time, and achieve personal financial goals with confidence.</p>
        <div className="hero-buttons">
          <Link to="/track" className="btn">Track Expenses</Link>
          <Link to="/statistics" className="btn">Statistics</Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={MySVG} alt="SVG Image" />
      </div>
    </div>
  );
};

export default HeroSection;
