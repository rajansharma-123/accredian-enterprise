import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function LeadForm() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Get in Touch
          </h2>

          <p className="mt-4 text-slate-600">
            Tell us about your organization and we'll help you build the right
            learning solution.
          </p>
        </div>

        <form className="mx-auto mt-12 max-w-3xl rounded-3xl bg-white p-8 shadow-lg">
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border p-4 outline-none focus:border-blue-600"
            />
          </div>

          <textarea
            rows={5}
            placeholder="Tell us about your requirements..."
            className="mt-6 w-full rounded-xl border p-4 outline-none focus:border-blue-600"
          />

          <Button className="mt-6 w-full">
            Submit
          </Button>
        </form>
      </Container>
    </section>
  );
}