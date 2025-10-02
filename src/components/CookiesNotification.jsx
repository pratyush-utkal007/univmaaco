import { useEffect, useState } from "react";

const CookiesNotification = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem("cookieConsent", choice);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 bg-white shadow-xl rounded-md p-5 w-80 border border-gray-300"
      role="dialog"
      aria-label="Cookie Consent Banner"
    >
      <h2 className="text-lg font-semibold mb-2">We value your privacy</h2>
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to enhance your browsing experience, serve personalised
        ads or content, and analyse our traffic. By clicking "Accept All", you
        consent to our use of cookies.
      </p>
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={() => handleConsent("customise")}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Customise
        </button>
        <button
          type="button"
          onClick={() => handleConsent("reject")}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Reject All
        </button>
        <button
          type="button"
          onClick={() => handleConsent("accept")}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookiesNotification;
