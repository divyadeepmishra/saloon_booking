
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { LoginPage } from "./pages/auth/LoginPage"
import { SignupPage } from "./pages/auth/SignupPage"
import { AboutPage } from "./pages/customer/AboutPage"
import { CareersPage } from "./pages/customer/CareersPage"
import { ContactPage } from "./pages/customer/ContactPage"
import { CustomerDashboard } from "./pages/customer/CustomerDashboard"
import { LandingPage } from "./pages/customer/LandingPage"
import { PrivacyPolicyPage } from "./pages/customer/PrivacyPolicyPage"
import { ServicesPage } from "./pages/customer/ServicesPage"
import { TermsOfServicePage } from "./pages/customer/TermsOfServicePage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="auth/login" element={<LoginPage />} />
          <Route path="auth/signup" element={<SignupPage />} />
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsOfServicePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
