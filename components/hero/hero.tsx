import BackgroundEffects from "./backgroundeffect";
import FloatingPieces from "./floatingpieces";
import Navbar from "../navbar/navbar";
import Container from "../common/container";
import HeroContent from "./heroContent";
import HeroImage from "./heroImage";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712]">
      <BackgroundEffects />

      <FloatingPieces />

      <div className="relative z-20">
        <Navbar />

        <Container>
          <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">
            <HeroContent />
            <HeroImage />
          </div>
        </Container>
      </div>
    </section>
  );
}