import { FaBootstrap, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiNextdotjs, SiRedux, SiThreedotjs } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

function MySkills() {

    const data_skills = [
        { id: 1, icon: <SiNextdotjs />, color: "#000000", title: "Next js" },
        { id: 2, icon: <FaReact />, color: "#61DAFB", title: "React js" },
        { id: 3, icon: <SiThreedotjs />, color: "#9E95B7", title: "Three js" },
        { id: 4, icon: <BiLogoTypescript />, color: "#3178C6", title: "Typescript" },
        { id: 5, icon: <FaJs />, color: "#F7DF1E", title: "Javascript" },
        { id: 6, icon: <RiTailwindCssFill />, color: "#06B6D4", title: "Tailwind" },
        { id: 7, icon: <FaBootstrap />, color: "#7952B3", title: "Bootstrap" },
        { id: 8, icon: <SiRedux />, color: "#764ABC", title: "Redux" },
        { id: 9, icon: <TbBrandThreejs />, color: "#D7FF64", title: "R3F" },
        { id: 10, icon: <FaNodeJs />, color: "#5FA04E", title: "Node js" },
    ]

    return (
        <section>
            <div className="">
                <h2 className="py-2 font-bold">My Skills</h2>
                <h3 className="text-4xl font-bold pb-2">
                    Technologies i work
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                        with
                    </span>
                </h3>
                <div className="flex items-center">
                    {data_skills.map(item => (
                        <div className="flex flex-col items-center p-4 m-2 rounded-2xl w-42" key={item.id}>
                            <span className={`flex items-center justify-center text-4xl`} style={{ color: item.color }}>{item.icon}</span>
                            <h6 className="py-5">{item.title}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MySkills
