import { Bootstrap } from "./Stylings/Bootstrap";
import { CarouselComponent } from "./Stylings/CarouselComponent";
import { ExternalStyling } from "./Stylings/ExternalStyling";
import { Navbar1 } from "./Stylings/Navbar1";
import { ReactBootstrap } from "./Stylings/ReactBootstrap";

function App() {
  return (
    <>
    <Navbar1 />
    <CarouselComponent />
      <Bootstrap /><br />
      <ReactBootstrap />
      <ExternalStyling />
    </>
  );
}

export default App;
