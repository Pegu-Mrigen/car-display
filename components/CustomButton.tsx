"use client";
import { CustomButton } from "@/types";
import React from "react";

const CustomButton = ({title, containerStyles,handleClick, btnType}:CustomButton) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
