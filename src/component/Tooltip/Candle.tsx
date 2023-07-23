import Image from "next/image";
import style from "./tooltip.module.scss";

function Candle() {
  return (
    <div className={style.bank}>

    <div className={style.title}>
      <Image src="/image/tjotu.png" alt="tjotu" width={110} height={120} />
      <h1>TJOTU</h1>
    </div>

    <div className={style.info}>

      <div className={style.topic}>
        <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
        <p>Utility: Hackathon-Box </p>
      </div>

      <div className={style.topic}>
        <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
        <p>2023 (beta) | 2026 (fully-integrated)</p>
      </div>

    </div>
  </div>
  )
}

export default Candle