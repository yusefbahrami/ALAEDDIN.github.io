import React, { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import BottomNavbar from "./Components/bottom_navbar";
import Content from "./Components/content";
import Footer from "./Components/footer";
import Header from "./Components/header";
import { ThemeContext } from "./Context/themeContext";
import "./Style/main_style.css";

const App = () => {
  const [islight, setIsLight] = useState(false);
  const mainDiv = useRef();

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ islight, setIsLight }}>
        <main className="main" id="main" ref={mainDiv}>
          <span id="top"></span>
          <Header />
          <Content />
          <Footer />
          <BottomNavbar ref={mainDiv} />
        </main>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
