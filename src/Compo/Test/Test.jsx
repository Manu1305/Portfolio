import React, { useState } from "react";

function Test() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const userAgent = navigator.userAgent;
  let deviceName = "Unknown";

  if (/iPhone/.test(userAgent)) {
    deviceName = "iPhone";
  } else if (/Android/.test(userAgent)) {
    deviceName = "Android";
    // Extract the device model name from the User Agent string
    const match = userAgent.match(/Android\s([^\s;]+)/);
    if (match && match[1]) {
      deviceName = match[1];
    }
  }

  console.log(`Device Model Name: ${deviceName}`);

  const requestGeolocationAccess = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude: " + position.coords.latitude);
          console.log("Longitude: " + position.coords.longitude);
          setShowPopup(false);
        },
        (error) => {
          console.error("Error getting location: " + error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <button onClick={togglePopup}>Get My Location</button>
      {showPopup && (
        <div>
          <p>Click the button to allow access to your location.</p>
          <button onClick={requestGeolocationAccess}>Allow Access</button>
        </div>
      )}
      {deviceName && (
        <h1>{deviceName}deviceName</h1>
      )}
    </div>
  );
}

export default Test;
