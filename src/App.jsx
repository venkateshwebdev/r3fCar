import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Experience from "./Experience";
import Home from "./Home";
import { CarContext, ThemeContext } from "./Context";
import About from "./About";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState(0);
  const [car,setCar] = useState(1);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CarContext.Provider value={{car,setCar}}>
        <Home />
        <Experience />
        {theme&&<About />}
        {theme&&<Footer />}
      </CarContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
