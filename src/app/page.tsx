import Navbar from "@/component/Navbar/Navbar"
import Hero from "@/component/Hero/Hero"
import Vision from "@/component/Cards/Vision/Vision"
import Decentralize from "@/component/Decentralize/Decentralize"
import Dynamics from "@/component/Dynamics/Dynamics"
import Capital from "@/component/Capital/Capital"
import Verlith from "@/component/Verlith/Verlith"
import Noncbcd from "@/component/Noncbcd/Noncbcd"
import Xpro from "@/component/Xpro/Xpro"
import Tjotu from "@/component/Tjotu/Tjotu"
import Plaza from "@/component/Plaza/Plaza"
import Footer from "@/component/Footer/Footer"

import "./globals.scss"
import "./page.scss"

export default function Home() {
  return (
    <main className="">

      <Navbar />
      <Hero />
      <Vision />
      <Decentralize />
      <Dynamics />
      <Capital />
      <Verlith />
      <Noncbcd />
      <Xpro />
      <Tjotu />
      <Plaza />
      <Footer />

    </main>
  )
}
