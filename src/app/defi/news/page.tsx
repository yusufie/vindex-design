import Layout from "@/component/Layout/Layout"
import Countdown from "@/component/Cards/News/Countdown"
import Learnmore from "@/component/Cards/News/Learnmore"

function News() {
  return (
    <Layout>
    <div className="news">
      <Countdown />
      <Learnmore />
    </div>
  </Layout>
  )
}

export default News