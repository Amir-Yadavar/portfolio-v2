import HeroCanvas from "@/components/module/HeroCanvas/HeroCanvas";
import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa";

function HeroSection() {
  const t = useTranslations("HomePage");
  return (
    <section className="mt-25">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 p-20">
          <p className="text-3xl text-gray-600 dark:text-gray-400 py-2">
            {t("hero.welcome_text")}
          </p>
          <h1 className="text-7xl font-bold py-2">
            {t.rich("hero.my_name", {
              style: (chunks) => (
                <strong className="font-bold bg-(image:--gradient) inline-block text-transparent bg-clip-text">
                  {chunks}
                </strong>
              ),
            })}
          </h1>
          <h2 className="text-3xl py-4">{t("hero.position")}</h2>
          <p className="text-gray-600 dark:text-gray-400 py-2 text-2xl">
            {t.rich("hero.text_hero", {
              br: () => <br />,
            })}
          </p>
          <div className="flex items-center my-10">
            <a
              href=""
              className="flex items-center bg-(image:--gradient) p-4 rounded-xl m-2"
            >
              <span>{t("hero.btn_text_1")}</span>
              <span className="px-2">
                <FaAngleRight />
              </span>
            </a>
            <a
              href=""
              className="flex items-center theme-shadow p-4 rounded-xl m-2"
            >
              <span>{t("hero.btn_text_2")}</span>
              <span className="px-2">
                <FaAngleRight />
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 relative" id="hero-canvas">
          <HeroCanvas />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
