import { FaBootstrap,  FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMui, SiNextdotjs, SiRedux, SiThreedotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";

function MySkills() {
  const t = useTranslations("HomePage");

  const data_skills = [
    { id: 1, icon: <SiNextdotjs />, color: "#000000", title: "Next js" },
    { id: 2, icon: <FaReact />, color: "#61DAFB", title: "React js" },
    { id: 3, icon: <SiThreedotjs />, color: "#9E95B7", title: "Three js" },
    {
      id: 4,
      icon: <BiLogoTypescript />,
      color: "#3178C6",
      title: "Typescript",
    },
    { id: 5, icon:<FaJsSquare />, color: "#F7DF1E", title: "Javascript" },
    { id: 6, icon: <RiTailwindCssFill />, color: "#06B6D4", title: "Tailwind" },
    { id: 7, icon: <FaBootstrap />, color: "#7952B3", title: "Bootstrap" },
    { id: 8, icon: <SiMui />, color: "#06B6D4", title: "MUI" },
    { id: 9, icon: <SiRedux />, color: "#764ABC", title: "Redux" },
    { id: 10, icon: <TbBrandThreejs />, color: "#D7FF64", title: "R3F" },
    { id: 11, icon: <FaNodeJs />, color: "#5FA04E", title: "Node js" },
  ];

  return (
    <section className="p-5 lg:p-15">
      <div className="">
        <h2 className="py-2 font-bold bg-(image:--gradient) inline-block text-transparent bg-clip-text">
          {t("my_skills.title_sec_1")}
        </h2>
        <h3 className="text-4xl font-bold pb-2">
          {t.rich("my_skills.title_sec_2", {
            style: (chunks) => (
              <strong className="font-bold bg-(image:--gradient) inline-block text-transparent bg-clip-text">
                {chunks}
              </strong>
            ),
          })}
        </h3>
        <div className=" my-4">
          <Marquee
            speed={40}
            pauseOnHover
            gradient={false}
            style={{ padding: "10px" }}
          >
            {data_skills.map((item) => (
              <div
                key={item.id}
                className="
                            flex
                            items-center
                            gap-4
                            px-6
                            py-5
                            rounded-2xl
                            theme-shadow
                            hover:-translate-y-1
                            hover:scale-105
                            transition-all
                            duration-300
                            min-w-48
                            cursor-pointer
                            m-2
                         "
              >
                <span className="text-5xl" style={{ color: item.color }}>
                  {item.icon}
                </span>

                <div>
                  <h4 className="font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
