import { Approach } from "@/components/Approach";
import { CtaBanner } from "@/components/CtaBanner";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { TickerStrip } from "@/components/TickerStrip";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TickerStrip />
        <Services />
        <Approach />
        <CtaBanner />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
