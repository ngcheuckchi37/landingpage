import styles from "../style";
import { arrowUp } from "../assets";
import { motion } from "framer-motion";

const GetStarted = () => (
  <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
    


  <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
      
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className=" text-gradient">Get Started</span>
        </p>
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient"></span>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </p>
    </div>
  </div>

  </motion.div>
);

export default GetStarted;
