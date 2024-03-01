import React, { createContext } from "react";
import { useState } from "react";
const ThemeContext = createContext();
const Pptexample = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
  function Button() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return <button onClick={toggleTheme}>Toggle Theme ({theme})</button>;
  }
  function App() {
    return (
      <Pptexample>
                <Button />

      </Pptexample>
      
    );
  }
};

export default Pptexample;
