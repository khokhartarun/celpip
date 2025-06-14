import React from 'react';

const BackLink = ({ onBack, title }) => {
  return (
    <a href="#" onClick={(e) => { 
      e.preventDefault(); 
      onBack(); 
    }} className="back-link">
      {title}
    </a>
  );
};

export default BackLink;
