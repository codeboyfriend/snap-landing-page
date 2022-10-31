import SnapContext from "../context/GlobalContext";
import { useContext } from "react";
import arrow_up from "../assets/images/icon-arrow-up.svg";
import arrow_down from "../assets/images/icon-arrow-down.svg";
import todo from "../assets/images/icon-todo.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import calendar from "../assets/images/icon-calendar.svg";

const MobileNav = () => {
    const {
      features,
      setFeatures,
      company,
      setCompany, 
      menu 
    } = useContext(SnapContext)
  return menu ? (
    <div className="mobile_nav">
      <p className="extension link">
        Features
        <span className="arrow">
          <img 
            src={features ? arrow_up : arrow_down} 
            onClick={() => {
              setFeatures(!features)
              setCompany(false)
            }} 
            alt="" 
          />
        </span>
      </p>

      <div>
        {
          features ? 
            <div className="sub_links">
              <p>
                <span className="arrow">
                  <img src={todo} alt="" />
                </span>
                Todo List
              </p> 

              <p>
                <span className="arrow">
                  <img src={calendar} alt="" />
                </span>
                Calendar
              </p> 

              <p>
                <span className="arrow">
                  <img src={reminders} alt="" />
                </span>
                Reminders
              </p> 

              <p>
                <span className="arrow">
                  <img src={planning} alt="" />
                </span>
                Planning
              </p>    
            </div>
           : <></>
        }
      </div>

      <p className="extension link">
          Company
          <span className="arrow">
            <img 
              src={company ? arrow_up : arrow_down} 
              onClick={() => {
                setCompany(!company)
                setFeatures(false)
              }} 
              alt="" 
            />
          </span>
      </p>

      <div>
        {
          company ? 
            <div style={{
              paddingLeft: "1rem"
            }} className="sub_links">
              <p>
                History
              </p> 

              <p>
                Our Team
              </p> 

              <p>
                Blog
              </p>     
            </div>
           : <></>
        }
      </div>

      <p className="link">Careers</p>
      <p className="link">About</p>

      <div className="mobile_btn">
        <button className="btn btn_m">Login</button>
        <button className="btn btn_1">Register</button>
      </div>

      {/* <div className="reflection"></div> */}
    </div>
  ) : (
    <div></div>
  )
}

export default MobileNav
