import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function SecurityPolicyPage() {
  return (
    <>
      <Navbar />
      <div className="w-full h-full text-gray-900">
        {/* Banner Section */}
        <section className="relative w-full h-screen flex items-center justify-center text-white">
          {/* Fixed Background */}
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{
              backgroundImage: "url('/image/policyimg.jpg')",
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl px-6">
            {/* Breadcrumb */}
            <div className="text-sm uppercase tracking-wide text-gray-200 mb-4">
              WHO WE ARE <span className="mx-2">/</span>{" "}
              <span className="text-white">LEGAL</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">
              Univmaa’s Security Policy
            </h1>

            {/* Extra Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              At Univmaa, we are committed to protecting sensitive information,
              ensuring compliance, and maintaining the highest standards of
              cybersecurity. Our security framework safeguards data, systems,
              and operations, building trust with our clients worldwide.
            </p>
          </div>
        </section>

        {/* Scrollable Content */}
        <section className="relative bg-white text-gray-800 py-16 px-6 md:px-20 lg:px-40 leading-relaxed">
          <p>
            Univmaa is a Salesforce-based company specializing in delivering
            secure and scalable cloud solutions. We provide end-to-end
            Salesforce implementation services, helping businesses streamline
            operations and accelerate digital transformation. Our expertise
            spans across multiple Salesforce clouds including Sales Cloud,
            Service Cloud, Health Cloud, Automotive Cloud, and Experience Cloud.
            With a strong focus on Agentforce, we enable enterprises to leverage
            AI-driven automation for smarter customer engagement and business
            efficiency. We combine industry knowledge with Salesforce
            capabilities to deliver customized, future-ready solutions for every
            client. At Univmaa, our mission is to empower organizations with
            cloud innovations that drive growth, resilience, and long-term
            success.
          </p>

          <p className="mt-6">
            Our Security Vision is “To make Univmaa a trusted, resilient, and
            future-ready Salesforce-based cloud partner — immune to evolving
            challenges, cyber threats, system disruptions, and the volatile
            environment of constant changes — while ensuring security,
            reliability, and innovation for our clients.”
          </p>

          <p className="mt-6">
            This Security Policy reaffirms Univmaa’s commitment to safeguarding
            all information and digital assets entrusted to us. We ensure that
            every cloud solution, Salesforce implementation, and service we
            deliver operates within a secure, reliable, and compliant
            environment — creating a safe and efficient ecosystem for Univmaa,
            its customers, and partners.
          </p>

          <p className="mt-6">
            Univmaa will adopt a convergent security model designed to ensure:
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              Strong protection of information, digital assets, and Salesforce
              environments against unauthorized access, with comprehensive
              controls across physical, logical, and personnel security.
            </li>
            <li>
              Full compliance with legal, statutory, and regulatory requirements
              governing data privacy and security across global operations.
            </li>
            <li>
              Continuity of business operations through resilient cloud
              infrastructure and proactive risk management to meet stakeholder
              obligations.
            </li>
            <li>
              Clear definition and ownership of security responsibilities across
              departments and individuals to uphold this Policy.
            </li>
            <li>
              Ongoing security awareness and training programs to build
              competence among associates at every level.
            </li>
            <li>
              Secure and transparent channels for associates and stakeholders to
              report vulnerabilities, violations, or service disruptions.
            </li>
            <li>
              Continuous governance, monitoring, and improvement of security
              performance against defined objectives to stay ahead of emerging
              threats.
            </li>
            <li>
              A robust incident response framework to address and resolve
              security issues swiftly and effectively.
            </li>
          </ul>

          <p className="mt-6">
            This Policy will be reinforced through well-defined Standards,
            Procedures, and Guidelines (forming Univmaa’s Security Management
            System). It will be accessible to all stakeholders, who are expected
            to actively contribute to the effective implementation, monitoring,
            and continuous improvement of these security practices.
          </p>

          <p className="mt-6">
            The Security Management System will be periodically reviewed and
            updated to ensure its ongoing relevance, effectiveness, and
            alignment with Univmaa’s operations, evolving technologies, and the
            changing expectations of stakeholders.
          </p>

          <p className="mt-6">
            This Policy applies to Univmaa globally, including all its wholly
            owned subsidiaries across geographies, and extends to associates,
            business partners, and external parties with access to its
            infrastructure, IT systems, or information resources. Any violation
            or non-compliance with the objectives of this Policy will carry
            equal consequences for all Univmaa associates, subsidiaries, and
            external stakeholders, ensuring accountability and consistent
            enforcement worldwide.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
