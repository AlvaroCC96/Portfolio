import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Animated } from "react-animated-css";
import Jobs from "./components/Jobs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Animated
          animationIn="bounceInLeft"
          animationOut="fadeOut"
          isVisible={true}
        >
          <Hero />
          <Tools />
          <Jobs />
          <Contact />
          <Footer />
        </Animated>
      </main>
    </div>
  );
}

export default App;
