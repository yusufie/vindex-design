import Layout from "@/component/Layout/Layout";
import Participation from "@/component/Cards/Participation/Participation";
import Countdown from "@/component/Cards/Countdown/Countdown";

function Defi() {
  return (
    <Layout>
      
      {/* <h1 className="eligible">Status check : ELIGIBLE</h1> */}
      <div className="defi">
        <Participation />
        <Countdown />
      </div>
      
    </Layout>
  );
}

export default Defi;
