import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
      <Hero />
      <Services />
      <Process />
      <Contact />
    </main>
  );
}
