import React, { Fragment } from "react";
import AboutDescription from "./about_description";
import SkillsContent from "./skills_content";

const Main = () => {
  return (
    <Fragment>
      <AboutDescription />
      <hr />
      <SkillsContent />
    </Fragment>
  );
};
export default Main;
