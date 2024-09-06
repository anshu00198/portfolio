import Image from "next/image";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div
      // Animation variants
      variants={{
        hidden: { opacity: 0, y: 100 }, // Entry starts from below
        show: { opacity: 1, y: 0 }, // End position
        exit: { opacity: 0, y: 100 }, // Exit animation moving down
      }}
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{
        duration: 1, // Smooth transition duration
        ease: "easeInOut", // Smooth easing for a better look
      }}
      className="hidden xl:flex xl:max-w-none absolute right-40 top-40"
    >
      <div className="relative w-[500px] h-[600px]">
        <Image 
          src={'/name-logo-white.svg'} 
          alt='Logo' 
          fill
          style={{ objectFit: 'contain' }} // Retain aspect ratio
          priority // Load image eagerly for better performance
        />
      </div>
    </motion.div>
  );
};

export default Avatar;
