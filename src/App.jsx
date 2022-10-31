import { SnapProvider } from "./context/GlobalContext";
import "./css/style.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Shadow from "./components/Shadow";
import MobileNav from "./components/MobileNav";
import FeatureMenu from "./components/FeatureMenu";
import CompanyMenu from "./components/CompanyMenu";

function App() {
  return (
    <SnapProvider>
      <div className="container">
        <Navbar />
        <Landing />
        <Shadow />
        <FeatureMenu />
        <CompanyMenu />
        <MobileNav />
      </div>
    </SnapProvider>
  )
}

export default App
