import SnapContext from "../context/GlobalContext";
import { useContext } from "react";

const Shadow = () => {
    const {
        menu
    } = useContext(SnapContext)
  return menu ?
  (
    <div className='shadow'></div>
  ) :
  (
    <></>
  )
}

export default Shadow
