import Image from "next/image"
import style from "./dao.module.scss"

function Dao() {
  return (
    <div className={style.dao}>
      
      <div className={style.header}>
        <h1>Claim VC-DAO</h1>
        <p>( countdown 30:23:59:59 )</p>
      </div>

      <div className={style.lock}>

        <div className={style.lockInfo}>
          <h1>Claim</h1>
          <span>1000</span>
          <p>Balance: 6000</p>
        </div>

        <div className={style.lockButton}>
          <button>
            <span>VC-DAO</span>
            <Image src="/icon/white.svg" alt="down" width={24} height={24} />
          </button>
        </div>

      </div>

      <button className={style.footerButton}>
        <span>Claim VC-DAO</span>
      </button>

    </div>
  )
}

export default Dao