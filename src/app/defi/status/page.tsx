import Layout from "@/component/Layout/Layout"
import Whitelist from "@/component/Cards/Whitelist/Whitelist"
import Check from "@/component/Cards/Check/Check"

function Status() {
  return (
    <Layout>
      <div className="status">
        <Whitelist />
        <Check />
      </div>
  </Layout>
  )
}

export default Status