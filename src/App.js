import "./App.css";
import React from "react";
import "./index.css";
import groupImage from "./images/Group 210.png";
import movilImage from "./images/movil.png";
import AthenaImage from "./images/Athena.png";
import bookstoreImage from "./images/bookstore.png";

function Header() {
  return (
    <div className="header">
      <header className="header">
        <img src={AthenaImage}></img>
      </header>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main">
      <h2 className="subtitle">
        Streamline your studies{" "}
        <span className="green-text">go digital with Athena</span>
      </h2>
      <p className="content">
        We give students a new way to study. Digitally. Find your e-coursebooks,
        documents, and past-exams all in one place. Cheaper than physical books.
        Smarter than physical books. Join Athena.
      </p>
      <div className="images-container">
        <img
          alt="Image description needed"
          src={groupImage}
          className="Dator"
        />
        <img src={movilImage} className="movil" />
      </div>
      <h5>
        <span className="green-text">Hey! </span> We are launching soon, join
        our waitlist and get earlybird discount!
      </h5>
      <SignupForm />
      <img
        src={bookstoreImage}
        alt="Additional image description needed"
        className="bookstore"
      />
      <h5>Are you a publisher wanting to sell your books through Athena?</h5>
      <PublisherButton />
    </div>
  );
}

function SignupForm() {
  return (
    <form className="email-form">
      <input
        type="email"
        placeholder="Your Email Address"
        className="email-input"
      />
      <button type="submit" className="yes-button">
        Yes Please!
      </button>
    </form>
  );
}

function PublisherButton() {
  return <button className="transparent-button">Click here</button>;
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>
            Get in contact with the team, send us an email at:{" "}
            <a href="mailto:hey@athena.se">hey@athena.se</a>
          </p>
        </div>
        <div className="footer-section find-us">
          <h3>Where to find us?</h3>
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Artillerigatan 27, Stockholm, Sweden</li>
          </ul>
        </div>
      </div>
      <div className="footer-branding">
        <img src={AthenaImage} alt="Athena logo" className="footer-logo" />
        <p>@Athena EdTech AB 2024</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
