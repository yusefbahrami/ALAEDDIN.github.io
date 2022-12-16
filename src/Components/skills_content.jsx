import React from "react";
import { Link } from "react-router-dom";
const SkillsContent = () => {
  return (
    <div className="skills-content" id="skills-content">
      <div className="skill-description javascript">
        <Link href="#" className="skill-route">
          <div className="skill-description-title">
            {/* <i class="uil uil-java-script icon"></i> */}
            <i class="devicon-nodejs-plain icon"></i>
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
        </Link>
      </div>
      <div className="skill-description typescript">
        <Link href="#" className="skill-route">
          <div className="skill-description-title">
            {/* <i class="uil uil-java-script icon"></i> */}
            <i class="devicon-typescript-plain icon"></i>
            <h3 className="skill-description-inner-title">Typescript</h3>
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
        </Link>
      </div>
      <div className="skill-description react">
        <Link href="#" className="skill-route">
          <div className="skill-description-title">
            {/* <i className="uil uil-heart icon"></i> */}
            <i class="devicon-react-original icon"></i>
            <h3 className="skill-description-inner-title">React js</h3>
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
        </Link>
      </div>
      <div className="skill-description python">
        <Link href="#" className="skill-route">
          <div className="skill-description-title">
            <i class="devicon-python-plain  icon"></i>
            <h3 className="skill-description-inner-title">Python</h3>
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
        </Link>
      </div>

      <div className="skill-description photoshop">
        <Link href="#" className="skill-route">
          <div className="skill-description-title">
            <i class="devicon-photoshop-line icon"></i>
            <h3 className="skill-description-inner-title">Photoshop</h3>
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
        </Link>
      </div>
    </div>
  );
};
export default SkillsContent;
