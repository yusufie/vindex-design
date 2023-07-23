import Defiheader from "@/component/Defiheader/Defiheader";
import Definav from "@/component/Definav/Definav";
import Defileft from "@/component/Defileft/Defileft";

import style from "./layout.module.scss";
import Gradient from "@/component/Gradient/Gradient";

const Layout = ({ children }: any) => {
  return (
    <section>
      <Defiheader />

      <div className={style.defilayout}>
        <Definav />
        <Gradient />
        <main>{children}</main>
        <Defileft />
      </div>
      
    </section>
  );
};

export default Layout;
