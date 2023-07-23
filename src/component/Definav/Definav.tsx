"use client"
import Link from 'next/link'
import Image from 'next/image'
import style from "./definav.module.scss"

import { usePathname } from "next/navigation";

function Definav() {

  const pathname = usePathname();

  return (
    <nav className={style.definav}>

      <Link href="/defi">
        <button className={`${pathname === "/defi" ? style.active : "" }`}>
          <Image src="/icon/dashboard.svg" alt="dashboard" width={24} height={24} />
          IDO Launchpad
        </button>
      </Link>
      <hr />

      <Link href="/defi/status">
        <button className={`${pathname === "/defi/status" ? style.active : "" }`}>
          <Image src="/icon/donate.svg" alt="donate" width={24} height={24} />
          Status Check
        </button>
      </Link>
      
      <Link href="/defi/noncbdc">
        <button className={`${pathname === "/defi/noncbdc" ? style.active : "" }`}>
          <Image src="/icon/donate.svg" alt="donate" width={24} height={24} />
          Lock non-CBDC
        </button>
      </Link>

      <Link href="/defi/claim">
        <button className={`${pathname === "/defi/claim" ? style.active : "" }`}>
          <Image src="/icon/donate.svg" alt="donate" width={24} height={24} />
          Claim
        </button>
      </Link>

      <Link href="/defi/buysell">
        <button className={`${pathname === "/defi/buysell" ? style.active : "" }`}>
          <Image src="/icon/trade.svg" alt="trade" width={24} height={24} />
          <span>Buy & Sell</span>
        </button>
      </Link>

      <Link href="/defi/metaversesm">
        <button className={`${pathname === "/defi/metaversesm" ? style.active : "" }`}>
          <Image src="/icon/setting.svg" alt="setting" width={24} height={24} />
          <span>Metaverse-SM</span>
        </button>
      </Link>

      <Link href="/defi/metaversebm">
        <button className={`${pathname === "/defi/metaversebm" ? style.active : "" }`}>
          <Image src="/icon/cube.svg" alt="cube" width={24} height={24} />
          <span>Metaverse-BM</span>
        </button>
      </Link>

      <Link href="/defi/portfolio">
        <button className={`${pathname === "/defi/portfolio" ? style.active : "" }`}>
          <Image src="/icon/cube.svg" alt="cube" width={24} height={24} />
          <span>Portfolio</span>
        </button>
      </Link>

      <Link href="/defi/hackathon">
        <button className={`${pathname === "/defi/hackathon" ? style.active : "" }`}>
          <Image src="/icon/cube.svg" alt="cube" width={24} height={24} />
          <span>Hackathon-box</span>
        </button>
      </Link>

      <Link href="/defi/news">
        <button className={`${pathname === "/defi/news" ? style.active : "" }`}>

          <div className={style.notificationCircle}>
            <span className={style.notificationNumber}>1</span>
          </div>
          <Image src="/icon/notification.svg" alt="notification" width={24} height={24} className={style.notificationIcon} />
          News

        </button>
      </Link>

    </nav>
  )
}

export default Definav