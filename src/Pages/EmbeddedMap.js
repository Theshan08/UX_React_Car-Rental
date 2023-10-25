import React from "react";

const EmbeddedMap = () => {
  return (
    <div className="embedded-map">
      <iframe
        title="Embedded Map"
        width="100%"
        height="400"
        frameBorder="0"
        src="YOUR_EMBEDDED_MAP_URL" // Replace with the URL you copied from Google Maps
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
