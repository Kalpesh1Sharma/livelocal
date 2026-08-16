import Enquiry from "@/components/Enquiry";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import FAQ from "@/components/FAQ";
import Jaipur from "@/components/Jaipur";
import Navbar from "@/components/Navbar";
import StayLocal from "@/components/StayLocal";
import WhyLivelocal from "@/components/WhyLivelocal";

export default function Home() {
  return (
    <main id="home">
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen scroll-mt-24 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="A local experience in Jaipur"
            className="h-full w-full object-cover object-[58%_center] sm:object-center"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] sm:text-sm">
              Jaipur · India
            </p>

            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Experience India
              <br />
              Like a Local.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:mt-7 md:text-xl">
              Stay, learn, explore and experience Jaipur beyond the usual
              tourist trail.
            </p>

            <a
              href="#enquire"
              className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-7 py-3.5 font-medium text-white transition hover:bg-[var(--accent-dark)] sm:mt-9"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <ExperienceShowcase />

      {/* Stay Local */}
      <StayLocal />

      {/* Why Livelocal */}
      <WhyLivelocal />

      {/* Jaipur */}
      <Jaipur />

      {/* FAQ */}
      <FAQ />

      {/* Enquiry */}
      <Enquiry />
    </main>
  );
}