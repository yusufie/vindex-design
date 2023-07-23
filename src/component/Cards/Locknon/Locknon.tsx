import Image from "next/image"
import style from "./locknon.module.scss"

function Locknon() {
  return (
    <div className={style.locknon}>

      <div className={style.header}>
        <h1>Lock non-CBDC</h1>
        <p>( 3 months 6% APR )</p>
      </div>

      <div className={style.lock}>

        <div className={style.lockInfo}>
          <h1>Lock</h1>
          <span>500</span>
          <p>Balance: 2707</p>
        </div>

        <div className={style.lockButton}>
          <button>
            <span>non-CBDC</span>
            <Image src="/icon/white.svg" alt="down" width={24} height={24} />
          </button>
        </div>

      </div>

      <button className={style.footerButton}>
        <span>Lock non-CBDC</span>
      </button>

    </div>
  )
}

export default Locknon