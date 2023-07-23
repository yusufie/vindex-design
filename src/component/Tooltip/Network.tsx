import Image from "next/image";
import style from "./tooltip.module.scss";

function Network() {
  return (
    <div className={style.bank}>

    <div className={style.title}>
      <Image src="/image/tjotu.png" alt="tjotu" width={110} height={120} />
      <h1>TJOTU</h1>
    </div>

    <div className={style.info}>

      <div className={style.topic}>
        <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
        <p>Utility: Investment Hub</p>
      </div>

      <div className={style.topic}>
        <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
        <p>2026</p>
      </div>

    </div>
  </div>
  )
}

export default Network