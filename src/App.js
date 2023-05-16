import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Interested from "./components/Interested/Interested";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <WhatIDo />
      <Resume />
      <Portfolio />
      <Interested />
    </div>
  );
}

export default App;
