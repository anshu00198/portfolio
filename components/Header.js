import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
  <header className="absolute z-10 w-full top-0">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
      <Link href={'/'}>
      <Image src= {'/logo.svg'} width={220} height={15} alt='' priority={true} />
      </Link>
      <Socials />
      </div>
    </div>
  </header>
  );
};

export default Header;
