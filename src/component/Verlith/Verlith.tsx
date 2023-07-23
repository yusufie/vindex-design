import Image from 'next/image'
import style from './verlith.module.scss'

function Verlith() {
  return (
    <section className={style.verlith}>

    <div className={style.info}>
      <h1>Verlith</h1>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={16} height={16} />
        <p>Verlith is <span>text-based content creation Web3 platform</span> that allows creators freedom to pursue their craft without being tied down by third-party interference, or censorship.</p>
      </div>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p>With the unique advertisement model, 80% of the generated revenue on the platform is distributed to creators of the revenue.</p>
      </div>

      <div className={style.button}>
        <button>
          <span>Project Link / Treelink etc.</span>
        </button>
      </div>

    </div>

    <div className={style.image}>
      <Image src="/image/verlith.png" alt="decentralize" width={572} height={375} />
    </div>

  </section>
  )
}

export default Verlith