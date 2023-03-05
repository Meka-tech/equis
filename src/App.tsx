import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  AboutUs,
  CryptoInvestment,
  CurrentOpportunitiesRealEstate,
  FAQs,
  Home,
  InvestRealEstate,
  LearnMoreCryptoInvestment,
  LearnMoreRealState,
  Login,
  RegisteredPage,
  SignUp,
  TermsConditions
} from "./pages";
import { ScrollToTop } from "./utilities/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crypto-investment" element={<CryptoInvestment />} />
            <Route
              path="/learn-more-crypto-investment"
              element={<LearnMoreCryptoInvestment />}
            />
            <Route
              path="/learn-more-real-estate"
              element={<LearnMoreRealState />}
            />
            <Route
              path="/current-opportunities-real-estate"
              element={<CurrentOpportunitiesRealEstate />}
            />
            <Route path="/invest-real-estate" element={<InvestRealEstate />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/terms&conditions" element={<TermsConditions />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registered" element={<RegisteredPage />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
