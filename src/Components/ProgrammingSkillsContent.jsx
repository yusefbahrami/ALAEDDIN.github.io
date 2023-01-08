import React from "react";
import JavascriptComponent from "./Programming_Skills_Components/Sub_Components/JavascriptComponent";
import ReactJSComponent from "./Programming_Skills_Components/Sub_Components/ReactJSComponent";
import TypescriptComponent from "./Programming_Skills_Components/Sub_Components/TypescriptComponent";
import SolidityComponent from "./Programming_Skills_Components/Sub_Components/SolidityComponent";
import PythonComponent from "./Programming_Skills_Components/Sub_Components/PythonComponent";
import ProgrammingTitle from "./Programming_Skills_Components/Sub_Components/ProgrammingTitle";
import CSharpComponent from "./Programming_Skills_Components/Sub_Components/CSharpComponent";
const SkillsContent = () => {
  return (
    <div className="skills-content" id="skills-content">
      <ProgrammingTitle />
      <div className="programming-skill-content">
        <JavascriptComponent />
        <ReactJSComponent />
        <TypescriptComponent />
        <SolidityComponent />
        <PythonComponent />
        <CSharpComponent />
      </div>
    </div>
  );
};
export default SkillsContent;
