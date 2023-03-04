import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Hero />
        <Tools />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
