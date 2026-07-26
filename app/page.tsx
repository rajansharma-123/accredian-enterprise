import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import Features from "@/components/sections/Features";
import Programs from "@/components/sections/Programs";
import DomainExpertise from "@/components/sections/DomainExpertise";
import SkillEnhancement from "@/components/sections/SkillEnhancement";
import Testimonials from "@/components/sections/Testimonials";
export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
          <Features />
          <Programs />
          <DomainExpertise />
          <SkillEnhancement />
          <Testimonials />

      </main>
    </>
  );
}