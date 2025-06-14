import React, { useEffect } from "react";
import AdComponent from "./AdComponent";

function Advertisement({ position }) {
  useEffect(() => {
    // Load Google Ads script or refresh ads
  }, []);

  return (
    <div className={`ad-container ${position}`}>
      <AdComponent></AdComponent>
    </div>
  );
}

export default Advertisement;
