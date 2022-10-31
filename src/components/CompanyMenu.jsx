import { useContext } from "react";
import SnapContext from "../context/GlobalContext";

const CompanyMenu = () => {
    const {
        company
    } = useContext(SnapContext)

  return company ? (
    <div className="sub_menu company">
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
  ) :
  (
    <></>
  )
}

export default CompanyMenu
