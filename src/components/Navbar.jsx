import { useContext } from "react";
import SnapContext from "../context/GlobalContext";
import Logo from "../assets/images/logo.svg";
import arrow_up from "../assets/images/icon-arrow-up.svg";
import arrow_down from "../assets/images/icon-arrow-down.svg";
import open from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-close-menu.svg";

const Navbar = () => {
  const { 
    features,
    setFeatures,
    company,
    setCompany,
    menu,
    setMenu 
} = useContext(SnapContext)
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="mobile">
        <div className="links">
            <p className="extension link" onClick={() => setFeatures(!features)}>
                Features
                <span className="arrow">
                  <img src={features ? arrow_up : arrow_down} alt="" />
                </span>
            </p>
            <p className="extension link" onClick={() => setCompany(!company)}>
                Company
                <span className="arrow">
                  <img src={company ? arrow_up : arrow_down} alt="" />
                </span>
            </p>
            <p className="link">Careers</p>
            <p className="link">About</p>
        </div>

        <div className="buttons">
          <button className="btn">Login</button>
          <button className="btn btn_1">Register</button>
        </div>
      </div>

      <div className="menu">
        <img onClick={() => setMenu(!menu)} src={menu ? close : open} alt="" />
      </div>
    </div>
  )
}

export default Navbar
