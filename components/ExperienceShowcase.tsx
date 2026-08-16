const experiences = [
  {
    number: "01",
    title: "Stay Local",
    description: "Live alongside everyday Jaipur.",
    image: "/images/homestay1.jpg",
    size: "large",
  },
  {
    number: "02",
    title: "Learn Hindi",
    description: "Learn the language through real conversations.",
    image: "/images/hindi.jpeg",
    size: "small",
  },
  {
    number: "03",
    title: "Practice Yoga",
    description: "Slow down and make space for yourself.",
    image: "/images/yoga.jpg",
    size: "small",
  },
  {
    number: "04",
    title: "Village Life",
    description: "See a side of India beyond the city.",
    image: "/images/village.jpg",
    size: "wide",
  },
  {
    number: "05",
    title: "Local Food",
    description: "Share food, stories and everyday moments.",
    image: "/images/food.jpg",
    size: "wide",
  },
];

export default function ExperienceShowcase() {
  return (
    <section
      id="experience"
      className="bg-[var(--background)] px-5 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] sm:text-sm">
            The Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:mt-5 md:text-6xl">
            A few weeks.
            <br />
            A different way to experience India.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg md:mt-6">
            Stay, learn, move, explore and share everyday moments with people
            who call Jaipur home.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 md:mt-16 md:grid-cols-2 md:gap-5">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className={`
                group relative overflow-hidden rounded-3xl
                min-h-[360px]
                sm:min-h-[400px]
                ${
                  experience.size === "large"
                    ? "md:row-span-2 md:min-h-0 md:h-[700px]"
                    : experience.size === "wide"
                      ? "md:col-span-2 md:h-[420px]"
                      : "md:h-[340px]"
                }
              `}
            >
              {/* Image */}
              <img
                src={experience.image}
                alt={experience.title}
                loading="lazy"
                className="
                  absolute inset-0
                  h-full w-full
                  object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />

              {/* Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/75
                  via-black/20
                  to-transparent
                "
              />

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

              {/* Content */}
              <div
                className="
                  absolute inset-x-0 bottom-0
                  p-5
                  sm:p-7
                  md:p-8
                  lg:p-9
                "
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/70 sm:text-xs">
                  {experience.number}
                </p>

                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                  {experience.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
                  {experience.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}