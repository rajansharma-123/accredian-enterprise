import Container from "@/components/common/Container";
import { programs } from "@/data/programs";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Enterprise Programs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Upskill your workforce with industry-leading programs
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Designed with top universities and industry experts to help
            organizations build future-ready teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  {program.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-600">
                  {program.duration}
                </p>

                <p className="mt-5 leading-7 text-slate-600">
                  {program.description}
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}