import Icon from "@/components/ui/icon";

const topics = [
  {
    icon: "Rainbow",
    title: "Что такое спектр",
    desc: "Спектр — это разложение света на составляющие цвета. Белый свет, проходя через призму, распадается на радугу от красного до фиолетового.",
  },
  {
    icon: "BarChart3",
    title: "Спектральная плотность",
    desc: "Спектральная плотность показывает, сколько энергии приходится на каждую длину волны. Это как «рецепт» света — какие цвета и в каком количестве в нём намешаны.",
  },
  {
    icon: "Ruler",
    title: "Измерение энергии в спектре",
    desc: "Чтобы измерить распределение энергии, учёные используют болометры и фотоэлементы. Они «чувствуют» яркость каждого участка спектра и переводят её в числа.",
  },
  {
    icon: "FlaskConical",
    title: "Спектральные аппараты",
    desc: "Спектрограф, спектроскоп и спектрометр — приборы, которые разделяют свет с помощью призм или дифракционных решёток и позволяют изучать его состав.",
  },
  {
    icon: "Layers",
    title: "Три типа спектров",
    desc: "Непрерывный — сплошная радуга от нагретых тел. Линейчатый — яркие линии от газов. Полосатый — группы линий от молекул. Каждый вещество — свой узор!",
  },
  {
    icon: "Search",
    title: "Спектральный анализ",
    desc: "По спектру можно определить состав вещества, не прикасаясь к нему. Так учёные узнают, из чего состоят звёзды за миллиарды километров от Земли.",
  },
];

export default function Featured() {
  return (
    <div className="bg-white px-6 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase mb-2 text-sm tracking-wide text-neutral-600">
          Изучаем свет
        </h3>
        <p className="text-3xl lg:text-5xl mb-12 text-neutral-900 leading-tight max-w-3xl">
          Шесть тем, которые помогут понять, как устроен свет и почему спектры — ключ к тайнам Вселенной
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="group p-6 border border-neutral-200 hover:border-neutral-900 transition-colors duration-300"
            >
              <div className="mb-4 text-neutral-900">
                <Icon name={topic.icon} fallback="Lightbulb" size={32} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-neutral-900">
                {topic.title}
              </h4>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
