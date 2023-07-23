import Image from 'next/image'
import style from './tjotu.module.scss'

function Tjotu() {
  return (
    <section className={style.tjotu}>

    <div className={style.image}>
      <Image src="/image/tjotu.png" alt="tjotu" width={618} height={384} />
    </div>

    <div className={style.info}>
      <h1>TJOTU</h1>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p>TJOTU is <span>entrepreneurship and investment Web3 platform</span> that redefines collaboration, unlocks the full potential of the work environment in the business world, and fosters meaningful relationships to create profitable initiatives.</p>
      </div>

      <div className={style.button}>
        <button>
          <span>Project link etc</span>
        </button>
      </div>

    </div>

  </section>
  )
}

export default Tjotu