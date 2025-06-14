import React from 'react';

const Task6Options = ({ options }) => {
  return (
    <div className="task6-options">
      <h5>Choose ONE:</h5>
      <ul className="bullet-list">
        {options.map((option, index) => (
          <li key={index} className="task6-option-item">
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task6Options;
