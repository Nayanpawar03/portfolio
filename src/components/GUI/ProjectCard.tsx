import Link from 'next/link';
import React from 'react'
import { FaCode } from "react-icons/fa6";
import { RxEyeOpen } from "react-icons/rx";

interface ProjectCardProps {
  name: string;
  desc: string;
  imgUrl: string;
  src?: string;
  url?: string;
  duration: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ name, desc, imgUrl, src, url, duration }) => {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-xl bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition all duration-500">
          {src && (
            <Link
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className='h-14 w-14 mr-4 border-2 rounded-full border-[#ADB7BE] relative hover:border-white group/link'
            >
              <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {url && (<Link
            href={url}
            className='h-14 w-14 border-2 rounded-full border-[#ADB7BE] relative hover:border-white group/link'
            target="_blank"
            rel="noopener noreferrer"
          >
            <RxEyeOpen className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:text-white cursor-pointer group-hover/link:text-white" />
          </Link>
          )}
        </div>
      </div>
      <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
        <h5 className="text-xl font-semibold mb-2">{name}</h5>
        <p className="mb-2">{duration}</p>
        <p className="text-[#ADB7BE] text-base">{desc}</p>
      </div>
    </div>
  )
}

export default ProjectCard

// import React from 'react';

// const ProjectCard = ({ name, desc, imgUrl }) => {
//   return (
//     <div className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
//       {/* Image Section */}
//       <div
//         className="h-52 md:h-72 relative"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
//           <span className="text-white text-lg font-semibold">View More</span>
//         </div>
//       </div>
//       {/* Text Section */}
//       <div className="p-6 bg-gray-900">
//         <h5 className="text-xl font-semibold mb-2 text-white">{name}</h5>
//         <p className="text-gray-400">{desc}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
