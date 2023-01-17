import React, { useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import BottomNavbar from "./Components/BottomNavbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { ThemeContext } from "./Context/themeContext";
import "./Style/main_style.css";
import { UserTokenIdContext } from "./Context/UserTokenIdContext";

const App = () => {
  const [islight, setIsLight] = useState(localStorage.getItem("islight"));
  const UserTokenId = localStorage.getItem("UserTokenId");
  const mainDiv = useRef();

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ islight, setIsLight }}>
        <main className="main" id="main" ref={mainDiv}>
          <UserTokenIdContext.Provider value={{ UserTokenId }}>
            <Header />
            <Content />
            <Footer />
            <BottomNavbar ref={mainDiv} />
          </UserTokenIdContext.Provider>
        </main>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};
export default App;
