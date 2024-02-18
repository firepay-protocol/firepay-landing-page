import Image from "next/image";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <nav className="absolute w-full py-10 px-10">
      <div className="glassBackground px-10 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Image src={"/logo.svg"} width={45} height={45} alt="logo" />
          <h1 className="ml-3 font-bold text-xl">Firepay</h1>
        </div>
        <div>
          <ul className="flex gap-14 text-textGrey">
            <Popover className={"relative"}>
              {({ open }) => (
                <>
                  <Popover.Button>
                    <li className="hover:text-white cursor-pointer">
                      Products
                    </li>
                    {open && (
                      <ChevronDownIcon className="absolute w-5 h-5 left-5" />
                    )}
                  </Popover.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel
                      className={
                        "absolute w-56 px-5 py-5 bg-backgroundColor2 rounded-md top-14 -left-20"
                      }
                    >
                      <ul className="grid gap-5 z-10">
                        <li>Crypto Payments</li>
                        <li>Subscriptions</li>
                        <li>Crypto Payment Links</li>
                        <li>Salaries</li>
                      </ul>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className={"relative"}>
              {({ open }) => (
                <>
                  <Popover.Button>
                    <li className="hover:text-white cursor-pointer">
                      Integrations
                    </li>
                    {open && (
                      <ChevronDownIcon className="absolute w-5 h-5 left-5" />
                    )}
                  </Popover.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Popover.Panel
                      className={
                        "absolute w-56 px-5 py-5 bg-backgroundColor2 rounded-md top-14 -left-20 z-10"
                      }
                    >
                      <ul className="grid gap-5">
                        <li>React</li>
                        <li>React Native</li>
                        <li>Woocommerce</li>
                      </ul>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <li className="hover:text-white cursor-pointer">Developers</li>
            <li className="hover:text-white cursor-pointer">About</li>
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
