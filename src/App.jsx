import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Aboutus from "./components/Aboutus.jsx";
import ContactPage from "./components/ContactPage.jsx";
import SalesforceImplementation from "./components/ServiceDropdown/SalesforceImplementation.jsx";
import SalesCloudPage from "./components/ServiceDropdown/SalesCloudPage.jsx";
import ServiceCloudPage from "./components/ServiceDropdown/ServiceCloudPage.jsx";
import SalesforceCpq from "./components/ServiceDropdown/SalesforceCpq.jsx";
import MarketingCloudPage from "./components/ServiceDropdown/MarketingCloudPage.jsx";
import ExperienceCloudPage from "./components/ServiceDropdown/ExperienceCloudPage.jsx";
import CareerPortal from "./components/CareerPortal.jsx";
import SalesforceRevenueCloud from "./components/ServiceDropdown/SalesforceRevenueCloud.jsx";
import HealthCloudPage from "./components/ServiceDropdown/HealthCloudPage.jsx";
import ApplicationForm from "./components/ApplicationForm.jsx";
import SalesforceTour from "./components/SalesforceTour.jsx";
import SalesforceAdvisory from "./components/ServiceDropdown/SalesforceAdvisory.jsx";
import DataCloudPage from "./components/ServiceDropdown/DataCloudPage.jsx";
import AgentforcePage from "./components/ServiceDropdown/AgentforcePage.jsx";
import SalesforceTableauPage from "./components/ServiceDropdown/SalesforceTableauPage.jsx";
import MuleSoftIntegrationSection from "./components/ServiceDropdown/MuleSoftIntegrationSection.jsx";
import SecurityPolicyPage from "./components/Policy/SecurityPolicyPage.jsx";
import TermsAndConditions from "./components/Policy/TermsAndConditions.jsx";
import FeedbackWizard from "./components/Policy/FeedbackWizard.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route
            path="/salesforceimplementation"
            element={<SalesforceImplementation />}
          />
          <Route path="/salescloud" element={<SalesCloudPage />} />
          <Route path="/servicecloud" element={<ServiceCloudPage />} />
          {/* <Route path="/salesforcecloud" element={<SalesforceCloud />} /> */}
          <Route path="/revenuecloud" element={<SalesforceRevenueCloud />} />
          <Route path="/cpq" element={<SalesforceCpq />} />
          <Route path="/marketingcloud" element={<MarketingCloudPage />} />
          <Route path="/experiencecloud" element={<ExperienceCloudPage />} />
          <Route path="/career" element={<CareerPortal />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/exprencecloud" element={<ExperienceCloudPage />} />
          <Route path="/healthcloud" element={<HealthCloudPage />} />
          <Route path="/salesforcetour" element={<SalesforceTour />} />
          <Route path="/salesforceadvisory" element={<SalesforceAdvisory />} />
          <Route path="/datacloud" element={<DataCloudPage />} />
          <Route path="/agentforce" element={<AgentforcePage />} />
          <Route path="/tableau" element={<SalesforceTableauPage />} />
          <Route path="/mulesoft" element={<MuleSoftIntegrationSection />} />
          <Route path="/policy" element={<SecurityPolicyPage />} />
          <Route path="/Terms&Conditions" element={<TermsAndConditions />} />
          <Route path="/feedback" element={<FeedbackWizard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
