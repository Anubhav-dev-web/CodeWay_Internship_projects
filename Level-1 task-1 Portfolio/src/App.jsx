import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero2,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div >
          <Navbar />
          <Hero2 />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
