import Image from "next/image";
import style from "./tooltip.module.scss";

function Bank() {
  return (
    <div className={style.bank}>

      <div className={style.title}>
        <Image src="/image/cbcd.png" alt="cbcd" width={110} height={120} />
        <h1>Non-CBDC</h1>
      </div>

      <div className={style.info}>

        <div className={style.topic}>
          <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
          <p>Utility: Liquidity Swap</p>
        </div>

        <div className={style.topic}>
          <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
          <p>2023 (beta) | 2027 (fully-integrated)</p>
        </div>

      </div>
    </div>
  );
}

export default Bank;
