import Image from 'next/image'
import style from './noncbcd.module.scss'

function Noncbcd() {
  return (
    <section className={style.noncbcd}>

    <div className={style.image}>
      <Image src="/image/cbcd.png" alt="decentralize" width={500} height={500} />
    </div>

    <div className={style.info}>
      <h1>non-CBCD</h1>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p>non-CBDC is <span>the native currency of the ecosystem’s liquidity swaps.</span></p>
      </div>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p>non-CBDC aims to create an alternative to the endangering but imminent CBDCs (Central Bank Digital Currencies) by adapting free market environment into metaverse and  distributing the power of money to people.</p>
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

export default Noncbcd