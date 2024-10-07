import React, { useState } from "react";
import UserProfile from "./beqa";

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  const togglePopup = () => {
    setIsPopupVisible((prev) => !prev);
    if (isPopupVisible) {
      setPopupTitle("");
      setPopupMessage("");
    }
  };

  const handleTitleChange = (event) => {
    setPopupTitle(event.target.value);
  };

  const handleMessageChange = (event) => {
    setPopupMessage(event.target.value);
  };

  return (
    <div className="popup-component p-4">
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isPopupVisible ? "Hide Popup" : "Show Popup"}
      </button>

      {isPopupVisible && (
        <div className="popup bg-white shadow-lg rounded p-6 mt-4">
          <h2 className="text-xl font-bold mb-4">Popup Window</h2>
          <input
            type="text"
            value={popupTitle}
            onChange={handleTitleChange}
            placeholder="Enter popup title"
            className="border p-2 w-full mb-4"
          />
          <textarea
            value={popupMessage}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            className="border p-2 w-full mb-4"
          />
          <div className="mb-4">
            <h3 className="text-lg font-semibold">{popupTitle}</h3>
            <p>{popupMessage}</p>
          </div>
          <UserProfile />
          <button
            onClick={togglePopup}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
