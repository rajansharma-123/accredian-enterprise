import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function CTA() {
  return (
    <section className="bg-blue-600 py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Transform Your Workforce?
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Partner with Accredian Enterprise to build future-ready teams
            through customized learning programs and measurable business
            outcomes.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button className="bg-white text-blue-600 hover:bg-slate-100">
              Book a Demo
            </Button>

            <Button className="border border-white bg-transparent text-white hover:bg-white hover:text-blue-600">
  Contact Sales
</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}