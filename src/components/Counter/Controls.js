import React from 'react';
// винесли кусок розмітки з Counter.js (render)
// передамо два пропи onIncrement, onDecrement бо тут не діє this
const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);

export default Controls;