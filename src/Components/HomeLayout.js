import { Footer_New } from "../Common";
import ResponsiveAppBar from "../Common/ResponsiveAppBar";

// This is a layout component in Next.js that renders children components inside the layout.
const HomeLayout = ({ children }) => {
  return (
    <>
      {/* The AppBar at the top of the page */}
      <ResponsiveAppBar />
      
      {/* The main content area where pages are rendered */}
      <main>{children}</main> 

      {/* The Footer at the bottom of the page */}
      <Footer_New />
    </>
  );
};

export default HomeLayout;
