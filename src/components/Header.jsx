import { Link } from "react-router-dom"
import profile from "../assets/images/profile.jpg"

import { FaLongArrowAltRight } from "react-icons/fa"

function Header() {
  return (
    <>
      <div className="">
        {/* bg */}
        <div className="relative flex h-[750px]">
          <div className="w-1/2 bg-[#106a70] "> </div>
          <div className="flex w-1/2 flex-col items-center justify-between py-3">
            <span className="rounded-full bg-[#106a70] p-8"> </span>
            <span className="rounded-full bg-[#106a70] p-6 py-10">
              <span className="rounded-full bg-white px-7 py-4"> </span>
            </span>
          </div>
          <div className="absolute top-10 mx-10 flex flex-col items-center justify-between gap-y-5 rounded-br-[135px] rounded-tl-[135px] bg-gradient-to-l from-[#106a70]/40 to-white/40 px-9 py-10">
            <div className="w-fit rounded-full bg-white p-4">
              <img src={profile} alt="" className="w-40 rounded-full" />
            </div>
            <span className="text-center text-5xl font-black">
              I'm <span className=" text-[#55d9c0]">Kiarash </span>
              Alizadeh
            </span>
            <span className="w-4/5 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos fuga modi consequuntur asperiores! Magni eos vel
              perferendis dolores soluta! Tenetur quisquam quaerat labore id non
              aperiam itaque et. Ratione, facere.
            </span>
            <div className="flex items-center gap-x-5">
              <Link
                to=""
                className="flex items-center gap-x-2 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white"
              >
                See Projects <FaLongArrowAltRight />
              </Link>
              <Link to="" className="font-bold text-blue-500">
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
