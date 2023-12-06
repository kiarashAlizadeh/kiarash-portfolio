import { Link } from "react-router-dom"
function Project({ pic, title, technologies, link }) {
  return (
    <>
      <div className="mx-4 max-w-[300px] select-none rounded-2xl bg-[#106a70d8] text-white md:max-w-[350px]">
        <img src={pic} alt="" className="rounded-t-2xl" />
        <div className="flex flex-col items-center px-4 pb-5 pt-3">
          <span className="text-3xl font-black text-white">{title}</span>
          <div className="mt-2 flex flex-col gap-y-2">
            <span className="flex items-center gap-x-5">
              <span className=" text-xl font-bold">Technologies:</span>
              <span>{technologies}</span>
            </span>
            <span className="flex items-center gap-x-6 text-xl font-bold">
              See WebSite:
              <Link
                to={link}
                className="mamad text-xl font-black hover:text-blue-400"
              >
                Click me!
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
