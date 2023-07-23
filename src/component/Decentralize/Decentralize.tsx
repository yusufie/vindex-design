import Image from 'next/image'
import style from './decentralize.module.scss'

function Decentralize() {
  return (
    <section className={style.decentralize}>

      <div className={style.info}>
        <h1>Decentralized Autonomous Organization</h1>

        <div className={style.topic}>
          <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
          <p>VindeX Capital is the <span>Financial DAO</span> (Decentralized Autonomous Organization) aims facilitate the adaptation of business dynamics and culture into metaverse.</p>
        </div>

        <div className={style.topic}>
          <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
          <p>The primary focus is to build a <span>self-efficient ecosystem</span> aligned with regulations.</p>
        </div>

        <div className={style.button}>
          <button>
            <span>Buy VC-DAO share</span>
          </button>
        </div>

      </div>

      <div className={style.image}>
        <Image src="/image/decentralize.png" alt="decentralize" width={700} height={500} />
      </div>

    </section>
  )
}

export default Decentralize