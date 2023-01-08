import React from "react";
import { NavLink } from "react-router-dom";

const JavascriptComponent = () => {
  return (
    <div className="skill-description javascript">
      <NavLink to="#" className="skill-route">
        <div className="skill-description-title">
          <i className="devicon-javascript-plain icon"></i>
          <h3 className="skill-description-inner-title">Javascript</h3>
        </div>
        <div className="skill-description-text">
          <p className="skill-description-inner-text">
            Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis illum cumque, dolorum
            voluptatum voluptatem culpa inventore, minima exercitationem
            provident quo error in laborum necessitatibus aliquam eos
            voluptatibus, eius aliquid obcaecati!adipisicing elit. Impedit,
            eligendi!
          </p>
        </div>
      </NavLink>
    </div>
  );
};
export default JavascriptComponent;
