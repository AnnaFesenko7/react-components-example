import s from './ColorPicker.module.css';
import React, { useState } from 'react';
import options from './ColorPickerOptions.json';

const ColorPicker = () => {
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  console.log(activeOptionIndex);

  const setActiveIndex = index => {
    setActiveOptionIndex(index);
  };

  const { label } = options[activeOptionIndex];
  return (
    <div className={s.ColorPicker}>
      <h1 className={s.ColorPickerTitle}>ColorPicker</h1>
      <p>Выбран цвет:{label}</p>
      <div>
        {options.map((option, index) => {
          return (
            <span
              key={option.color}
              style={{ backgroundColor: option.color }}
              className={
                index === activeOptionIndex
                  ? s.ColorPickerActive
                  : s.ColorPickerOption
              }
              onClick={() => {
                setActiveIndex(index);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
