import { BlurFade } from "@/components/ui/blur-fade";
import MobileNav from "./navmobile";

export function BlurFadeTextDemo1() {
  return (
    <section
      id="header"
      className="flex flex-col w-full items-center text-center relative text-white"
    >
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-wide sm:text-5xl xl:text-6xl/none">
          Ты нажал на кнопку Обжечься? серьезно?
        </h2>
      </BlurFade>
      <BlurFade
        delay={0.25 * 2}
        inView
        className="text-center md:w-[40%] top-4 relative flex flex-col"
      >
        <span className="text-pretty md:text-2xl text-xl md:px-0 px-4">
          Тогда я не несу ответственности за ожоги на твоей душе..
        </span>
      </BlurFade>
    </section>
  );
}
