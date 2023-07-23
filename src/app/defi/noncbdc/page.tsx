import Layout from "@/component/Layout/Layout"
import Balance from "@/component/Balance/Balance"
import Locknon from "@/component/Cards/Locknon/Locknon"
import Unlocknon from "@/component/Cards/Unlocknon/Unlocknon"

function Noncbdc() {
  return (
    <Layout>
      <div className="noncbdc">
        <Balance />
        <Locknon />
        <Unlocknon />
      </div>
    </Layout>
  )
}

export default Noncbdc