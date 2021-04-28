import Navbar from "./Navbar";
import Footer from "./Footer";

import Link from "next/link";

const Layout = ({ children, home }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      {!home && (
        <div>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
