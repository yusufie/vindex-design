import Image from "next/image"
import style from "./unlocknon.module.scss"

function Unlocknon() {
  return (
    <div className={style.unlocknon}>
      
      <div className={style.header}>
        <h1>Unlock non-CBDC</h1>
        <p>( countdown 90:23:59:59 )</p>
      </div>

      <div className={style.unlock}>

        <div className={style.unlockInfo}>
          <h1>Unlock</h1>
          <span>500.1</span>
          <p>Balance: 2207</p>
        </div>

        <div className={style.unlockButton}>
          <button>
            <span>non-CBDC</span>
            <Image src="/icon/white.svg" alt="down" width={24} height={24} />
          </button>
        </div>

      </div>

      <button className={style.footerButton}>
        <span>Enter an Amount</span>
      </button>

    </div>
  )
}

export default Unlocknon