import Image from 'next/image'
import style from './capital.module.scss'

import Bank from '../Tooltip/Bank'
import Heart from '../Tooltip/Heart'
import Phone from '../Tooltip/Phone'
import Candle from '../Tooltip/Candle'
import Network from '../Tooltip/Network'
import Group from '../Tooltip/Group'

function Capital() {

  return (
    <section className={style.capital}>

        <div className={style.xcapital}>
          <Image src="/image/xcapital.png" alt="xcapital" width={400} height={400} />
        </div>

      <div className={style.circle}>

        <div className={style.iconContainer}>
          <div className={style.icon} >
            <Image src="/icon/bank.svg" alt="bank" width={32} height={32} />
          </div>
          <div className={style.container}>
            <Bank />
          </div>
        </div>

        <div className={style.iconContainer}>
          <div className={style.icon}>
          <Image src="/icon/heart.svg" alt="heart" width={32} height={32} />
          </div>    
          <div className={style.container}>
            <Heart />
          </div>
        </div>    

        <div className={style.iconContainer}>
          <div className={style.icon}>
          <Image src="/icon/phone.svg" alt="phone" width={32} height={32} />
          </div>
          <div className={style.container}>
            <Phone />
          </div>
        </div>

        <div className={style.iconContainer}>
          <div className={style.icon}>
          <Image src="/icon/candle.svg" alt="candle" width={32} height={32} />
          </div>
          <div className={style.container}>
            <Candle />
          </div>
        </div>

        <div className={style.iconContainer}>
          <div className={style.icon}>
          <Image src="/icon/network.svg" alt="network" width={32} height={32} />
          </div>
          <div className={style.container}>
            <Network />
          </div>
        </div>

        <div className={style.iconContainer}>
          <div className={style.icon}>
          <Image src="/icon/group.svg" alt="group" width={32} height={32} />
          </div>
          <div className={style.container}>
            <Group />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Capital