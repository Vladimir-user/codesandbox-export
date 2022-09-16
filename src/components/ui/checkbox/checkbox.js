import React from "react";

export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <input
      type="checkbox"
      id={`checkbox-${index}`}
      checked={isChecked}
      onChange={checkHandler}
    />
  );
};
