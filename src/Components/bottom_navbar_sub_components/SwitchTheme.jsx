import React, { forwardRef, useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context/themeContext";

const SwitchTheme = (props) => {
  const { islight, setIsLight } = useContext(ThemeContext);

  return (
    <li className="nav-item">
      <Link>
        <i
          className={islight ? "uil uil-sun" : "uil uil-moon"}
          id="dark-light"
          onClick={() => props.handleSwitchTheme(islight)}
        ></i>
        <span>DARK-LIGHT</span>
      </Link>
    </li>
  );
};
export default forwardRef(SwitchTheme);
