import Image from "next/image"
import style from "./countdown.module.scss"

function Countdown() {

  return (

    <div className={style.countdown}>

      <div className={style.head}>
        <Image src="/icon/pink.svg" alt="ellipse" width={8} height={8} />
        <Image src="/icon/yellow.svg" alt="ellipse" width={8} height={8} />
        <Image src="/icon/green.svg" alt="ellipse" width={8} height={8} />
      </div>

      <div className={style.countdownInfo}>
        <h1>Countdown (time) 07:24:60</h1>
        <div className={style.progress}>
          <div className={style.progressInfo}>
            71%
          </div>
        </div>
        <p>Progress Bar</p>
      </div>

    </div>
    
  )
}

export default Countdown