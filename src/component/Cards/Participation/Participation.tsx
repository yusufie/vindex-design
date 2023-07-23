import Image from "next/image"
import style from "./participation.module.scss"

function Participation() {
  return (
    <div className={style.participation}>

      <div className={style.header}>
        <h1>IDO Participation</h1>
        <Image src="/icon/close.svg" alt="close" width={24} height={24} />
      </div>

      <div className={style.swap}>

        <div className={style.from}>

          <div className={style.fromInfo}>
            <h1>Swap from</h1>
            <span>0</span>
            <p>Balance: 70.42</p>
          </div>

          <div className={style.fromCoin}>
            <Image src="/icon/eth.svg" alt="eth" width={40} height={40} />
            <span>ETH</span>
            <Image src="/icon/arrow-down.svg" alt="down" width={24} height={24} />
          </div>

        </div>

        <div className={style.between}>
          <button></button>
        </div>

        <div className={style.to}>

          <div className={style.toInfo}>
            <h1>Swap to</h1>
            <span>0</span>
            <p>Balance: -</p>
          </div>

          <div className={style.toButton}>
            <button>
              <span>VC-DAO</span>
              <Image src="/icon/white.svg" alt="down" width={24} height={24} />
            </button>
          </div>

        </div>

        <button className={style.amount}>
          <span>Enter an Amount</span>
        </button>

      </div>

    </div>
  )
}

export default Participation