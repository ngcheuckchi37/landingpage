import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.1, 1.1] }}
      transition={{ duration: 0.3 }}
    >
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
  </motion.div>
);




const Business = () =>  {
  
  const { ref, inView } = useInView({
    threshold: 0.5, // Change this value to adjust the trigger point
  });
  
return (
  <section id="features" className={layout.section}>
    
    
    
    <div className={layout.sectionInfo} >
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
      transition={{ duration: 1 }}
    > 
      <h2 className={styles.heading2}>
      
        WHY LIQUID? <br className="sm:block hidden" /> <span className="text-gradient">We have greate security</span>{" "}
      </h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We create a mechanism to translate facts about identity, credentials, and other information into easily transferable and verifiable digital form. Allow businesses use them in the way they want and still be in control of this information.
      </p>
      

      <Button styles={`mt-10`} />
      </motion.div>
    </div>

    
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
      
    </div>
      
  </section>
  
);
      };
export default Business;
