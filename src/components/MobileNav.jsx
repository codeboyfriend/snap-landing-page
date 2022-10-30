import { SnapContext } from "../context/GlobalContext";
import { useContext } from "react";

const MobileNav = () => {
    const { menu } = useContext(SnapContext)
  return menu ? (
    <h1>Testing Menu</h1>
  ) : (
    <div>fghfghdfgjkdfghjdfdgjkfdgkhfdughhb</div>
  )
}

export default MobileNav
