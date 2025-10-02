import React from "react";

const TechnologySolution = () => {
  return (
    <div className="TechnologySolution px-10 py-20 flex gap-10 bg-gray-50">
      <div className="left-content py-20 px-8 bg-[#221752] text-white">
        <h2 className="text-[40px] font-bold leading-[44px] my-10">
          Technology That Keeps Up With Your Business
        </h2>
        <p className="text-xl">
          Integrate powerful technology into your business and streamline your
          operations, as well as maximize efficiency and time to value for your
          customers and key stakeholders.
        </p>
      </div>
      {/* <div className="right-content h-full bg-red-500"> */}
      <div className="grid grid-cols-2 gap-6">
        <div className="rounded-lg shadow-md h-auto border p-5 bg-white hover:shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="icon flex-1">
              <img src="/image/Artificial-Data-Analytics-AI-2.svg" alt="icon" />
            </div>
            <h3 className="text-lg font-semibold">
              Artificial Intelligece, <br />
              Ananlytic
            </h3>
          </div>
          <p className="mt-4">
            Unlock a high degree of autonomy with AI while leveraging the power
            of big data to uncover the insights you need to make smarter
            decisions.
          </p>
        </div>
        <div className="rounded-lg shadow-md h-auto border p-5  bg-white hover:shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="icon flex-1">
              <img
                src="/image/salesforce.svg"
                alt="icons"
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-lg font-semibold">Salesforce</h3>
          </div>
          <p className="mt-4">
            Simplify CRM and change the way you engage with customers. We help
            you deploy and maximize the capabilities of Salesforce, allowing you
            to skyrocket your ROI.
          </p>
        </div>
        <div className="rounded-lg shadow-md h-auto border p-5  bg-white hover:shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="icon flex-1">
              <img
                src="/image/microsoft-dynamics-365.svg"
                alt="icon"
                className="w-20"
              />
            </div>
            <h3 className="text-lg font-semibold">Microsoft Dynamics 365</h3>
          </div>
          <p className="mt-4">
            Put everything you need to manage your operations, customer service
            delivery and finances in one place. Our solutions simplify data and
            workflow integration, keeping you efficient.
          </p>
        </div>
        <div className="rounded-lg shadow-md h-auto border p-5 bg-white hover:shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="icon flex-1">
              <img
                src="/image/product-engineering.svg"
                alt="icon"
                className="w-20"
              />
            </div>
            <h3 className="text-lg font-semibold">Product Engineering</h3>
          </div>
          <p className="mt-4">
            Build custom applications, automate your workflows and make big
            business moves. Our solutions were specially designed to help you
            work efficiently and capitalize on data.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TechnologySolution;
