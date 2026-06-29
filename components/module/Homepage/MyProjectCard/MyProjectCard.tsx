import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function MyProjectCard() {
  return (
    <div
      className="
      group
      w-[320px]
      rounded-3xl
      overflow-hidden
      bg-white
      dark:bg-(--primary)
      border
      border-black/5
      dark:border-white/5
      theme-shadow
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src="/img/homepage/myProjects/khanomy.webp"
          alt="Khanomy"
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category */}
        <span
          className="
            absolute
            top-4
            right-4
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            bg-white/90
            text-black
            backdrop-blur
          "
        >
          Shop
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">Khanomy</h3>

        <p
          className="
            text-sm
            text-(--lightGray)
            leading-7
            line-clamp-3
            mb-5
          "
        >
          Modern online shopping website developed using Next.js, TailwindCSS
          and TypeScript with responsive UI and optimized user experience.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["Next.js", "Tailwind", "TypeScript"].map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                text-xs
                font-medium
                bg-(--primaryToGold)/10
                text-(--primaryToGold)
                theme-shadow
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-(--primaryToGold)">
           
          </span>

          <button
            className="
              w-11
              h-11
              rounded-full
              flex
              items-center
              justify-center
              bg-(--primaryToGold)
              text-white
              transition-all
              duration-300
              group-hover:rotate-45
              group-hover:scale-110
            "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProjectCard;