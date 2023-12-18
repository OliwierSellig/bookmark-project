import Extensions from "@/components/extensions/Extensions";
import Faq from "@/components/faq/Faq";
import Features from "@/components/features/Features";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <Faq />
      </main>
    </>
  );
}
