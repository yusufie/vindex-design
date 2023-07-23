import Image from 'next/image'
import style from './dynamics.module.scss'

function Dynamics() {
  return (
    <section className={style.dynamics}>

    <div className={style.image}>
      <Image src="/image/building.png" alt="decentralize" width={600} height={400} />
    </div>

    <div className={style.info}>
      <h1>Building Robust Dynamics</h1>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p>VindeX Capital aims to lobby for the regulation and reconstruction of the blockchain sector to <span>optimize functioning within western capitalist dynamics</span>, protect investors, and thereby eradicate any undermining effects.</p>
      </div>

      <div className={style.button}>
        <button>
          <span>Learn more</span>
        </button>
      </div>

    </div>

  </section>
  )
}

export default Dynamics