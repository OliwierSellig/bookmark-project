import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Features from "@/components/features/Features";
import Extensions from "@/components/extensions/Extensions";
import Faq from "@/components/faq/Faq";
import Newsletter from "@/components/newsletter/Newsletter";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
