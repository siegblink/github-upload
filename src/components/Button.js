import React from 'react';

const Button = () => {
  // create an array of 20 numbers
  let index = [];
  for (let i = 0; i < 20; i++) {
    index = index.concat(i);
  }

  // cycle through the created array to create 20 buttons
  const buttonSeries = index.map(n => {
    return (
      <button
        key={n}
        id={`button-${n + 1}`}
        onClick={() => displayAlert(n + 1)}
      >
        Button #{n + 1}
      </button>
    );
  });
  return buttonSeries;
};

const displayAlert = id => {
  alert(id);
};

export default Button;
