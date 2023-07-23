import Image from "next/image";
import style from "./news.module.scss";

function Learnmore() {
  return (
    <div className={style.news}>

      <div className={style.header}>
        <h1>NEWS</h1>
      </div>

      <div className={style.content}>
        <Image src="/icon/blue.svg" alt="ellipse" width={16} height={16} />
        <p>.</p>
      </div>

      <div className={style.content}>
        <Image src="/icon/blue.svg" alt="ellipse" width={16} height={16} />
        <p>.</p>
      </div>

      <div className={style.footer}>
        <button>Learn More</button>
      </div>

    </div>
  );
}

export default Learnmore;
