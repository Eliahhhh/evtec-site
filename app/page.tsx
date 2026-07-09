import Navbar from "./components/Navbar";
import FloatingQuoteButton from "./components/FloatingQuoteButton";
import Hero from "./components/Hero";
import TrustBadgeStrip from "./components/TrustBadgeStrip";
import Services from "./components/Services";
import QuoteEstimator from "./components/QuoteEstimator";
import WhyChooseUs from "./components/WhyChooseUs";
import HoursContact from "./components/HoursContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingQuoteButton />
      <main className="flex-1">
        <Hero />
        <TrustBadgeStrip />
        <Services />
        <QuoteEstimator />
        <WhyChooseUs />
        <HoursContact />
      </main>
      <Footer />
    </>
  );
}
