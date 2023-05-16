import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import WhatIDo from "./components/WhatIDo/WhatIDo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <WhatIDo />
    </div>
  );
}

export default App;
