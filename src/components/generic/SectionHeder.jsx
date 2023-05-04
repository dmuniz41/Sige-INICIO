import React from "react";

export const SectionHeder = ({ title, currentPath }) => {
  return (
    <div className="section_header">
      <h1>{title}</h1>
      <div className="breadcrumb">
        <span>Inicio / {currentPath}</span>
      </div>
    </div>
  );
};
