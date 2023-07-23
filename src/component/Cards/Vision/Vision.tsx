import Image from "next/image";
import style from "./vision.module.scss";

function Vision() {
  return (
    <section className={style.cards}>
      
      <div className={style.container}>
        <div className={style.icon}>
          <Image src="/icon/dolar.svg" alt="dolar" width="64" height="64" />
        </div>
        <div className={style.info}>
          <h1>Back to True-Capitalism</h1>
          <p>
            Supporting profitable businesses is the only objective. Debt-driven
            business models will be ignored.
          </p>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.icon}>
          <Image src="/icon/globe.svg" alt="globe" width="64" height="64" />
        </div>
        <div className={style.info}>
          <h1>Global Access</h1>
          <p>
            Blockchain technology will be perceived as a utility tool to
            overcome geographical barriers.
          </p>
        </div>
      </div>

      <div className={style.container}>
        <div className={style.icon}>
          <Image src="/icon/zap.svg" alt="zap" width="64" height="64" />
        </div>
        <div className={style.info}>
          <h1>Vision & Audacity</h1>
          <p>
            The adaptation of free market rules to the nascent blockchain sector
            to eradicate con-projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vision;