import Image from "next/image"
import style from "./join.module.scss"

function Join() {
  return (
    <div className={style.join}>

      <div className={style.joinPhotos}>
        
        <Image src="/image/unsplash-red.png" alt="profile" width={45} height={48} />
        <Image src="/image/unsplash-purple.png" alt="profile" width={24} height={24} />
        <Image src="/image/unsplash-white.png" alt="profile" width={32} height={32} />
        <Image src="/image/unsplash-hat.png" alt="profile" width={32} height={32} />
        <Image src="/image/unsplash-blue.png" alt="profile" width={55} height={60} />
        <Image src="/image/unsplash-brown.png" alt="profile" width={24} height={24} />
        <Image src="/image/unsplash-black.png" alt="profile" width={32} height={32} />

      </div>

      <div className={style.joinInvite}>

        <h1>Join Our Community</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Join Now</button>

      </div>

    </div>
  )
}

export default Join