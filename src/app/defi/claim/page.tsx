import Layout from "@/component/Layout/Layout"
import Dao from "@/component/Cards/Claim/Dao"
import Verlith from "@/component/Cards/Claim/Verlith"

function Claim() {
  return (
    <Layout>
    <div className="claim">
      <Dao />
      <Verlith />
    </div>
  </Layout>
  )
}

export default Claim