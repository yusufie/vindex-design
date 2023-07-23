import Image from "next/image";
import style from "./allocation.module.scss";

function Allocation() {
  return (
    <section className={style.allocation}>
      <div className={style.services}>

        <div className={style.servicesTitle}>
          <h1>Allocation</h1>
        </div>

        <div className={style.platform}>

          <div className={style.platformHead}>  
            <Image src="/image/x.png" alt="" width={32} height={32} />
            <h2>VC-DAO</h2>
          </div>

          <div className={style.progress}>
            <div className={style.progressInfo}></div>
          </div>

        </div>

        <div className={style.platform}>

          <div className={style.platformHead}>      
            <Image src="/image/verlith.png" alt="" width={32} height={32} />
            <h2>Verlith</h2>
          </div>

          <div className={style.progress}>
            <div className={style.progressInfo}></div>
          </div>

        </div>

        <div className={style.platform}>

          <div className={style.platformHead}>      
            <Image src="/image/cbcd.png" alt="" width={32} height={32} />
            <h2>Non-CBCD</h2>
          </div>

          <div className={style.progress}>
            <div className={style.progressInfo}></div>
          </div>

        </div>

        <div className={style.platform}>

          <div className={style.platformHead}>      
            <Image src="/image/tjotu.png" alt="" width={32} height={32} />
            <h2>Tjotu</h2>
          </div>

          <div className={style.progress}>
            <div className={style.progressInfo}></div>
          </div>

        </div>

        <div className={style.platform}>

          <div className={style.platformHead}>      
            <Image src="/image/xpro.png" alt="" width={32} height={32} />
            <h2>VindeX Pro</h2>
          </div>

          <div className={style.progress}>
            <div className={style.progressInfo}></div>
          </div>

        </div>

        <div className={style.platform}>

          <div className={style.platformHead}>      
            <Image src="/image/decentralize.png" alt="" width={32} height={32} />
            <h2>Decentralize</h2>
          </div>

          <div className={style.progress}>
            <div className={style.progressInfo}></div>
          </div>

        </div>


      </div>
    </section>
  );
}

export default Allocation;
