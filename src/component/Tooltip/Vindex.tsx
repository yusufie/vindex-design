import Image from "next/image";
import style from "./tooltip.module.scss";

function Vindex() {
  return (
    <div className={style.bank}>

    <div className={style.title}>
      <Image src="/image/x.png" alt="x" width={110} height={120} />
      <h1>VindeX Capital</h1>
    </div>

    <div className={style.info}>

      <div className={style.topic}>
        <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
        <p>Utility: Ecosystem DAO</p>
      </div>

      <div className={style.topic}>
        <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
        <p>2023 (beta) | 2027 (fully-integrated)</p>
      </div>

    </div>
  </div>
  )
}

export default Vindex