import Image from "next/image"
import style from "./balance.module.scss"

function Balance() {
  return (
    <div className={style.balance}>
      
      <div className={style.head}>
        <Image src="/icon/pink.svg" alt="ellipse" width={8} height={8} />
        <Image src="/icon/yellow.svg" alt="ellipse" width={8} height={8} />
        <Image src="/icon/green.svg" alt="ellipse" width={8} height={8} />
      </div>
      
      <div className={style.balanceInfo}>
        <h1>Balance check : <span>SUFFICENT</span></h1>
      </div>

      <div className={style.progress}>
        <div className={style.progressInfo}></div>
      </div>

      <button>Buy & Lock non-CBDC</button>

      <p className={style.balanceInfo}>
        Please check if you are on the correct blockchain network with your non-CBDC holdings
      </p>
      
    </div>
  )
}

export default Balance