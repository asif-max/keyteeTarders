import About from "./components/About";
import Authorised from "./components/Authorised";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import Reviews from "./components/Reviews";


function App() {
  return (
    <div class="scroll-smooth absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  overflow-x-hidden">
      <Home />
      <div className="bg-gradient-to-b from-customGray to-customDark">
        <About />
        <Authorised/> 
        <Products/>
        <Reviews/>
        <Contact/>
      </div>
      
    </div>
  );
}

export default App;
