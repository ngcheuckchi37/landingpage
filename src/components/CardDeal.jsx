import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const CardDeal = () => {

  const { ref, inView } = useInView({
    threshold: 0.5, // Change this value to adjust the trigger point
  });

  return (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Application of<br className="sm:block hidden" /> Digital identity
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Blockchain the basis of our trusted ledger where the proof of transactions of issuing these credentials can be stored. Once the Verifiable Credentials are issued, the fact of this transaction can be connected to and stored on the ledger.
      </p>
      
    
      <Button styles={`mt-10`} />
      
    </div>
    
    <div className={layout.sectionImg}>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{ duration: 1 }}
    >
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
      </motion.div>
    </div>
    
  </section>

);
    };   
export default CardDeal;
