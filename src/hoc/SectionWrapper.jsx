import { motion } from "framer-motion";

// as the dir itself says its the higher order component that we used for wrapping our comps, ensures the code reusability and avoid repeative task

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// the reason why its hoc is, its gon wrap the another fn --> fn HOC()
const StarWrapper = (Component, idName) => // since its taking the 2 param comp and the id, when we wrap our comp with this hoc we ve to mention the comp (1st), and id/name of the comp that we wanna wrap.
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }} // viewport at first show it once and animate it ot 0.25 secs
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* to make our scroll icon scrollabe and down we re just rendering an empty space, so there by we re scrolling to the invisible spawn section */}
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
