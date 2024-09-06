import '../styles/globals.css';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Transition from '../components/Transition';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter(); // Get the current route

  return (
    <>
      <Head>
        <title>Anshul Bharti</title>
        <link rel="icon" href="/name-logo-white.svg" /> {/* Set favicon */}
      </Head>

      {/* Wrap everything inside the Layout */}
      <Layout>
        {/* AnimatePresence handles exit animations */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={router.route} // Ensure animation occurs on route change
            className="h-full"  // Ensure full height for transitions
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition settings
          >
            <Transition /> {/* Define any transitions like page fade-in/out */}
            <Component {...pageProps} /> {/* Render the specific page component */}
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
