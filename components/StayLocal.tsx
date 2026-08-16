export default function StayLocal() {
  return (
    <section className="px-5 py-16 sm:px-6 sm:py-20 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-[#eadfce] sm:rounded-[2rem]">

        {/* Mobile / Tablet Image */}
        <div className="relative md:hidden">
          <img
            src="/images/homestay.jpg"
            alt="A local homestay experience in Jaipur"
            loading="lazy"
            className="h-[420px] w-full object-cover sm:h-[500px]"
          />

          {/* Subtle image gradient */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Desktop Layout */}
        <div className="relative hidden min-h-[650px] md:block">
          <img
            src="/images/homestay.jpg"
            alt="A local homestay experience in Jaipur"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Desktop gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#eadfce]/95" />

          {/* Desktop text */}
          <div className="absolute inset-y-0 right-0 flex w-[45%] items-center p-10 lg:w-[42%] lg:p-14">
            <div className="max-w-sm">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] lg:text-sm">
                Stay Local
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-black lg:text-5xl">
                More than a place
                <br />
                to stay.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-black/65 lg:text-lg">
                Stay in a welcoming local home and experience Jaipur beyond
                hotels and tourist spaces. Share conversations, meals and
                everyday moments with your host.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Text */}
        <div className="px-6 py-12 sm:px-8 sm:py-14 md:hidden">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)]">
            Stay Local
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-tight text-black sm:text-4xl">
            More than a place
            <br />
            to stay.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-black/65">
            Stay in a welcoming local home and experience Jaipur beyond hotels
            and tourist spaces. Share conversations, meals and everyday
            moments with your host.
          </p>
        </div>

      </div>
    </section>
  );
}