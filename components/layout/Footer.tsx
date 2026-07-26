import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400">
              Accredian
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Empowering enterprises with world-class learning solutions
              and workforce transformation programs.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Company
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Resources
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contact
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>Email: enterprise@accredian.com</li>
              <li>Phone: +91 xxxxxxxxx</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Accredian. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}