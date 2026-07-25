import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Enterprise Learning Platform
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Empower Your Workforce with
              <span className="text-blue-600"> Future-Ready Skills</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Build high-performing teams through industry-aligned learning
              programs, certifications, and workforce transformation solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button>Book a Demo</Button>

              <button className="rounded-lg border border-blue-600 px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="flex h-[420px] w-full max-w-md items-center justify-center rounded-3xl bg-blue-100 shadow-xl">
              <p className="text-lg font-semibold text-blue-700">
                Hero Illustration
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}