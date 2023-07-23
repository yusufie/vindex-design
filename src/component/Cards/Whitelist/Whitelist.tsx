import Image from "next/image"
import style from "./whitelist.module.scss"

function Whitelist() {
  return (
    <div className={style.whitelist}>

      <div className={style.header}>
        <h1>How to Get Whitelisted</h1>
      </div>

      <div className={style.content}>
        <Image src="/icon/blue.svg" alt="ellipse" width={16} height={16} />
      <p>Your wallet address must hold a minimum of <span>100 non-CBDC,</span> remain locked for the specified period.</p>
      </div>

      <div className={style.content}>
        <Image src="/icon/blue.svg" alt="ellipse" width={16} height={16} />
        <p>Please ensure that you are <span>on the same blockchain network with your non-CBDC holdings</span>to proceed with the IDO participation.</p>
      </div>

      <div className={style.footer}>
        <button>Buy non-CBDC</button>
        <button>Lock non-CBDC</button>
      </div>

    </div>
  )
}

export default Whitelist