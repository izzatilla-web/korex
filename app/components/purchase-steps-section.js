import {
  CarFront,
  CircleCheckBig,
  FileCheck,
  PhoneCall,
  ShipWheel,
} from "lucide-react";
import Wrapper from "../wrapper";

const purchaseSteps = [
  {
    id: "request",
    title: "ОСТАВИТЬ ЗАЯВКУ",
    description:
      "Вам сообщат стоимость авто или подберут лучшие варианты в ваш бюджет.",
    icon: PhoneCall,
  },
  {
    id: "agreement",
    title: "ЗАКЛЮЧИТЬ ДОГОВОР",
    description:
      "В офисе во Владивостоке, Краснодаре, Москве или дистанционно по электронной почте.",
    icon: FileCheck,
  },
  {
    id: "selection",
    title: "ПОДБОР И ПОКУПКА АВТО",
    description:
      "Предлагаем лучшие варианты на аукционах и согласовываем с вами ставку и финальный выбор.",
    icon: CarFront,
  },
  {
    id: "delivery",
    title: "ДОСТАВКА И ТАМОЖНЯ В РФ",
    description:
      "От 3-х недель. Подготавливаем документы и сопровождаем автомобиль до выдачи.",
    icon: ShipWheel,
  },
  {
    id: "handover",
    title: "ВЫДАЧА / ОТПРАВКА АВТО",
    description:
      "Доставим до транспортной компании, организуем отправку в ваш город или выдадим в офисе.",
    icon: CircleCheckBig,
  },
];

export default function PurchaseStepsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="absolute inset-x-0 bottom-0 h-[220px]" />

      <Wrapper className="relative">
        <div className="max-w-[760px]">
          <h2 className="text-[32px] font-unbounded uppercase leading-[0.96] tracking-[-0.07em] text-[#223d73] sm:text-[42px] lg:text-[56px]">
            КАК КУПИТЬ АВТОМОБИЛЬ
          </h2>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-10">
          {purchaseSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.id}
                className="group relative translate-y-0 transition duration-300 hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
                style={{
                  animation: `stepFadeUp 0.55s ease-out ${index * 90}ms both`,
                }}
              >
                <div className="flex h-full flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full text-[#2f6fd3] transition duration-300 group-hover:scale-105 group-hover:text-[#215dba]">
                    <Icon className="h-10 w-10" strokeWidth={1.9} />
                  </div>

                  <h3 className="mt-5 max-w-[240px] text-[18px] font-bold uppercase leading-[1.15] tracking-[-0.04em] text-[#2a4275] sm:text-[19px]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[250px] text-[15px] leading-[1.45] text-[#667b9f] sm:text-[16px]">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
