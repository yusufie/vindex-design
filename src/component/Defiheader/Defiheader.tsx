import Image from "next/image"
import Link from "next/link"
import style from "@/component/Defiheader/defiheader.module.scss"

function Defiheader() {
  return (
    <div className={style.defiheader}>

      <div className={style.headerLeft}>

        <Link href="/defi">
          <h1>XPro <span>early access</span></h1>
        </Link>

        <Link href="/defi">
          <Image src="/image/xcapital.png" alt="logo" width={100} height={100} />
        </Link>
        
      </div>

      <div className={style.headerRight}>
        <p>70.42 ETH</p>
        <span>0xBBB6...e96e</span>
        <button>
          <Image src="/icon/avatar.svg" alt="avatar" width={24} height={24} />
        </button>
      </div>

    </div>
  )
}

export default Defiheader