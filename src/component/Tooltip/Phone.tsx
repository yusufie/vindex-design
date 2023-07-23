import Image from "next/image";
import style from "./tooltip.module.scss";

function Phone() {
  return (
    <div className={style.bank}>
      <div className={style.title}>
        <Image src="/image/verlith.png" alt="verlith" width={100} height={101} />
        <h1>Verlith</h1>
      </div>

      <div className={style.info}>
        <div className={style.topic}>
          <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
          <p>Utility: AI Powered Creator Economy</p>
        </div>

        <div className={style.topic}>
          <Image src="/icon/blue.svg" alt="line" width={32} height={32} />
          <p>2025</p>
        </div>
      </div>
    </div>
  );
}

export default Phone;
