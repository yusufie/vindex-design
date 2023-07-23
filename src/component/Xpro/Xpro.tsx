import Image from 'next/image'
import style from './xpro.module.scss'

function Xpro() {
  return (
    <section className={style.xpro}>

    <div className={style.info}>
      <h1>VindeX-Pro</h1>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p>VindeX-Pro is <span>metaverse stock & bond market</span> that aims to create a financial environment where value is projected based on productivity instead of speculation, suppress excessive risk-taking behavior in the financial industry, and bolster the free-market environment against controlled capitalism.</p>
      </div>

      <div className={style.button}>
        <button>
          <span>Learn more</span>
        </button>
      </div>

    </div>

    <div className={style.image}>
      <Image src="/image/vindexpro.png" alt="vindexpro" width={672} height={463} />
    </div>

  </section>
  )
}

export default Xpro