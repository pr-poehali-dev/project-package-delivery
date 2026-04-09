import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Reviews from "@/components/Reviews";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Featured />
        <Reviews />
        <Promo />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
