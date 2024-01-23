import Header from "./header";
import { WithChildren } from "@/helpers";
import Footer from "./footer";
const Layout = ({ children }: WithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
