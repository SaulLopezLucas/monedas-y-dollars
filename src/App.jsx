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
      icon: "bi-wallet",
      link: "https://www.youtube.com/watch?v=sVKQn2I4HDM",
    },
    {
      title: "Introduction to Saving",
      description: "Setting aside dinero for future needs or emergencies",
      tagline: "Every penny saved is a step toward your sueños.",
      icon: "bi-piggy-bank",
      link: "https://www.youtube.com/watch?v=ms1nTeFO7ps",
    },
    {
      title: "Introduction to Debt Management",
      description: "Strategies to pay down deudas and avoid new ones.",
      tagline: "Take charge of your debt, reclaim your futuro.",
      icon: "bi-bank",
      link: "https://www.youtube.com/watch?v=PvEUj_mRfIo",
    },
    {
      title: "Introduction to Investing",
      description:
        "Using money to buy activos with the expectation of returns.",
      tagline: "Invest today for a prosperous mañana.",
      icon: "bi-bar-chart",
      link: "https://www.youtube.com/watch?v=y72iyLPOv8E",
    },
    {
      title: "Introduction to Credit",
      description:
        "The ability to borrow dinero and understanding puntajes de crédito.",
      tagline: "Build your credit, build your futuro.",
      icon: "bi-credit-card",
      link: "https://www.youtube.com/watch?v=ozbGWLtZdoY",
    },
    {
      title: "Introduction to Retirement Planning",
      description: "Preparing financially for your años dorados.",
      tagline: "Secure your golden years hoy.",
      icon: "bi-brightness-alt-high",
      link: "https://www.youtube.com/watch?v=KA66Wcp1QEc",
    },
    {
      title: "Introduction to Taxes",
      description:
        "Understanding how ingresos is taxed and filing requirements.",
      tagline: "Be tax-savvy, keep more of your dinero.",
      icon: "bi-paperclip",
      link: "https://www.youtube.com/watch?v=6cRg9bnSnvg",
    },
    {
      title: "Introduction to Insurance",
      description: "Protecting yourself and activos from unexpected results.",
      tagline: "Protect what matters most to you.",
      icon: "bi-clipboard-heart",
      link: "https://www.youtube.com/watch?v=Gx0kHOibwHA",
    },
    {
      title: "Introduction to Financial Scams",
      description: "Recognizing and avoiding various types of fraudes.",
      tagline: "Stay vigilant, safeguard your finanzas.",
      icon: "bi-binoculars",
      link: "https://www.youtube.com/watch?v=7i6mPvBv488",
    },
    {
      title: "Introduction to Estate Planning",
      description:
        "Preparing for the distribution of your activos after death.",
      tagline: "Plan ahead, leave a legado.",
      icon: "bi-clock",
      link: "https://www.youtube.com/watch?v=cMoaGEpffds",
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
            icon = {card.icon}
            link = {card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
