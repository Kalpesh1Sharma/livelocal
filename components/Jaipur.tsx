export default function Jaipur() {
  return (
    <section
      id="jaipur"
      className="px-5 py-20 sm:px-6 sm:py-24 md:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="group relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">

          {/* Image */}
          <img
            src="/images/jaipur.jpg"
            alt="Jaipur, Rajasthan"
            loading="lazy"
            className="
              h-[520px]
              w-full
              object-cover
              transition-transform duration-700 ease-out
              sm:h-[600px]
              md:h-[700px]
              lg:h-[750px]
              group-hover:scale-[1.02]
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

          {/* Content */}
          <div
            className="
              absolute inset-x-0 bottom-0
              max-w-3xl
              p-6
              text-white
              sm:p-8
              md:p-12
              lg:p-16
            "
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/70 sm:text-xs md:text-sm">
              Jaipur · Rajasthan
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-tight
                sm:text-4xl
                md:mt-5
                md:text-6xl
              "
            >
              A city worth
              <br />
              slowing down for.
            </h2>

            <p
              className="
                mt-4
                max-w-xl
                text-sm
                leading-relaxed
                text-white/80
                sm:text-base
                md:mt-6
                md:text-lg
              "
            >
              From quiet neighbourhoods and local homes to colourful markets,
              historic streets and life beyond the tourist trail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}