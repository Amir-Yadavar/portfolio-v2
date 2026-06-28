import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function MyProjectCard() {
  return (
    <div className="w-[300px] bg-purple-50 dark:bg-(--primary) theme-shadow p-4 rounded-xl flex flex-col">
      <div className="relative w-full h-40 rounded-xl">
        <Image
          src={"/img/homepage/myProjects/khanomy.webp"}
          alt=""
          fill
          className="w-full h-auto rounded-lg"
        />
      </div>
      <h4 className="pt-4 text-xs font-bold bg-(image:--gradient) inline-block text-transparent bg-clip-text">
        Shop
      </h4>
      <h5 className="py-2 font-bold text-xl">Khanomy</h5>
      <p className="py-2 h-22.5 overflow-hidden text-sm">
        modern shop by bootstarp and card product
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <div className="rounded-xl p-2 mx-1 text-[12px] theme-shadow">
            Next js
          </div>
          <div className="rounded-xl p-2 mx-1 text-[12px] theme-shadow">
            Tailwind
          </div>
          <div className="rounded-xl p-2 mx-1 text-[12px] theme-shadow">
            Typescript
          </div>
        </div>
        <span className="flex items-center justify-center rounded-full p-4 theme-shadow">
          <FaArrowRight />
        </span>
      </div>
    </div>
  );
}

export default MyProjectCard;
