import Header from "./header";
import { WithChildren } from "@/helpers";
import Footer from "./footer";
const Layout = ({ children }: WithChildren) => {
  return (
    <div className="bg-backgroudColor h-screen">
      <Header />
      <div className="pt-40 px-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
