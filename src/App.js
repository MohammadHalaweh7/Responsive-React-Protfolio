import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import WhatIDo from "./components/WhatIDo/WhatIDo";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <WhatIDo />
      <Resume />
    </div>
  );
}

export default App;
