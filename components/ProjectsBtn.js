import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 flex justify-center items-center">
      <Link
        href={'/work'}
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-center bg-cover bg-no-repeat group"
      >
        {/* Ensure the Image has proper dimensions */}
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=''
          className="animate-spin-slow w-[141px] h-[148px]" // Limit width/height for clarity
        />
        {/* Fix potential positioning issue with the arrow */}
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
