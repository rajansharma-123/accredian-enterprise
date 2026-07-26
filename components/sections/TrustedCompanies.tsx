import Image from "next/image";
import Container from "@/components/common/Container";
import { companies } from "@/data/companies";

export default function TrustedCompanies() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Trusted Worldwide
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Trusted by Leading Enterprises
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Organizations across industries rely on Accredian Enterprise to
            upskill employees and build future-ready teams.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
           <div
  key={company.name}
  className="flex h-28 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
>
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={80}
                className="max-h-full max-w-full object-contain"
              />

              {/* <p className="mt-3 text-sm font-medium text-gray-700">
                {company.name}
              </p> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}