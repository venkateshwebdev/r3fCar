import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { CarContext, ThemeContext } from "./Context";

const Home = () => {
  const { theme,setTheme } = useContext(ThemeContext);
  const {car,setCar} = useContext(CarContext)
  const cars = ["cybertruck", "challenger","Hoverer"];
  const [count, setCount] = useState(0);
  const themes=["#ff0000","#ffff00","#00ff00"]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={theme&&{backgroundColor:themes[car-1]}}
      className={`absolute flex items-center justify-center top-0 h-screen w-full backdrop-blur-sm overflow-hidden p-16 text-2xl ${
        theme && `border-[20px] border-black`
      }`}
    >
      {!theme && (
        <div
          className=" absolute text-5xl self-center bottom-0 text-transparent animate-pulse"
          style={{ WebkitTextStroke: "1px black" }}
        >
          Scroll DOWN
        </div>
      )}

{/* {!theme && (
        <div
          className=" absolute text-5xl z-50 self-center top-0 cursor-pointer right-0 text-transparent animate-pulse"
          style={{ WebkitTextStroke: "1px black" }}
          onClick={()=>setCar(prev=>prev+1)}
        >
          Next
        </div>
      )} */}


      {theme && (
        <motion.nav
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{delay:"1.2",type:"spring",stiffness:500}}
          className=" top-0 fixed flex items-center justify-between font-bold text-6xl h-[100px] z-50 w-full p-16"
        >
          <h1>C3r</h1>
          <div className="flex flex-col gap-5">
            <p className="h-[4px] w-[50px] bg-black"></p>
            <p className="h-[4px] w-[50px] bg-black"></p>
          </div>
        </motion.nav>
      )}
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className=" absolute text-[224px] self-center text-transparent"
        style={{ WebkitTextStroke: "3px #00000050" }}
      >
        #00{car}
      </motion.div>
      {theme && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: "1" }}
          className=" absolute text-[210px] self-center bottom-16 text-transparent"
          style={{ WebkitTextStroke: "4px black" }}
        >
          {cars[car-1]}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Home;
