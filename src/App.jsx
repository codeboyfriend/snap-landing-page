import { SnapProvider } from "./context/GlobalContext";
import "./css/style.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <SnapProvider>
      <div className="container">
        <Navbar />
        <Landing />
        <MobileNav />
      </div>
    </SnapProvider>
  )
}

export default App
