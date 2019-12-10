import React from "react";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="navigation__container">
      <div className="navigation__heading">
        <h5 data-testid="overview-heading">Overview</h5>
        <h1>General investing</h1>
      </div>
      <div className="navigation__links">
        <div className="navigation__linksPortfolio">
          <span data-testid="overview-link">Overview</span>
          <span>Assets</span>
          <span>Projection</span>
          <span>About portfolio</span>
        </div>
        <span>More actions</span>
      </div>
    </div>
  );
};
