import Project from "./Project"

// project images
import hotel from "../assets/images/projects/hotel.png"
import emojiGame from "../assets/images/projects/emojiGame.png"
import eriko from "../assets/images/projects/eriko.png"
import jadoo from "../assets/images/projects/jadoo.png"
import myFolio from "../assets/images/projects/myFolio.png"
import speakUp from "../assets/images/projects/speakUp.png"

function Projects() {
  const projects = [
    {
      id: 1,
      pic: speakUp,
      title: "Speak Up",
      technologies: "Tailwindcss, JS",
      link: "https://kiarashalizadeh.github.io/SPEAK-UP/",
    },
    {
      id: 2,
      pic: myFolio,
      title: "My Folio",
      technologies: "Tailwindcss, JS",
      link: "https://kiarashalizadeh.github.io/MYFOLIO/",
    },
    {
      id: 3,
      pic: eriko,
      title: "Eriko",
      technologies: "Tailwindcss",
      link: "https://kiarashalizadeh.github.io/ERIKO/",
    },
    {
      id: 4,
      pic: jadoo,
      title: "Jadoo",
      technologies: "Bootstrap, JS",
      link: "https://kiarashalizadeh.github.io/JADOO/",
    },
    {
      id: 5,
      pic: hotel,
      title: "Alizadeh Hotel",
      technologies: "React, Tailwindcss, Js",
      link: "https://hotel-managment-rose.vercel.app/",
    },
    // {
    //   id: 5,
    //   pic: emojiGame,
    //   title: "Emoji Game",
    //   technologies: "Html, Css, Js",
    //   link: "https://kiarashalizadeh.github.io/emoji-fullGame/",
    // },
  ]
  return (
    <>
      <div className="my-10 bg-teal-200 py-10">
        <div className="ml-2 text-3xl font-bold text-slate-700 sm:text-center">My Works</div>
        <div className="mt-5 flex items-center flex-col sm:gap-x-10 sm:justify-center flex-wrap gap-y-10 sm:flex-row">
          {projects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects
