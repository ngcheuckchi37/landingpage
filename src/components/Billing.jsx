import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";





const Billing = () => {
  
  const { ref, inView } = useInView({
    threshold: 0.5, // Change this value to adjust the trigger point
  });

return (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{ duration: 1 }}
    >
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      </motion.div>


      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{ duration: 1 }}
    >
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>
      </motion.div>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       
      </div>
    </div>
  </section>

);
};
export default Billing;
