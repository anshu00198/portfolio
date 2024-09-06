import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import DownloadResumeBtn from '../components/DownloadResumeBtn'; // Import the button component
import Avatar from '../components/Avatar';
import { fadeIn } from '../variants';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-blue-30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Welcome to My<br /><span className="text-accent">Android Developer {' '}</span>Portfolio
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Hi, I&apos;m Anshul Bharti, an enthusiastic and dedicated Android developer eager to turn ideas into powerful mobile applications. As a recent graduate with a strong foundation in mobile app development, I&apos;m passionate about creating intuitive and engaging apps that provide a seamless user experience.
          </motion.p>
          <div className="flex flex-col xl:flex-row items-center xl:items-center gap-4 xl:gap-8">
            <div className="xl:flex gap-4 items-center xl:items-center hidden">
              <ProjectsBtn /> {/* Hidden on small screens */}
            </div>
            <DownloadResumeBtn /> {/* Always visible */}
          </div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          {/* Ensure the bg-explosion class is correctly defined in your CSS with a valid background image */}
        </div>
        <div>
          <ParticlesContainer />
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute top-10 right-10"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
