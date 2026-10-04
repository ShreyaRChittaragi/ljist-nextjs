import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Dateline from "@/components/Dateline";
import Story from "@/components/Story";
import StatBand from "@/components/StatBand";
import Stay from "@/components/Stay";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Notes from "@/components/Notes";
import Location from "@/components/Location";
import BookForm from "@/components/BookForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Nav />
      <Hero />
      <Dateline />
      <Story />
      <StatBand />
      <Stay />
      <Amenities />
      <Gallery />
      <Notes />
      <Location />
      <BookForm />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
