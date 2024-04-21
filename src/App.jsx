import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import AuthPage from "./pages/AuthPage";
import ConfirmPage from "./pages/ConfirmPage";
import NewPassPage from "./pages/NewPassPage";
import OtpPage from "./pages/OtpPage";
import PlantPage from "./pages/PlantPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileForm from "./pages/ProfileForm";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import LikedPlantPage from "./pages/LikedPlantPage";

import "./App.css";
import TestPage from "./pages/TestPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<AuthPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/new_pass" element={<NewPassPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/plant/:id" element={<PlantPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit_profile" element={<ProfileForm />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/like" element={<LikedPlantPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
