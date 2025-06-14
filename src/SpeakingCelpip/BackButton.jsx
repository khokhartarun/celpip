import React from 'react';

const BackButton = ({ onBack , title}) => {
  return (
    <a href="#" onClick={(e) => { 
      e.preventDefault(); 
      onBack(); 
    }} 
    style={{ marginBottom: '1rem', display: 'inline-block' }}>
      {title}
    </a>
  );
};

export default BackButton;
