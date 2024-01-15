import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ServiceCat from "@/components/ServiceCat";
import ServiceDetails from "@/components/ServiceDetails";

export default function Home() {
  return (
    <main className="space-y-10 md:space-y-24">
      <Hero/>
      <ServiceCat />
      <ServiceDetails />
      <Contact />
    </main>
  );
}
