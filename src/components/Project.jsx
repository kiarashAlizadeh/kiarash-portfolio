import { Link } from "react-router-dom"
function Project({ pic, title, technologies, link }) {
  return (
    <>
      <div className="mx-2 select-none rounded-2xl bg-[#a6bcfa]">
        <img src={pic} alt="" className="rounded-t-2xl" />
        <div className="flex flex-col items-center py-3">
          <span className="text-3xl font-black text-white">{title}</span>
          <div className="mt-2 flex flex-col gap-y-2">
            <span className="flex items-center  gap-x-5 text-xl font-bold">
              Technologies:
              <span>{technologies}</span>
            </span>
            <span className="flex items-center gap-x-6 text-xl font-bold">
              See WebSite:
              <Link
                to={link}
                className="text-xl font-black text-blue-500 hover:text-blue-400"
              >
                website
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
