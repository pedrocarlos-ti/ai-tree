import Image from "next/image";
import Link from "next/link";

import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 px-12 shadow-light-300 dark:shadow-none">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevTree"
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          AI <span className="text-primary-500">Tree</span>
        </p>
      </Link>
      <p>Global Search</p>
      <Theme />
    </nav>
  );
};

export default Navbar;
