import { Link } from "react-router-dom"
import profile from "../assets/images/profile.jpg"

import { FaLongArrowAltRight } from "react-icons/fa"

function Header() {
  return (
    <>
      <div>
        <div className="relative flex h-[800px]">
          <div className="w-1/2 bg-[#106a70] "> </div>
          <div className="flex w-1/2 flex-col items-center justify-between py-3">
            <span className="rounded-full bg-[#106a70] p-8"> </span>
            <span className="rounded-full bg-[#106a70] p-6 py-10">
              <span className="rounded-full bg-white px-7 py-4"> </span>
            </span>
          </div>
          <div className="absolute top-[50px] mx-3 flex h-[700px] max-w-[1000px] flex-col items-center justify-between gap-y-5 rounded-br-[135px] rounded-tl-[135px] bg-gradient-to-l from-[#106a70]/40 to-white/40 px-9 py-10 md:left-1/4 md:right-1/4 md:min-w-[500px]">
            <div className="w-fit rounded-full bg-white p-2">
              <img src={profile} alt="" className="w-40 rounded-full sm:w-60" />
            </div>
            <span className="text-center text-4xl font-black">
              I'm <span className=" mamad text-[#55d9c0]">Kiarash </span>
              Alizadeh
            </span>
            <span className="sm:text-2xl xl:text-2xl text-justify">
              Hi, I'm Kiarash Alizadeh, a junior front-end developer devoted to
              crafting immersive digital experiences. My website showcases a
              portfolio of projects that blend technical expertise with creative
              vision, each embodying my commitment to innovation and
              user-centric design.
            </span>
            <div className="flex items-center gap-x-5">
              <Link
                to=""
                className="flex items-center gap-x-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white"
              >
                See Projects <FaLongArrowAltRight />
              </Link>
              <Link to="" className="font-bold text-blue-800">
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
