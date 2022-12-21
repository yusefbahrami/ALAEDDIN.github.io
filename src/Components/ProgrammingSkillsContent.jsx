import React from "react";
import { Link } from "react-router-dom";
const SkillsContent = () => {
  return (
    <div className="skills-content" id="skills-content">
      <h2 className="programming-skill-title">Programming</h2>
      <div className="programming-skill-content">
        <div className="skill-description javascript">
          <Link to="#" className="skill-route">
            <div className="skill-description-title">
              <i class="devicon-javascript-plain icon"></i>
              <h3 className="skill-description-inner-title">Javascript</h3>
            </div>
            <div className="skill-description-text">
              <p className="skill-description-inner-text">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corporis illum cumque,
                dolorum voluptatum voluptatem culpa inventore, minima
                exercitationem provident quo error in laborum necessitatibus
                aliquam eos voluptatibus, eius aliquid obcaecati!adipisicing
                elit. Impedit, eligendi!
              </p>
            </div>
          </Link>
        </div>
        <div className="skill-description react">
          <Link to="#" className="skill-route">
            <div className="skill-description-title">
              <i className="devicon-react-original icon"></i>
              <h3 className="skill-description-inner-title">React js</h3>
            </div>
            <div className="skill-description-text">
              <p className="skill-description-inner-text">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corporis illum cumque,
                dolorum voluptatum voluptatem culpa inventore, minima
                exercitationem provident quo error in laborum necessitatibus
                aliquam eos voluptatibus, eius aliquid obcaecati!adipisicing
                elit. Impedit, eligendi!
              </p>
            </div>
          </Link>
        </div>
        <div className="skill-description typescript">
          <Link to="#" className="skill-route">
            <div className="skill-description-title">
              <i className="devicon-typescript-plain icon"></i>
              <h3 className="skill-description-inner-title">Typescript</h3>
            </div>
            <div className="skill-description-text">
              <p className="skill-description-inner-text">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corporis illum cumque,
                dolorum voluptatum voluptatem culpa inventore, minima
                exercitationem provident quo error in laborum necessitatibus
                aliquam eos voluptatibus, eius aliquid obcaecati!adipisicing
                elit. Impedit, eligendi!
              </p>
            </div>
          </Link>
        </div>
        <div className="skill-description Solidity">
          <Link to="#" className="skill-route">
            <div className="skill-description-title">
              <i className="devicon-typescript-plain icon"></i>
              <h3 className="skill-description-inner-title">Solidity</h3>
            </div>
            <div className="skill-description-text">
              <p className="skill-description-inner-text">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corporis illum cumque,
                dolorum voluptatum voluptatem culpa inventore, minima
                exercitationem provident quo error in laborum necessitatibus
                aliquam eos voluptatibus, eius aliquid obcaecati!adipisicing
                elit. Impedit, eligendi!
              </p>
            </div>
          </Link>
        </div>
        <div className="skill-description python">
          <Link to="#" className="skill-route">
            <div className="skill-description-title">
              <i className="devicon-python-plain  icon"></i>
              <h3 className="skill-description-inner-title">Python</h3>
            </div>
            <div className="skill-description-text">
              <p className="skill-description-inner-text">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corporis illum cumque,
                dolorum voluptatum voluptatem culpa inventore, minima
                exercitationem provident quo error in laborum necessitatibus
                aliquam eos voluptatibus, eius aliquid obcaecati!adipisicing
                elit. Impedit, eligendi!
              </p>
            </div>
          </Link>
        </div>

        <div className="skill-description C-sharp">
          <Link to="#" className="skill-route">
            <div className="skill-description-title">
              <i className="devicon-csharp-plain icon"></i>
              <h3 className="skill-description-inner-title">C#</h3>
            </div>
            <div className="skill-description-text">
              <p className="skill-description-inner-text">
                Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Corporis illum cumque,
                dolorum voluptatum voluptatem culpa inventore, minima
                exercitationem provident quo error in laborum necessitatibus
                aliquam eos voluptatibus, eius aliquid obcaecati!adipisicing
                elit. Impedit, eligendi!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SkillsContent;
