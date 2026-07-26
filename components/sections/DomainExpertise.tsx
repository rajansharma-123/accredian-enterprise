import Container from "@/components/common/Container";
import { domainExpertise } from "@/data/domainExpertise";

export default function DomainExpertise() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Domain Expertise
          </h2>

          <p className="mt-4 text-slate-600">
            Industry-focused learning solutions across multiple domains.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domainExpertise.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <Icon className="mb-4 text-blue-600" size={32} />

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-2 text-slate-600">
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