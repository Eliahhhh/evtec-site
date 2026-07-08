import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBadgeStrip from "./components/TrustBadgeStrip";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HoursContact from "./components/HoursContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBadgeStrip />
        <Services />
        <WhyChooseUs />
        <HoursContact />
      </main>
      <Footer />
    </>
  );
}
