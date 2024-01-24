import Image from "next/image";

const Header = () => {
  return (
    <nav className="fixed  w-full py-10 px-10">
      <div className="glassBackground px-10 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={"/logo.svg"} width={45} height={45} alt="logo" />
          <h1 className="ml-3 font-bold text-xl">Firepay</h1>
        </div>
        <div>
          <ul className="flex gap-6 text-textGrey">
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Integrations</li>
            <li className="hover:text-white cursor-pointer">Developer</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
