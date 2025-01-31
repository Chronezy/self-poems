"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] rounded-md h-2/3 flex flex-col bg-neutral-900"
            >
              <div>
                <div className="flex md:justify-center md:text-center justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 md:hidden text-white"
                    onClick={() => setActive(null)}
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm md:text-sm lg:text-base h-fit flex flex-col items-start gap-4 text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="z-10 w-fit grid grid-cols-2 md:grid-cols-3 px-4 items-center gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-neutral-900 hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 text-center text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 text-center text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Riyu, Mrinchik",
    title: "Дуэт стихийных бедствий",
    ctaText: "Закрыть",
    content: () => {
      return (
        <p>
          скребя кровавыми руками по той ободраной стене, его всегда я
          вспоминаю, всегда стоящего во тьме и вместе с ним мы вспоминаем
          кроваво-красный маскарад и в нем увидит себя каждый, кто хоть разок
          видал закат. Когда-нибудь тебя увижу, уже стоящего в свету, хочу
          сказать как ненавижу хочу сказать я как люблю. Меня вдруг мысль
          посетила, что 3 лишний среди нас и эта мысль нас затмила, что он тут
          для отвода глаз. И солнце село незаметно, уже закончился закат,
          вернусь к тебе я непреметно, и жизнь возьму я напрокат. И снова двое у
          окна, смотрели на плиту от гроба и дули сильные ветра, попутно насылая
          злобу. Проснулся я от стука сердца, осознавая что всё был сон. Слеза
          скатилась словно скерцо, поставил жизнь свою на кон. Забыть тебя я не
          смогу, ведь время это не излечит, хочу я выразить мольбу и всё ж
          сказать до новой встречи.
        </p>
      );
    },
  },
  {
    description: "Riyu, Мrinchik",
    title: "Душевная тишина",
    ctaText: "Закрыть",
    content: () => {
      return (
        <p>
          В потоке мыслей бесконечно, нет ни секунды тишины Это будет длиться
          вечность? Прошу мне место покажи. Где я смогу сидеть один, не думать,
          жить лишь тишиной. И лишь один мелатонин, будет заполнять покой. Даже
          шум дождя по крыше, успокоит крик души. Покой поднимит только выше
          прошу меня опустоши. Пусть я сойду с ума в глуши, чем буду одинок в
          толпе. Пусть эта тишина души, заполнит шум весь, что во мне
        </p>
      );
    },
  },

  {
    description: "Riyu, Mrinсhik",
    title: "Цвет алой крови",
    ctaText: "Закрыть",
    content: () => {
      return (
        <p>
          Красный, цвет общепринятый кровИ. Что растекается внутри всех нас.
          Извлеки всю из меня, жизнь оборви. Тогда я больше не увижу вас.
          Красный, цвет светофора ты постой. Готов ли написать записку? Поверь,
          мне это не впервой. Ведь я отдался давно риску. Красный, цвет
          прекрасного цветка. Паучья лилия слишком опасна. Она убьет тебя
          наверняка. Я согласился бы единогласно. Что определяет красный цвет?
          Жизнь? Смерть? Или покой? Будет паучьей лилии расцвет? Будет и даже не
          впервой. Я согласен оборвать, давно не нужную мне душу. Красный цвет,
          цвет все же смерти, поможет совершить мне это. Я пройду путь, пусть в
          день, пусть в стужу В блокнот я запишу, вся песня спета..
        </p>
      );
    },
  },
  {
    description: "Riyu, Мrinсhik",
    title: "мысленное признание",
    ctaText: "Закрыть",
    content: () => {
      return (
        <p>
          Каждый мой миг лишь о тебе толкует Каждую секунду я вспоминаю лишь
          тебя Мир мне воплащение дарует Руками по стене пустыми проведя Миг
          рассеивается ветром Секунда пропадает каждый час Становлюсь я дальше с
          каждым метром Пытюсь вспомнить кто, какой из вас Ключ что найденый в
          глубине души твоей Использовать не в силах боле Надеюсь скоро станешь
          ты моей И напишу об этом в протоколе Пролог закончится, начнется бойня
          Истощая каждого из нас Умереть сейчас ты недостойна Тебя уже в который
          раз я спас И вот конец кровавого произведенья Публика ликует от
          восторга Тоьлько нам не хватит этого мгновенья Добраться до следющего
          морга Смерть уже не в силах что то сделать Ее я смог перехитрить Не
          сможет жизнями она отведать Но тело твое мне хоронить.
        </p>
      );
    },
  },
  {
    description: "Riуu, Mrinchik",
    title: "Иногда я чувствую себя..",
    ctaText: "Закрыть",
    content: () => {
      return (
        <p>
          Иногда я чувствую себя другим, настолько, что не замечаю это, раньше
          мир был словно мним, а сейчас он словно лето, раньше, я бы отсиделся
          дома, чем выйти прогуляться в дождь, мне не хватает даже слова, чтобы
          все мысли прогнать прочь, что стало поводом сиять? где же старый серый
          мир? я понял, что его мне больше не видать, я словно выпил какой-то
          элексир, теперь все кажется как будто ярче, трава вдруг стала зеленей,
          но на скамье сидит все тот же старче, ожидая вновь гостей, я не привык
          смотреть сквозь краски, смотреть, и чувствовать себя живым, вокруг все
          люди поснимали маски, мне кажется, я стал другим..
        </p>
      );
    },
  },
  {
    description: "Riуu, Mrinсhik",
    title: "Aap Ka Surooraa",
    ctaText: "Закрыть",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];
