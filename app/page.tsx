import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
      </main>
    </>
  );
}