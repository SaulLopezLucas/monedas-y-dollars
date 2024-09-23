import React from 'react';
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const cardsDeck = [
    {
      title: "Introduction to Budgeting",
      description:
        "Learn to manager your dinero wisely and plan for the future.",
      tagline: "Plan today to thrive mañana.",
    },
    {
      title: "Introduction to Saving",
      description: "Setting aside dinero for future needs or emergencies",
      tagline: "Every penny saved is a step toward your sueños.",
    },
    {
      title: "Introduction to Debt Management",
      description: "Strategies to pay down deudas and avoid new ones.",
      tagline: "Take charge of your debt, reclaim your futuro.",
    },
    {
      title: "Introduction to Investing",
      description:
        "Using money to buy activos with the expectation of returns.",
      tagline: "Invest today for a prosperous mañana.",
    },
    {
      title: "Introduction to Credit",
      description:
        "The ability to borrow dinero and understanding puntajes de crédito.",
      tagline: "Build your credit, build your futuro.",
    },
    {
      title: "Introduction to Retirement Planning",
      description: "Preparing financially for your años dorados.",
      tagline: "Secure your golden years hoy.",
    },
    {
      title: "Introduction to Taxes",
      description:
        "Understanding how ingresos is taxed and filing requirements.",
      tagline: "Be tax-savvy, keep more of your dinero.",
    },
    {
      title: "Introduction to Insurance",
      description: "Protecting yourself and activos from unexpected results.",
      tagline: "Protect what matters most to you.",
    },
    {
      title: "Introduction to Financial Scams",
      description: "Recognizing and avoiding various types of fraudes.",
      tagline: "Stay vigilant, safeguard your finanzas.",
    },
    {
      title: "Introduction to Estate Planning",
      description:
        "Preparing for the distribution of your activos after death.",
      tagline: "Plan ahead, leave a legado.",
    },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Monedas y Dollars</h1>
        <p className="tagline">
          Empowering Financial Futures, One Moneda at a Time
        </p>
      </header>
      <div className="card-container">
        {cardsDeck.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            tagline={card.tagline}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
