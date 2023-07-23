import Image from "next/image"
import style from "./check.module.scss"

function Check() {
  return (
    <div className={style.check}>

      <div className={style.head}>
        <Image src="/icon/pink.svg" alt="ellipse" width={8} height={8} />
        <Image src="/icon/yellow.svg" alt="ellipse" width={8} height={8} />
        <Image src="/icon/green.svg" alt="ellipse" width={8} height={8} />
      </div>

      <div className={style.checkInfo}>
        <h1>Status check : <span>NOT ELIGIBLE</span></h1>
      </div>

      <div className={style.progress}>
        <div className={style.progressInfo}></div>
      </div>

      <button>Buy & Lock non-CBDC</button>

      <p className={style.checkInfo}>
        Please check if you are on the correct blockchain network with your non-CBDC holdings
      </p>

    </div>
  )
}

export default Check