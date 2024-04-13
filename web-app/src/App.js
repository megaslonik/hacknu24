import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import OfferPage from "./OfferPage/OfferPage";
import CardsPage from "./BankCardsPage/BankCardsPage";
import ProfilePage from "./ProfilePage/ProfilePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
    <div>
      {isLoggedIn && <Navbar />}
      <Switch>
      <Route path="/main" element={<OfferPage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/">
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
