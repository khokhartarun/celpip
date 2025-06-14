import { useRouter } from 'next/router';
import {UserProvider} from '../context/UserProvider';
import HomeLayout from '../Components/HomeLayout'; // Correct import path

// Import global CSS files here
import '../styles/index.css';
import '../styles/style_speakingCelpip.css';
import '../styles/style_pages.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Remove the GA functionality (commented out for now)
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     // Google Analytics functionality removed for now
  //     // ReactGA.pageview(url); 
  //   };

  //   // Initialize GA (only once)
  //   // ReactGA.initialize('YOUR_TRACKING_ID'); 

  //   // Track the initial page load
  //   // handleRouteChange(router.asPath);

  //   // Subscribe to route changes
  //   router.events.on('routeChangeComplete', handleRouteChange);

  //   // Cleanup the event listener when component unmounts
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <UserProvider>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </UserProvider>
  );
}

export default MyApp;
