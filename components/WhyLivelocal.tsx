const reasons = [
  {
    number: "01",
    title: "Go beyond the tourist trail",
    description:
      "See Jaipur through everyday life, not just the places you visit.",
  },
  {
    number: "02",
    title: "Connect with local people",
    description:
      "Stay with locals, share meals, learn Hindi and experience the city through real connections.",
  },
  {
    number: "03",
    title: "Stay long enough to feel at home",
    description:
      "Two to three weeks gives you time to slow down, settle in and experience India at a different pace.",
  },
];

export default function WhyLivelocal() {
  return (
    <section
      id="about"
      className="bg-[#e9dfd0] px-5 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <div className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] sm:text-sm">
            Why Livelocal
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-tight
              sm:text-5xl
              md:mt-6
              md:text-7xl
            "
          >
            Don't just visit India.
            <br />
            <span className="text-black/40">Experience it.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-relaxed
              text-black/60
              sm:text-lg
              md:mt-8
              md:text-xl
            "
          >
            Livelocal is about spending enough time in one place to move
            beyond sightseeing and become part of everyday life.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-14 border-t border-black/10 sm:mt-16 md:mt-24">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="
                group
                grid
                gap-5
                border-b
                border-black/10
                py-8
                sm:py-10
                md:grid-cols-[80px_1fr_1fr]
                md:gap-8
                md:py-14
                lg:grid-cols-[100px_1fr_1fr]
              "
            >
              {/* Number */}
              <span className="text-xs font-medium tracking-wide text-[var(--accent)] sm:text-sm">
                {reason.number}
              </span>

              {/* Title */}
              <h3
                className="
                  max-w-md
                  text-2xl
                  font-medium
                  leading-tight
                  tracking-tight
                  transition-transform
                  duration-300
                  sm:text-3xl
                  md:group-hover:translate-x-1
                "
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                className="
                  max-w-lg
                  text-sm
                  leading-relaxed
                  text-black/60
                  sm:text-base
                  md:text-lg
                "
              >
                {reason.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}