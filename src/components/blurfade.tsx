import { BlurFade } from "@/components/ui/blur-fade";
import { ShinyButtonDemo } from "./ShnBtn";

export function BlurFadeTextDemo() {
  return (
    <section
      id="header"
      className="flex flex-col w-full items-center -top-24 md:-top-0 relative text-white"
    >
      <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Что это такое?
        </h2>
      </BlurFade>
      <BlurFade
        delay={0.25 * 2}
        inView
        className="text-center md:w-[40%] top-4 relative flex flex-col"
      >
        <span className="text-pretty text-2xl tracking-tighter">
          Это ментальный ожог. Это будет больнее, чем когда-либо и у тебя
          останется шрам на душе.
        </span>
        <div>
          <ShinyButtonDemo />
        </div>
      </BlurFade>
    </section>
  );
}
