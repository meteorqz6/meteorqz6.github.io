import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contributions from "@/components/Contributions";
import Experience from "@/components/Experience";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contributions />
        <Experience />
        <Background />
      </main>
      <Footer />
    </>
  );
}
