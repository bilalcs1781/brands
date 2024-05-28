import React from "react";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Home/HeroSection";
import PopularCategories from "./Home/PopularCategories";
import FeaturedListings from "./Home/FeaturedListings";
import OurListed from "./Home/OurListed";
import Contact from "./Contact";
import Policy from "./Policy";
import Faqs from "./Faqs";
import Login from "./Login";
import SignUp from "./SignUp";
import ErrorPage from "./ErrorPage";
import BusinessDetails from "./BusinessDetails/BusinessDetails";
import BusinessList from "./BusinessDetails/BusinessList";
import { SignIn } from "./SignIn";

export default function MainComponent() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <HeroSection />
            <PopularCategories />
            <FeaturedListings />
            <OurListed />
          </>
        }
      />
      <Route path="contact" element={<Contact />} />
      <Route path="policy" element={<Policy />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="signin" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="business-details/:bussiness" element={<BusinessDetails />} />
      <Route path="businessList" element={<BusinessList />} />
      <Route path="error" element={<ErrorPage />} />
    </Routes>
  );
}
