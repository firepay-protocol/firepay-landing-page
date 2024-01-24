import Header from "./header";
import { WithChildren } from "@/helpers";
import Footer from "./footer";
const Layout = ({ children }: WithChildren) => {
  return (
    <div className="bg-backgroudColor">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
