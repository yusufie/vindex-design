import Allocation from "@/component/Cards/Allocation/Allocation"
import Join from "@/component/Cards/Join/Join"
import style from "./defileft.module.scss"

function Defileft() {
  return (
    <div className={style.defileft}>
        <Allocation />
        <Join />
    </div>
  )
}

export default Defileft