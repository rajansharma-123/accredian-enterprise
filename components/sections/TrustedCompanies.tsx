import Container from "@/components/common/Container";
import { companies } from "@/data/companies";

export default function TrustedCompanies() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-center text-3xl font-bold">
          Trusted by Leading Companies
        </h2>

        <p className="mt-4 text-center text-gray-500">
          Organisations around the world trust Accredian for workforce upskilling.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex h-24 items-center justify-center rounded-xl border bg-white shadow-sm transition hover:shadow-lg"
            >
              <span className="font-semibold text-gray-700">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}