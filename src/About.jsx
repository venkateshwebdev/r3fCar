import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="min-h-screen w-full bg-white py-16 px-28 max-md:px-5 flex items-center gap-24  flex-col">
      <div className="flex flex-col gap-1">
        <motion.p initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:"0.2"}} className="text-4xl">EXOSKELETON</motion.p>
        <motion.p initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1,}} transition={{delay:"0.2"}} className="normaltext">
          Cybertruck is built with an exterior shell made for ultimate
          durability and passenger protection. Starting with a nearly
          impenetrable exoskeleton, every component is designed for superior
          strength and endurance, from Ultra-Hard 30X Cold-Rolled
          stainless-steel structural skin to Tesla armor glass.
        </motion.p>
        <motion.img initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:"0.4"}} className="pt-5" src="https://www.tesla.com/xNVh4yUEc3B9/03_Desktop.jpg" />
      </div>
      <div className="flex flex-col gap-8">
        <motion.div initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:"0.2"}} className="flex-col justify-between gap-5">
            <p className="text-4xl">PERFORMANCE AND EFFICIENCY</p>
            <p className="normaltext">Now entering a new class of strength, speed and versatility—only possible with an all-electric design. The powerful drivetrain and low center of gravity provides extraordinary traction control and torque—enabling acceleration from 0-60 mph in as little as 2.9 seconds and up to 500 miles of range.</p>
        </motion.div>
        <motion.img initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} transition={{delay:"0.4"}} src="https://www.tesla.com/xNVh4yUEc3B9/09_Desktop.jpg" className=" object-cover"  />
      </div>
    </div>
  );
};

export default About;