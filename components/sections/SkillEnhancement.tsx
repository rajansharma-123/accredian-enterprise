import Container from "@/components/common/Container";
import { skillEnhancement } from "@/data/skillEnhancement";

export default function SkillEnhancement() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Strategic Skill Enhancement
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Build a Future-Ready Workforce
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Accelerate employee growth through customized learning programs
            designed to improve productivity and business outcomes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {skillEnhancement.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}