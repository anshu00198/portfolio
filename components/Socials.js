import Link from "next/link";
import {RiInstagramLine, RiLinkedinBoxLine, RiGithubLine} from 'react-icons/ri';
const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg">
    <Link href="https://www.linkedin.com/in/anshul-bharti-5b8467277/" className="hover:text-accent transition-all duration-300">
    <RiLinkedinBoxLine />
    </Link>
    <Link href="https://www.github.com/anshu00198" className="hover:text-accent transition-all duration-300">
    <RiGithubLine />
    </Link>
    <Link href="https://www.instagram.com/.anshu_here.?igsh=MWZ3Z2VobzIyaDFtbQ==" className="hover:text-accent transition-all duration-300">
    <RiInstagramLine />
    </Link>
  </div>
  );
};

export default Socials;
