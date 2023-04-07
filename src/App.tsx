import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  AboutUs,
  CryptoInvestment,
  CurrentOpportunitiesCryptoInvestment,
  CurrentOpportunitiesRealEstate,
  FAQs,
  Home,
  Investments,
  InvestRealEstate,
  LearnMoreCryptoInvestment,
  LearnMoreRealState,
  Login,
  RegisteredPage,
  SignUp,
  TermsConditions,
  Verify
} from "./pages";
import {
  DashboardHome,
  DashboardProfile,
  Logout,
  DashboardWithdraw,
  DashboardDeposit
} from "./pages/dashboard";
import { ScrollToTop } from "./utilities/ScrollToTop";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto-investment" element={<CryptoInvestment />} />
          <Route
            path="/learn-more-crypto-investment"
            element={<LearnMoreCryptoInvestment />}
          />
          <Route
            path="/current-opportunities-crypto-investment"
            element={<CurrentOpportunitiesCryptoInvestment />}
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
          <Route path="/investments" element={<Investments />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms&conditions" element={<TermsConditions />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registered" element={<RegisteredPage />} />
          <Route path="/dashboard-home" element={<DashboardHome />} />
          <Route path="/dashboard-profile" element={<DashboardProfile />} />
          <Route path="/dashboard-withdraw" element={<DashboardWithdraw />} />
          <Route path="/dashboard-deposit" element={<DashboardDeposit />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
