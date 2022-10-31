import { useContext } from "react";
import SnapContext from "../context/GlobalContext";
import todo from "../assets/images/icon-todo.svg";
import reminders from "../assets/images/icon-reminders.svg";
import planning from "../assets/images/icon-planning.svg";
import calendar from "../assets/images/icon-calendar.svg";

const FeatureMenu = () => {
    const {
        features
    } = useContext(SnapContext)

  return features ? (
    <div className="sub_menu feature">
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
  ) :
  (
    <></>
  )
}

export default FeatureMenu
