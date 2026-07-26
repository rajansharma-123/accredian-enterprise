import Container from "@/components/common/Container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Hear from organizations that have transformed their workforce with
            Accredian.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="italic text-slate-600">"{item.message}"</p>

              <h3 className="mt-6 text-xl font-semibold">{item.name}</h3>

              <p className="text-blue-600">{item.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}