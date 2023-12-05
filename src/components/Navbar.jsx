import { Link } from "react-router-dom"

import logo from "../assets/images/logo.svg"

import { BsMoonStarsFill } from "react-icons/bs"

function Navbar() {
  return (
    <>
      <nav className="mb-2 flex items-center justify-between px-3 py-2">
        <img src={logo} alt="" className="w-8" />

        <ul className="flex items-center gap-x-5">
          <li className="cursor-pointer">
            <BsMoonStarsFill />
          </li>
          <li className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-2 py-1 font-bold text-white">
            Resume
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
