import React, { useState } from "react";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

export default function TermsAndConditions() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);

    if (newIndex !== null) {
      setTimeout(() => {
        document
          .getElementById(`accordion-item-${newIndex}`)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 400); // delay matches animation
    }
  };
  const termsData = [
    {
      title: "Your consent to our Privacy Policy",
      content: (
        <>
          By agreeing to these terms and conditions, you agree to the terms of
          our{" "}
          <button
            onClick={(e) => {
              navigate("/policy");
              window.scrollTo(0, 0); // navigate programmatically
            }}
            className="text-blue-600 underline"
          >
            Privacy Policy
          </button>
          . Before using this website, please carefully review our Privacy
          Notice. All Personal Information provided to us as a result of your
          use of this website will be handled in accordance with our Privacy
          Notice. If you do not agree, please exit this website.
        </>
      ),
    },
    {
      title: "Ownership of this website and its content",
      content: (
        <>
          The information provided on this website is free of charge and
          intended solely for informational purposes. It does not establish any
          business or professional services relationship between you and{" "}
          <strong>Univmaa Technology</strong>.
          <br />
          <br />
          This website, including all software and code used to operate it, as
          well as photographs, graphic images, audio, video, HTML code, buttons,
          text, and other materials available on the site (collectively referred
          to as <em>“Content”</em>), is protected under applicable intellectual
          property and proprietary laws of the United States and other
          countries. All Content and intellectual property rights therein are
          the property of <strong>Univmaa Technology</strong>, or have been
          included with the permission of the respective rights owners, and are
          safeguarded under relevant copyright and trademark laws.
          <br />
          <br />
          Nothing contained on this website shall be interpreted as conferring,
          by implication, estoppel, or otherwise, any license or right to any
          copyright, patent, trademark, or other proprietary interest of{" "}
          <strong>Univmaa Technology</strong> or any third party. Except as
          expressly provided herein, none of the Content may be used, copied,
          reproduced, distributed, republished, downloaded, modified, displayed,
          posted, or transmitted in any form or by any means — including but not
          limited to electronic, mechanical, photocopying, recording, or
          otherwise — without the prior written consent of{" "}
          <strong>Univmaa Technology</strong>.
          <br />
          <br />
          <strong>Univmaa Technology</strong> grants you limited permission to
          lawfully access and use this website and to display, download, or
          print portions of this website on a temporary basis for your personal,
          non-commercial use only, provided that:
          <ul className="list-disc pl-6 mt-2">
            <li>You do not modify the Content in any way;</li>
            <li>
              You retain all copyright and proprietary notices contained in the
              Content;
            </li>
            <li>
              You do not copy, upload, or post the Content on any network
              computer, nor broadcast it in any form of media.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Trademarks",
      content: (
        <>
          The names and logos of <strong>Univmaa Technology</strong> and its
          affiliates, all product names, page headers, custom graphics, button
          icons, and all trademarks, service marks, and logos appearing on this
          website, unless otherwise noted, are trademarks (whether registered or
          not), service marks, and/or trade dress of{" "}
          <strong>Univmaa Technology</strong> and its affiliates (collectively,
          the <em>“Marks”</em>).
          <br />
          <br />
          All other trademarks, product names, company names, logos, service
          marks, and/or trade dress mentioned, displayed, cited, or otherwise
          indicated on this website are the property of their respective owners.
          <br />
          <br />
          You are not authorized to display or use the Marks in any manner
          without the prior written permission of{" "}
          <strong>Univmaa Technology</strong>. You are also not authorized to
          display or use trademarks, product names, company names, logos,
          service marks, and/or trade dress of other owners featured on this
          website without the prior written consent of such owners.
          <br />
          <br />
          The use or misuse of the Marks or any other trademarks, product names,
          company names, logos, service marks, trade dress, or other materials
          contained on this website, except as expressly permitted herein, is
          strictly prohibited.
        </>
      ),
    },
    {
      title: "Disclaimer of Warranties",
      content: (
        <>
          Although <strong>Univmaa Technology</strong> strives to provide
          accurate and reliable content on this website, it makes no
          representation, endorsement, or warranty that such content is
          accurate, complete, or suitable for any particular purpose.
          <br />
          <br />
          This website and its content are provided on an <em>"as is"</em>{" "}
          basis. Use of the website and its content is at the user’s sole risk.
          The website and content are provided without any representations,
          endorsements, or warranties of any kind whatsoever, either express or
          implied, including but not limited to warranties of title, accuracy,
          merchantability, fitness for a particular purpose, or
          non-infringement, except for those warranties (if any) which cannot be
          expressly excluded under applicable law.
          <br />
          <br />
          Furthermore, <strong>Univmaa Technology</strong> makes no
          representations, endorsements, or warranties, either express or
          implied, with respect to any third-party websites that may be linked
          to or from this website.
        </>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <>
          In no event shall <strong>Univmaa Technology</strong> be liable for
          any damages, including but not limited to indirect, incidental,
          special, consequential, or punitive damages, whether arising under
          contract, tort, or any other legal theory of liability. This includes,
          without limitation, damages related to any failure of performance,
          error, omission, interruption, defect, delay in operation or
          transmission, computer virus, system failure, loss of data, or loss of
          use, in connection with this website or any third-party website linked
          to it.
          <br />
          <br />
          Such limitations apply even if <strong>Univmaa Technology</strong> has
          been advised of the possibility of such damages. Users acknowledge and
          agree that their sole remedy for dissatisfaction with the website or
          its content is to discontinue use of the site.
        </>
      ),
    },
    {
      title: "Links to Other Sites",
      content: (
        <>
          <strong>Univmaa Technology</strong> may provide links between this
          website and one or more websites operated by third parties. The
          existence of any such links does not constitute an endorsement,
          representation, or warranty by <strong>Univmaa Technology</strong> of
          those websites, their content, products, services, or their operators.
          <br />
          <br />
          <strong>Univmaa Technology</strong> does not investigate, monitor, or
          review such third-party websites for accuracy, completeness, or
          compliance with applicable laws and regulations. If you choose to
          leave this website and access third-party sites, you acknowledge that
          the rules, policies (including privacy policies), and operating
          procedures of those websites will apply to you while you are on them.
        </>
      ),
    },
    {
      title: "Modifications",
      content: (
        <>
          <strong>Univmaa Technology</strong> reserves the right to make
          modifications, changes, or alterations to the content of this website,
          including these terms and conditions, at any time and without prior
          notice.
          <br />
          <br />
          Users are responsible for regularly reviewing these terms and
          conditions to stay informed of any updates. Continued use of this
          website following any such modifications, changes, or alterations
          shall be deemed as acceptance of the revised terms.
        </>
      ),
    },
    {
      title: "Waiver",
      content: (
        <>
          No waiver by <strong>Univmaa Technology</strong> of any right, term,
          or provision under these terms and conditions shall be deemed a waiver
          of any other right, term, or provision at that time, nor shall it be
          considered a waiver of that or any other right, term, or provision at
          any future time.
          <br />
          <br />
          All rights and remedies of <strong>Univmaa Technology</strong> under
          these terms shall remain in full force and effect unless expressly
          waived in writing.
        </>
      ),
    },
    {
      title: "Law and Jurisdiction",
      content: (
        <>
          You agree that these terms of use and any legal action or proceeding
          relating to this website shall be governed by the laws of the
          jurisdiction in which <strong>Univmaa Technology</strong> operates,
          without reference to its conflict of law principles.
          <br />
          <br />
          You are responsible for complying with the laws of the jurisdiction
          from which you are accessing this website, and you agree not to access
          or use the information on this website in violation of such laws.
          <br />
          <br />
          Any information disclosed to <strong>Univmaa Technology</strong>{" "}
          outside a pre-existing and documented confidential business
          relationship will be deemed non-confidential and non-proprietary.
          Accordingly, <strong>Univmaa Technology</strong> may develop, use, and
          freely disclose or publish similar ideas without compensating you or
          providing accounting. You represent that you have the lawful right to
          submit such information and agree not to provide any information
          unless you are legally entitled to do so.
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          You may contact <strong>Univmaa Technology</strong> with any questions
          or inquiries regarding these terms and conditions by email at{" "}
          <a
            href="mailto:contact@univmaa.com"
            className="text-blue-600 underline"
          >
            Website Inquiry
          </a>
          .
        </>
      ),
    },
  ];
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <section className="relative w-full">
        <div
          className="relative flex items-center justify-start h-[360px] bg-cover bg-center pt-20"
          style={{
            backgroundImage: "url('/image/termsimg01.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-white/70"></div>
          <div className="relative z-10 px-10 md:px-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C5C] leading-snug">
              Univmaa Website Terms <br /> and Conditions
            </h2>
            <p className="text-base md:text-lg text-white bg-[#0B0C5C] px-3 py-1 mt-4 inline-block rounded">
              These terms and conditions were last updated in September, 2025.
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <div className="bg-white py-12 px-6 md:px-20">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0B0C5C] mb-6">
            Website Terms and Conditions — September, 2025
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
            Please read the following terms and conditions carefully. They
            govern your access and use of this website. By accessing, browsing,
            or using this website, you agree to be bound by these terms and
            conditions and accept them in full, as they may be modified by
            Univmaa Technology from time to time. If you do not agree with these
            terms, please discontinue the use of this website immediately.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="bg-white py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-[#0B0C5C] mb-6">
          About our Terms and Conditions
        </h2>

        <div className="rounded-lg overflow-hidden border border-gray-200 shadow">
          {termsData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`accordion-item-${index}`}
                className="border-b border-gray-200"
              >
                {/* Header */}
                <button
                  className={`w-full flex justify-between items-center px-4 py-3 font-semibold text-white text-left transition-colors ${
                    isOpen
                      ? "bg-[#0B0C5C]"
                      : "bg-gradient-to-r from-[#0B0C5C] to-blue-500"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <ChevronDown
                    className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 scale-125" : ""
                    }`}
                  />
                </button>

                {/* Animated Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 py-3 bg-white text-gray-700 text-base">
                    {item.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
