import Image from 'next/image'
import style from './plaza.module.scss'

function Plaza() {
  return (
    <section className={style.plaza}>
      <h1>The Plaza System</h1>

    <div className={style.info}>

      <div className={style.topic}>
        <Image src="/icon/ellipse.svg" alt="line" width={32} height={32} />
        <p><span>Do you have a passion for creating?</span> Gather your team, leverage your skills to build your projects under the organization’s oversight, implement VindeX Capital DAO decision-making systems into your workflow to create high-quality platforms, and become participants in the ecosystem.</p>
      </div>

      <div className={style.button}>
        <button>
          <span>Build together</span>
        </button>
      </div>

    </div>

  </section>
  )
}

export default Plaza